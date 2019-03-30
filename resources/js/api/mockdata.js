/**
 * Mocking client-server processing
 */
const actions = [
	{
		id:5,
		action: 'local_bar',
		title: 'Beverages',
		items: [
			{
				id:123,
				title: 'Red Bull',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:123,
				title: 'Coffee',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:125,
				title: 'Soda',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		id:6,
		action: 'restaurant',
		title: 'Meals',
		items: [
			{
				id:2231,
				title: 'Fast Food',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:2232,
				title: 'Restaurant',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:2233,
				title: 'Homemade (Fresh)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:2234,
				title: 'Homemade (Processed)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
		]
	},
	{
		id:7,
		action: 'local_hospital',
		title: 'Pharmaceuticals',
		items: [
			{
				id:3239,
				title: 'Isotrtinoin',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3228,
				title: 'Ibuprofen',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3237,
				title: 'Adderall',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3235,
				title: 'Vyvanse',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3236,
				title: 'MDMA',
				desc: 'This is a description for this datapoint',
				val: 0 
			}
		]
	},
	{
		id:8,
		action: 'fitness_center',
		title: 'Fitness',
		items: [
			{
				id:4236,
				title: 'Steps',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		id:9,
		action: 'local_laundry_service',
		title: 'Hygiene',
		items: [
			{
				id:5236,
				title: 'Shower',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:5239,
				title: 'Brush Teeth',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		id:10,
		action: 'airline_seat_individual_suite',
		title: 'Sleep',
		items: [
			{
				id:6239,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	}
];

const effects = [
	{
		action: 'label_important',
		title: 'Pain',
		items: [
			{
				id:6239,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		action: 'label_important',
		title: 'Head',
		items: [
			{
				id:6239,
				title: 'Headache',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		action: 'label_important',
		title: 'Oral',
		items: [
			{
				id:6239,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		action: 'label_important',
		title: 'Sleep',
		items: [
			{
				id:6239,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		action: 'label_important',
		title: 'Body',
		items: [
			{
				id:6239,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		action: 'label_important', 
		title: 'Physiological',
		items: [
			{
				id:6239,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	}
];

export default {
	getActions (cb) {
		setTimeout(() => cb(actions), 100)
	},
	getEffects (cb) {
		setTimeout(() => cb(effects), 100)
	}
}