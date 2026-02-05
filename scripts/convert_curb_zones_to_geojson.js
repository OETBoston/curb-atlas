#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const inputArg = process.argv[2] || 'discovery/api_results/curbs.json';
const outputArg = process.argv[3] || 'discovery/api_results/curbs.geojson';
const policiesArg = process.argv[4] || 'discovery/api_results/policies.json';

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJSON(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf8');
}

function createPolicyLookup(policiesData) {
  const lookup = new Map();
  if (policiesData && policiesData.data && Array.isArray(policiesData.data.policies)) {
    policiesData.data.policies.forEach(policy => {
      if (policy.curb_policy_id) {
        lookup.set(policy.curb_policy_id, policy);
      }
    });
  }
  return lookup;
}

function removeNullProperties(obj) {
  const cleaned = {};
  for (const key in obj) {
    if (obj[key] !== null) {
      cleaned[key] = obj[key];
    }
  }
  return cleaned;
}

function convert(data, policyLookup) {
  if (!data || !data.data || !Array.isArray(data.data.zones)) {
    throw new Error('Input JSON does not appear to contain data.zones array');
  }

  const features = data.data.zones.map((zone) => {
    const geometry = zone.geometry || null;
    let properties = Object.assign({}, zone);
    delete properties.geometry;

    // Add policy names
    if (Array.isArray(zone.curb_policy_ids)) {
      properties.curb_policy_names = zone.curb_policy_ids.map(id => policyLookup.get(id)?.name || id);
    } else {
      properties.curb_policy_names = [];
    }

    // Check for disabled parking permit
    let hasDisabledPermit = false;
    if (Array.isArray(zone.curb_policy_ids)) {
      for (const id of zone.curb_policy_ids) {
        const policy = policyLookup.get(id);
        if (policy && policy.rules && Array.isArray(policy.rules)) {
          for (const rule of policy.rules) {
            if (rule.purposes && Array.isArray(rule.purposes) && rule.purposes.includes("'disabled_parking_permit'")) {
              hasDisabledPermit = true;
              break;
            }
          }
          if (hasDisabledPermit) break;
        }
      }
    }
    if (hasDisabledPermit) {
      properties.disabled_parking_permit = "true";
    }

    // Check for bus exception in no stopping
    let hasBus = false;
    if (Array.isArray(zone.curb_policy_ids)) {
      for (const id of zone.curb_policy_ids) {
        const policy = policyLookup.get(id);
        if (policy && policy.rules && Array.isArray(policy.rules)) {
          for (const rule of policy.rules) {
            if (rule.activity === "no stopping" && rule.user_classes_except && Array.isArray(rule.user_classes_except) && rule.user_classes_except.includes("'bus'")) {
              hasBus = true;
              break;
            }
          }
          if (hasBus) break;
        }
      }
    }
    if (hasBus) {
      properties.bus_only = "true";
    }
    // Check for permit required in no parking
    let hasPermitRequired = false;
    if (Array.isArray(zone.curb_policy_ids)) {
      for (const id of zone.curb_policy_ids) {
        const policy = policyLookup.get(id);
        if (policy && policy.rules && Array.isArray(policy.rules)) {
          for (const rule of policy.rules) {
            if (rule.activity === "no parking" && rule.purposes && Array.isArray(rule.purposes) && rule.purposes.includes("'permit'")) {
              hasPermitRequired = true;
              break;
            }
          }
          if (hasPermitRequired) break;
        }
      }
    }
    if (hasPermitRequired) {
      properties.permit_required = "true";
    }
    // Remove null properties
    properties = removeNullProperties(properties);



    return {
      type: 'Feature',
      geometry: geometry,
      properties: properties
    };
  });

  return {
    type: 'FeatureCollection',
    properties: removeNullProperties({
      version: data.version || null,
      time_zone: data.time_zone || null,
      last_updated: data.last_updated || null,
      currency: data.currency || null,
      author: data.author || null
    }),
    features: features
  };
}

try {
  const inputPath = path.resolve(process.cwd(), inputArg);
  const outputPath = path.resolve(process.cwd(), outputArg);
  const policiesPath = path.resolve(process.cwd(), policiesArg);

  if (!fs.existsSync(inputPath)) {
    console.error('Input file not found:', inputPath);
    process.exit(2);
  }
  if (!fs.existsSync(policiesPath)) {
    console.error('Policies file not found:', policiesPath);
    process.exit(2);
  }

  const src = readJSON(inputPath);
  const policies = readJSON(policiesPath);
  const policyLookup = createPolicyLookup(policies);
  const geo = convert(src, policyLookup);
  writeJSON(outputPath, geo);

  console.log('Wrote GeoJSON to', outputPath);
  console.log('Features:', geo.features.length);
} catch (err) {
  console.error('Conversion failed:', err && err.message ? err.message : err);
  process.exit(1);
}
