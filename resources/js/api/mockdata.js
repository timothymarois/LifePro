/**
 * Mocking client-server processing
 */
const actions = [
	{
		id:5,
		order:1,
		action: 'local_bar',
		title: 'Beverages',
		items: [
			{
				id:123,
				order:1,
				title: 'Red Bull',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:123,
				order:2,
				title: 'Coffee',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:125,
				order:3,
				title: 'Soda',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		id:6,
		order:2,
		action: 'restaurant',
		title: 'Meals',
		items: [
			{
				id:2231,
				order:1,
				title: 'Fast Food',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:2232,
				order:2,
				title: 'Restaurant',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:2233,
				order:3,
				title: 'Homemade (Fresh)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:2234,
				order:4,
				title: 'Homemade (Processed)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
		]
	},
	{
		id:7,
		order:3,
		action: 'local_hospital',
		title: 'Pharmaceuticals',
		items: [
			
			{
				id:3228,
				order:2,
				title: 'Ibuprofen (mg)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3237,
				order:3,
				title: 'Adderall (mg)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3235,
				order:4,
				title: 'Vyvanse (mg)',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:3236,
				order:5,
				title: 'MDMA',
				desc: 'This is a description for this datapoint',
				val: 0 
			}
		]
	},
	{
		id:8,
		order:4,
		action: 'fitness_center',
		title: 'Fitness',
		items: [
			{
				id:4236,
				order:1,
				title: 'Steps',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		id:9,
		order:5,
		action: 'local_laundry_service',
		title: 'Hygiene',
		items: [
			{
				id:5236,
				order:1,
				title: 'Shower',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:5239,
				order:2,
				title: 'Brush Teeth',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		id:10,
		order:6,
		action: 'airline_seat_individual_suite',
		title: 'Sleep',
		items: [
			{
				id:6239,
				order:1,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	}
];

const effects = [
	{
		order:1,
		action: 'label_important',
		title: 'Symptoms',
		items: [
			{
				id:6239,
				order:1,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		order:2,
		action: 'label_important',
		title: 'Head',
		items: [
			{
				id:6239,
				order:1,
				title: 'Headache',
				desc: 'This is a description for this datapoint',
				val: 0
			} 
		]
	},
	{
		order:3,
		action: 'label_important',
		title: 'Oral',
		items: [
			{
				id:6239,
				order:1,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		order:5,
		action: 'label_important',
		title: 'Sleep',
		items: [
			{
				id:6239,
				order:1,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		order:4,
		action: 'label_important',
		title: 'Body',
		items: [
			{
				id:6239,
				order:1,
				title: 'List Item',
				desc: 'This is a description for this datapoint',
				val: 0
			}
		]
	},
	{
		order:6,
		action: 'label_important', 
		title: 'State of Mind',
		items: [
			{
				id:6239,
				order:1,
				title: 'Emotional',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Motivated',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Depressed',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Angry',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Sadness',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Shame',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Fear',
				desc: 'This is a description for this datapoint',
				val: 0
			},
			{
				id:6239,
				order:1,
				title: 'Happy',
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