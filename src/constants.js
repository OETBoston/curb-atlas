export const mapboxAccessToken =
	'pk.eyJ1Ijoib2V0Ym9zdG9uIiwiYSI6ImNtbGExbzQ0MTA5MmkzZW4wZTR4OTh6YzUifQ.OfY3qzwoSTDPYmVJP_NlyA';

export const curbApiUrl = 'https://smart-curb-api-726931983438.us-east4.run.app';

export const CURB_ZONE_MINZOOM = 13;

export const TIMEOUT = 250;

// Boston
export const maxBounds = [
	-71.21060396634394, 42.23174784259396, -70.7944899306811, 42.55900946262469
];

// Chinatown
// export const maxBounds = [
// 	-71.07365299438388, 42.340870752393556, -71.05159019487846, 42.35695482226521
// ];

export const initialFilterState = [
	{
		title: 'Show available parking',
		open: true,
		options: [
			{
				label: 'Include spots requiring residential permits',
				id: 'permitted',
				value: false,
				type: 'checkbox'
			}
		]
	},
	{
		title: 'Highlight special zones',
		open: true,
		options: [
			{
				label: 'Accessible',
				id: 'accessible',
				value: false,
				type: 'toggle'
			},
			{
				label: 'Loading Zones',
				id: 'loadingZone',
				value: false,
				type: 'toggle'
			}
		]
	}
];

export const dayOfWeekOptions = [
	{ label: 'Sunday', value: 'sun' },
	{ label: 'Monday', value: 'mon' },
	{ label: 'Tuesday', value: 'tue' },
	{ label: 'Wednesday', value: 'wed' },
	{ label: 'Thursday', value: 'thu' },
	{ label: 'Friday', value: 'fri' },
	{ label: 'Saturday', value: 'sat' }
];

export const timeOptions = [
	{ label: '12:00 AM', value: 0 },
	{ label: '12:30 AM', value: 0.5 },
	{ label: '1:00 AM', value: 1 },
	{ label: '1:30 AM', value: 1.5 },
	{ label: '2:00 AM', value: 2 },
	{ label: '2:30 AM', value: 2.5 },
	{ label: '3:00 AM', value: 3 },
	{ label: '3:30 AM', value: 3.5 },
	{ label: '4:00 AM', value: 4 },
	{ label: '4:30 AM', value: 4.5 },
	{ label: '5:00 AM', value: 5 },
	{ label: '5:30 AM', value: 5.5 },
	{ label: '6:00 AM', value: 6 },
	{ label: '6:30 AM', value: 6.5 },
	{ label: '7:00 AM', value: 7 },
	{ label: '7:30 AM', value: 7.5 },
	{ label: '8:00 AM', value: 8 },
	{ label: '8:30 AM', value: 8.5 },
	{ label: '9:00 AM', value: 9 },
	{ label: '9:30 AM', value: 9.5 },
	{ label: '10:00 AM', value: 10 },
	{ label: '10:30 AM', value: 10.5 },
	{ label: '11:00 AM', value: 11 },
	{ label: '11:30 AM', value: 11.5 },
	{ label: '12:00 PM', value: 12 },
	{ label: '12:30 PM', value: 12.5 },
	{ label: '1:00 PM', value: 13 },
	{ label: '1:30 PM', value: 13.5 },
	{ label: '2:00 PM', value: 14 },
	{ label: '2:30 PM', value: 14.5 },
	{ label: '3:00 PM', value: 15 },
	{ label: '3:30 PM', value: 15.5 },
	{ label: '4:00 PM', value: 16 },
	{ label: '4:30 PM', value: 16.5 },
	{ label: '5:00 PM', value: 17 },
	{ label: '5:30 PM', value: 17.5 },
	{ label: '6:00 PM', value: 18 },
	{ label: '6:30 PM', value: 18.5 },
	{ label: '7:00 PM', value: 19 },
	{ label: '7:30 PM', value: 19.5 },
	{ label: '8:00 PM', value: 20 },
	{ label: '8:30 PM', value: 20.5 },
	{ label: '9:00 PM', value: 21 },
	{ label: '9:30 PM', value: 21.5 },
	{ label: '10:00 PM', value: 22 },
	{ label: '10:30 PM', value: 22.5 },
	{ label: '11:00 PM', value: 23 },
	{ label: '11:30 PM', value: 23.5 },
	{ label: '12:00 AM', value: 24, hide: true }
];

export const colors = {
	parkingAllowed: '#51ACFF', // Support blue 1
	parkingAllowedPermitted: '#216CFF', // Support blue 1
	parkingAllowedLight: '#99ceff', // lightened support blue 1
	parkingAllowedPermittedLight: '#699eff', // lightened support blue 1
	//freedomTrailRed: '#FB4D42', //<- Freedom Trail Red
	parkingNotAllowed: '#f58433',
	parkingNotAllowedLight: '#f9b685',
	loading: '#e22214',
	accessible: '#1871BD', // Optimistic Blue
	loadingIconFill: 'hsl(359, 95%, 75%)',
	loadingIconStroke: 'hsl(0, 0%, 20%)',
	accessibleIconFill: 'hsl(197, 71%, 73%)',
	accessibleIconStroke: 'hsl(0, 0%, 20%)',
	highlightColor: '#FFEE00', // Vivid Yellow
	highlightColorStroke: '#000000' // Black
};
