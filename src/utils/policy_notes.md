// rules
// PARKING
activity: "parking" => ['parking', 'no travel', 'no stopping', 'loading', 'no parking', 'stopping', 'no loading']
purposes: ["'permit'"], "'disabled_parking_permit'" ["'parking'", null, "'permit'", "'freight'", "'delivery'", "'waste_management'", "'disabled_parking_permit'", "'emergency_use'", "'rideshare'", "'school'", "'construction'", "'taxi'"]
user_classes: ["'accessible'"],
user_classes_except: [
"'motorcycle'",
"'scooter'",
"'moped'",
"'car'",
"'truck'",
"'van'"
]

// LOAD ZONES
activity: "loading"
// ACCESSIBLE
user_classes: ["'accessible'"],

// time_spans
designated_period: [null, 'street cleaning', 'holidays', 'snow emergency', 'emergency']

# designated_period_except

days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
time_of_day_start: 8:00
time_of_day_end: 20:00
