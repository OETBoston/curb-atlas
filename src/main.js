import { mount } from 'svelte';
import App from './components/App.svelte';
import mapboxStyles from 'mapbox-gl/dist/mapbox-gl.css?inline';
import geocoderStyles from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css?inline';
import globalStyles from './styles/global.scss?inline';

// Inject mapbox styles
const mapboxStyleTag = document.createElement('style');
mapboxStyleTag.textContent = mapboxStyles;
document.head.appendChild(mapboxStyleTag);

// Inject geocoder styles
const geocoderStyleTag = document.createElement('style');
geocoderStyleTag.textContent = geocoderStyles;
document.head.appendChild(geocoderStyleTag);

// Inject global styles
const globalStyleTag = document.createElement('style');
globalStyleTag.textContent = globalStyles;
document.head.appendChild(globalStyleTag);

// Mount app
function initApp() {
	const target = document.getElementById('boston-curb-atlas') || document.body;
	mount(App, { target });
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initApp);
} else {
	initApp();
}
