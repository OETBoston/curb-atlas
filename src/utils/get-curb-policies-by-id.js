import { fetchUrl } from './fetch';
import { curbApiUrl } from '../constants';

// Params
// id

let tempPolicyList = {
	version: '1.0',
	time_zone: 'US/Eastern',
	last_updated: 1767565837844,
	currency: 'USD',
	author: 'City of Boston',
	data: {
		policies: [
			{
				curb_policy_id: '0076db6b-7ff1-5aa8-98e0-b36548ace1ca',
				name: '1428421201_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3df58f31-8ee8-4e93-b795-06551a2d2a22',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '0076db6b-7ff1-5aa8-98e0-b36548ace1ca',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '20ad07f9-1632-5ca8-8747-ccdb3fec4258',
						days_of_month: null,
						curb_policy_id: '0076db6b-7ff1-5aa8-98e0-b36548ace1ca',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '007b3f23-83b9-51ce-8983-83dc03ebee71',
				name: '2119959374_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1ddab0c4-f5f0-4685-b120-4b1b6d8146ba',
						activity: 'no travel',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '007b3f23-83b9-51ce-8983-83dc03ebee71',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'cf260274-08a2-510e-ae6a-b5a8ad19951f',
						days_of_month: null,
						curb_policy_id: '007b3f23-83b9-51ce-8983-83dc03ebee71',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '019486bd-9a6d-5125-9ebb-7de656deec2f',
				name: '1855615714_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '93a1ca84-322e-449d-8680-1cc91b9c2b3d',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '019486bd-9a6d-5125-9ebb-7de656deec2f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0574709c-0738-5599-b4df-9611b31c6bdc',
						days_of_month: null,
						curb_policy_id: '019486bd-9a6d-5125-9ebb-7de656deec2f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '01962fe9-ed2e-5ddc-8ac8-727b46fb06b4',
				name: '1187604605_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '49ea8e70-244d-461f-bbd0-2e575cbb727e',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '01962fe9-ed2e-5ddc-8ac8-727b46fb06b4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '0ddef450-ff74-58e5-ada7-ece71221bdab',
						days_of_month: null,
						curb_policy_id: '01962fe9-ed2e-5ddc-8ac8-727b46fb06b4',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0259fd23-ca22-50f2-b272-a8262944e8ab',
				name: '1241191790_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'c6a0d446-c685-42b4-b3de-3967e5505975',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0259fd23-ca22-50f2-b272-a8262944e8ab',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'dac623c8-e950-5f40-a16c-23ce646dbd10',
						days_of_month: null,
						curb_policy_id: '0259fd23-ca22-50f2-b272-a8262944e8ab',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '10:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '030a6ad8-6196-5759-aec9-2ab9b119ea41',
				name: '1633819498_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '426b20b2-aaeb-45e0-9b49-148e5d569cb4',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '030a6ad8-6196-5759-aec9-2ab9b119ea41',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6b657555-0df9-5c08-92e6-7703f562c9dd',
						days_of_month: null,
						curb_policy_id: '030a6ad8-6196-5759-aec9-2ab9b119ea41',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '033e51dd-5d99-5f82-bbc0-636ad9349c4c',
				name: '1993796890_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '2640cc90-eaad-4140-af2a-f601ffe0b3f9',
						activity: 'loading',
						max_stay: null,
						purposes: ["'freight'", "'delivery'"],
						no_return: null,
						description: null,
						user_classes: ["'truck'", "'van'"],
						max_stay_unit: null,
						curb_policy_id: '033e51dd-5d99-5f82-bbc0-636ad9349c4c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '985b3f42-bf41-512a-baea-f327a5ae9170',
						days_of_month: null,
						curb_policy_id: '033e51dd-5d99-5f82-bbc0-636ad9349c4c',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '03ba7818-7c7d-5307-bf08-648992165742',
				name: '2002451969_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '547233c1-413c-4dd0-a1a4-d2d5acb7d043',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '03ba7818-7c7d-5307-bf08-648992165742',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'ab7f0754-3532-5b33-a359-bdda75a6f84e',
						days_of_month: null,
						curb_policy_id: '03ba7818-7c7d-5307-bf08-648992165742',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '03e2fd53-2785-539f-9c4c-46e29c68921c',
				name: '2022496940_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '6b26f1e9-02ad-4e7d-a33f-1e46c19a0cb5',
						activity: 'parking',
						max_stay: 10,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '03e2fd53-2785-539f-9c4c-46e29c68921c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '221b38ec-9349-5a93-b432-8d7b5e4dff96',
						days_of_month: null,
						curb_policy_id: '03e2fd53-2785-539f-9c4c-46e29c68921c',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '061b6fdd-2dd9-5553-8978-be1830057b71',
				name: '969141954_P0',
				description: null,
				published_date: 1767889393000,
				priority: 5,
				rules: [
					{
						name: null,
						rule_id: 'eb844411-8c4e-44b3-88c4-f87018df601c',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '061b6fdd-2dd9-5553-8978-be1830057b71',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0fdd9ea5-d9de-5db7-b3b3-c4a324558007',
						days_of_month: null,
						curb_policy_id: '061b6fdd-2dd9-5553-8978-be1830057b71',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '062ce217-1d99-5d4a-8843-05fa0fd25f95',
				name: '1386185077_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'e3832e4a-6698-4374-9556-0be925596b98',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '062ce217-1d99-5d4a-8843-05fa0fd25f95',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '9b83cfc1-9386-5c73-8459-674b0d2410cd',
						days_of_month: null,
						curb_policy_id: '062ce217-1d99-5d4a-8843-05fa0fd25f95',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '077d3464-dea2-50fa-92e8-97cc1888f9cf',
				name: '2119959374_P1',
				description: null,
				published_date: 1767889393000,
				priority: 4,
				rules: [
					{
						name: null,
						rule_id: '391543d2-fe3a-42b6-be08-567c24600a74',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '077d3464-dea2-50fa-92e8-97cc1888f9cf',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f007d0b6-8151-50d1-b491-e9ecdb01090c',
						days_of_month: null,
						curb_policy_id: '077d3464-dea2-50fa-92e8-97cc1888f9cf',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '07a02a9f-23d6-523f-8504-37a308c23fef',
				name: '1293529788_P0',
				description: null,
				published_date: 1767889393000,
				priority: 100,
				rules: null,
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '752d9f76-b7ba-5334-9022-345b75852ef7',
						days_of_month: null,
						curb_policy_id: '07a02a9f-23d6-523f-8504-37a308c23fef',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '081f3768-7cd1-57b5-9976-e118c032dad0',
				name: '41510984_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '2488ddfd-35db-41d0-8232-969279a32c46',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '081f3768-7cd1-57b5-9976-e118c032dad0',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '8e001f91-0af2-54ef-aa7f-d99b59344649',
						days_of_month: null,
						curb_policy_id: '081f3768-7cd1-57b5-9976-e118c032dad0',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0829a481-18de-50e4-80ca-e67f512fabdd',
				name: '699273770_P0',
				description: null,
				published_date: 1767889393000,
				priority: 5,
				rules: [
					{
						name: null,
						rule_id: '932909be-fac3-4299-b12a-1078f83e2f95',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0829a481-18de-50e4-80ca-e67f512fabdd',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '48820fe6-53d2-57a3-bfc5-10b739b19077',
						days_of_month: null,
						curb_policy_id: '0829a481-18de-50e4-80ca-e67f512fabdd',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '08807bc6-e454-5e74-88b6-80b31685017b',
				name: '16098189_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'd1447eec-081e-473e-a85b-ea3ee4e24001',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '08807bc6-e454-5e74-88b6-80b31685017b',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'electric'",
							"'moped'",
							"'scooter'",
							"'combustion'",
							"'electric_assist'",
							"'car'",
							"'autonomous'",
							"'bus'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'human'",
							"'truck'",
							"'van'"
						]
					},
					{
						name: null,
						rule_id: 'd1447eec-081e-473e-a85b-ea3ee4e24002',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '08807bc6-e454-5e74-88b6-80b31685017b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '7487f86c-ab1c-5784-b31b-82557f11d027',
						days_of_month: null,
						curb_policy_id: '08807bc6-e454-5e74-88b6-80b31685017b',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0886d5ed-9519-5fa2-8ee2-db871399de89',
				name: '1337061694_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0fa9a6c3-88f4-401a-a0d5-24d98cd63e62',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0886d5ed-9519-5fa2-8ee2-db871399de89',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b71c0566-01f1-5e46-843e-8566af868706',
						days_of_month: null,
						curb_policy_id: '0886d5ed-9519-5fa2-8ee2-db871399de89',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '08df1b77-c984-57d2-99ca-06f0d61e819f',
				name: '2119959374_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'abbe274a-2740-4787-8bcb-925f173d60da',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '08df1b77-c984-57d2-99ca-06f0d61e819f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '58c19af5-3f4d-580a-bd81-3150c43eb5ff',
						days_of_month: null,
						curb_policy_id: '08df1b77-c984-57d2-99ca-06f0d61e819f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0b4dc680-6e7e-5ef0-ba2c-1ae8126a6e7d',
				name: '2144535226_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '364b94ab-6b00-4133-894f-b44a83e32eda',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0b4dc680-6e7e-5ef0-ba2c-1ae8126a6e7d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ee31172c-5514-5132-98f7-f3b26bfe38e1',
						days_of_month: null,
						curb_policy_id: '0b4dc680-6e7e-5ef0-ba2c-1ae8126a6e7d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0bc911c3-8432-52e3-9b51-74e8d7a955de',
				name: '1561181563_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '84ffcfac-95e6-4bd0-8a47-83928585511a',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0bc911c3-8432-52e3-9b51-74e8d7a955de',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '58db6377-d44a-5029-a052-b763dc3a618b',
						days_of_month: null,
						curb_policy_id: '0bc911c3-8432-52e3-9b51-74e8d7a955de',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0beb5eac-c56f-5f74-9767-e3a857e27e29',
				name: '815647547_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ee77a417-a112-4dcd-a667-1a0c7a5799c1',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0beb5eac-c56f-5f74-9767-e3a857e27e29',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [5, 6, 7, 8, 9, 10, 11],
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'fb93c148-3047-5fe2-8f68-0abebd690344',
						days_of_month: null,
						curb_policy_id: '0beb5eac-c56f-5f74-9767-e3a857e27e29',
						weeks_of_month: [2, 4],
						time_of_day_end: '13:00',
						designated_period: null,
						time_of_day_start: '10:00',
						designated_period_except: null
					},
					{
						months: [1, 2, 3, 4, 12],
						end_date: null,
						start_date: null,
						days_of_week: ["'thu'"],
						time_span_id: 'fb93c148-3047-5fe2-8f68-0abebd690345',
						days_of_month: null,
						curb_policy_id: '0beb5eac-c56f-5f74-9767-e3a857e27e29',
						weeks_of_month: [2, 4],
						time_of_day_end: '13:00',
						designated_period: null,
						time_of_day_start: '10:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0e722d6f-7d0b-5c2a-ab51-8047546085c7',
				name: '1695955142_P3',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a64bb704-bf7c-41be-8cfc-12f3ff55f4b4',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0e722d6f-7d0b-5c2a-ab51-8047546085c7',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e672a493-123b-5742-85e3-1613ad573cb8',
						days_of_month: null,
						curb_policy_id: '0e722d6f-7d0b-5c2a-ab51-8047546085c7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0f041bb8-d758-563b-8441-e01845041ac6',
				name: '1621869769_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e5995060-3314-4f0e-8aef-dd1266ad9bd6',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0f041bb8-d758-563b-8441-e01845041ac6',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '9c7ad2cd-e483-5170-b762-e5561781d8b5',
						days_of_month: null,
						curb_policy_id: '0f041bb8-d758-563b-8441-e01845041ac6',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0f3013ac-9470-5fd9-be63-9853480c54bc',
				name: '1305691584_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'a36efe9d-f87a-41e3-a7a7-927e87b663bb',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0f3013ac-9470-5fd9-be63-9853480c54bc',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'moped'",
							"'scooter'",
							"'car'",
							"'bus'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'truck'",
							"'van'"
						]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'c70db52b-637c-5608-abcc-bf74bea266a9',
						days_of_month: null,
						curb_policy_id: '0f3013ac-9470-5fd9-be63-9853480c54bc',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '19:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '0ffa79f5-3826-53b4-9d63-59966f2b80c4',
				name: '991623199_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'ec8ea16d-3a17-4cdf-8de1-2471591b0fb3',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '0ffa79f5-3826-53b4-9d63-59966f2b80c4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd01fec0b-23a2-54dc-8eaa-65b29df4304f',
						days_of_month: null,
						curb_policy_id: '0ffa79f5-3826-53b4-9d63-59966f2b80c4',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '108e7b0b-796f-55bb-bc29-553c9161cc22',
				name: '853473695_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e165502f-783b-4690-9916-1883bec96762',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '108e7b0b-796f-55bb-bc29-553c9161cc22',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: 'e165502f-783b-4690-9916-1883bec96763',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'truck'", "'van'"],
						max_stay_unit: null,
						curb_policy_id: '108e7b0b-796f-55bb-bc29-553c9161cc22',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '11c37f21-37fc-5f90-a643-7c81c4017e8e',
						days_of_month: null,
						curb_policy_id: '108e7b0b-796f-55bb-bc29-553c9161cc22',
						weeks_of_month: null,
						time_of_day_end: '17:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '11c37f21-37fc-5f90-a643-7c81c4017e8d',
						days_of_month: null,
						curb_policy_id: '108e7b0b-796f-55bb-bc29-553c9161cc22',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '111e514c-432f-5d6f-98cd-ff1805d00a06',
				name: '1507996520_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b29220c7-e760-4701-b118-a98dffaff83a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '111e514c-432f-5d6f-98cd-ff1805d00a06',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '70751538-5691-5212-aebf-990bd0f86469',
						days_of_month: null,
						curb_policy_id: '111e514c-432f-5d6f-98cd-ff1805d00a06',
						weeks_of_month: [2, 4],
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '6:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '11aeef6e-4b58-53da-9ecf-f61d7b83c46c',
				name: '1965451486_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f11918b3-586d-4395-a1b6-0922387379b5',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '11aeef6e-4b58-53da-9ecf-f61d7b83c46c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ada9ad54-0eec-5485-a3eb-32c4442626fb',
						days_of_month: null,
						curb_policy_id: '11aeef6e-4b58-53da-9ecf-f61d7b83c46c',
						weeks_of_month: null,
						time_of_day_end: '14:00',
						designated_period: null,
						time_of_day_start: '11:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '11b5dd72-e78d-56d8-93e6-e1b2baad9d7c',
				name: '865688083_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '3bb09636-2ed2-41fd-812f-df880ac7d288',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '11b5dd72-e78d-56d8-93e6-e1b2baad9d7c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '13582ccd-d410-5fa6-897a-e95e8ffc7638',
						days_of_month: null,
						curb_policy_id: '11b5dd72-e78d-56d8-93e6-e1b2baad9d7c',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '13eed6cd-3867-58d8-9407-24914f6362bd',
				name: '1386185077_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '1ff7fa71-2d7f-4d93-a30e-e157ed71517f',
						activity: 'stopping',
						max_stay: 30,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '13eed6cd-3867-58d8-9407-24914f6362bd',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '03c2e2dd-8d0a-5732-a8fc-9a21089802c7',
						days_of_month: null,
						curb_policy_id: '13eed6cd-3867-58d8-9407-24914f6362bd',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1506f766-e444-516d-a415-407222ca51c3',
				name: '1917947872_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '4bdf6203-2503-49a8-87f0-391557a11894',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1506f766-e444-516d-a415-407222ca51c3',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'scooter'",
							"'moped'",
							"'car'",
							"'bus'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'truck'",
							"'van'"
						]
					},
					{
						name: null,
						rule_id: '4bdf6203-2503-49a8-87f0-391557a11895',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: [
							"'motorcycle'",
							"'scooter'",
							"'moped'",
							"'car'",
							"'bus'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'truck'",
							"'van'"
						],
						max_stay_unit: null,
						curb_policy_id: '1506f766-e444-516d-a415-407222ca51c3',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '2ddc3eba-ddcc-513b-b5b0-54ac7017fec1',
						days_of_month: null,
						curb_policy_id: '1506f766-e444-516d-a415-407222ca51c3',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1588a47f-1b15-5dd8-adfd-01ddcd9654f5',
				name: '780263531_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '7c6519c3-2c7b-444b-9602-6eee8c14c4e0',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1588a47f-1b15-5dd8-adfd-01ddcd9654f5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e48d0219-2f99-5aa6-833e-446a1069907a',
						days_of_month: null,
						curb_policy_id: '1588a47f-1b15-5dd8-adfd-01ddcd9654f5',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'street cleaning',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '16371207-adb4-5d21-94e1-af9b3728b412',
				name: '1299879925_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'f66a861e-2c64-41b4-8357-375dab830915',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '16371207-adb4-5d21-94e1-af9b3728b412',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '198ed3c8-e216-561b-b60a-755d008ef517',
						days_of_month: null,
						curb_policy_id: '16371207-adb4-5d21-94e1-af9b3728b412',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '17575fa1-b2ba-5802-9254-c1ba1b49fbca',
				name: '1008812842_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '52b3110e-39ad-4953-a92a-f2c34246d4eb',
						activity: 'loading',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '17575fa1-b2ba-5802-9254-c1ba1b49fbca',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '95a35715-34b0-560b-92cd-3dd20f9de006',
						days_of_month: null,
						curb_policy_id: '17575fa1-b2ba-5802-9254-c1ba1b49fbca',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '18c863af-b645-5cad-88cd-fbbbf949045d',
				name: '2119840540_P1',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: 'c23bbed2-67ab-42b7-80bc-fe26c516454a',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: '18c863af-b645-5cad-88cd-fbbbf949045d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a926eaca-0083-5b7a-b1a5-667d1212956d',
						days_of_month: null,
						curb_policy_id: '18c863af-b645-5cad-88cd-fbbbf949045d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1a1ad89c-35c9-5c02-86f0-aa66fb480d19',
				name: '2140985458_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f6a034e5-8256-4332-b36a-baa259e535ed',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1a1ad89c-35c9-5c02-86f0-aa66fb480d19',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '5ffd5968-adc3-5610-8be0-7839e183bb90',
						days_of_month: null,
						curb_policy_id: '1a1ad89c-35c9-5c02-86f0-aa66fb480d19',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1a601f88-084d-5df1-b0ba-e1b25e7c1b37',
				name: '2035997817_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ae2f7baf-1eec-4331-a179-ec7b4f4b0c8c',
						activity: 'stopping',
						max_stay: null,
						purposes: ["'emergency_use'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1a601f88-084d-5df1-b0ba-e1b25e7c1b37',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '1e6bf73b-0d7d-5e71-a8ac-9be5b389903a',
						days_of_month: null,
						curb_policy_id: '1a601f88-084d-5df1-b0ba-e1b25e7c1b37',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1a98e37e-0891-52f9-af97-6d528ce46988',
				name: '1429975465_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '7098bc74-496a-4d09-98d6-2e325d6a63b9',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1a98e37e-0891-52f9-af97-6d528ce46988',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a23365d7-9437-5c5e-bc10-b06b541f666b',
						days_of_month: null,
						curb_policy_id: '1a98e37e-0891-52f9-af97-6d528ce46988',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1b253422-63c1-5953-8b9b-5d79f05b9c45',
				name: '1342316922_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '509582f4-b1ac-4e1b-9b8c-6e459e16899f',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1b253422-63c1-5953-8b9b-5d79f05b9c45',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'"],
						time_span_id: '0e7e6d19-59b3-5bf3-a299-79261f4dc681',
						days_of_month: null,
						curb_policy_id: '1b253422-63c1-5953-8b9b-5d79f05b9c45',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: true
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0e7e6d19-59b3-5bf3-a299-79261f4dc682',
						days_of_month: null,
						curb_policy_id: '1b253422-63c1-5953-8b9b-5d79f05b9c45',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'holidays',
						time_of_day_start: null,
						designated_period_except: true
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0e7e6d19-59b3-5bf3-a299-79261f4dc683',
						days_of_month: null,
						curb_policy_id: '1b253422-63c1-5953-8b9b-5d79f05b9c45',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'holidays',
						time_of_day_start: null,
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1bef2832-4555-5de4-82b7-e5fa504a5906',
				name: '1563621326_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'efacc5ff-5bcb-4ac5-8fe8-27b4cebef190',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1bef2832-4555-5de4-82b7-e5fa504a5906',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'cf0b7118-fd4b-59b2-b8a8-aff6c1a03f4b',
						days_of_month: null,
						curb_policy_id: '1bef2832-4555-5de4-82b7-e5fa504a5906',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1c6d2a27-1099-58f7-8be0-e9bcdf9937d8',
				name: '1923410805_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3c1f079e-d150-4900-9ef5-26310afbeb91',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1c6d2a27-1099-58f7-8be0-e9bcdf9937d8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'fri'", "'tue'"],
						time_span_id: '24ed87cd-869d-5f1b-8d88-7af481e7412f',
						days_of_month: null,
						curb_policy_id: '1c6d2a27-1099-58f7-8be0-e9bcdf9937d8',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: 'street cleaning',
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1d3f79f3-91bf-5285-9a9f-3bc4bf89f683',
				name: '603072032_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '6b2769f3-5c92-4634-aaf3-1ccc23a39a6a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1d3f79f3-91bf-5285-9a9f-3bc4bf89f683',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'fri'", "'tue'"],
						time_span_id: 'bb5c2e53-46eb-5983-8733-e8fca104b0a6',
						days_of_month: null,
						curb_policy_id: '1d3f79f3-91bf-5285-9a9f-3bc4bf89f683',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1d47a644-6967-5855-b9b9-736ff94c3941',
				name: '397891352_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f1551a08-90f0-48cf-aacd-156906b07beb',
						activity: 'stopping',
						max_stay: 15,
						purposes: ["'delivery'", "'rideshare'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '1d47a644-6967-5855-b9b9-736ff94c3941',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0af9ce25-75f1-57e1-a04a-3fff06343dde',
						days_of_month: null,
						curb_policy_id: '1d47a644-6967-5855-b9b9-736ff94c3941',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1d7cb109-b807-555d-9af1-94a6641a65a9',
				name: '2057228427_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '36a4c700-1f92-49ef-b893-e3d68bc17e1d',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '1d7cb109-b807-555d-9af1-94a6641a65a9',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '1bd74589-9c46-5689-b2ba-053b04b728de',
						days_of_month: null,
						curb_policy_id: '1d7cb109-b807-555d-9af1-94a6641a65a9',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1de9d8ff-9b28-5f2b-9da3-3ff1c22f0b5e',
				name: '223698601_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '182b2c6f-b6e8-4d6e-bd8f-e2bc41890819',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1de9d8ff-9b28-5f2b-9da3-3ff1c22f0b5e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '667c5a28-5dbc-5786-a135-80181da525f4',
						days_of_month: null,
						curb_policy_id: '1de9d8ff-9b28-5f2b-9da3-3ff1c22f0b5e',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1e22ecb4-18fe-5e15-b3c0-428520ddd919',
				name: '706240754_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9dd6bc6e-8c11-4892-83b0-ee64057b842a',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1e22ecb4-18fe-5e15-b3c0-428520ddd919',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'", "'fri'"],
						time_span_id: 'b8af4baf-3a65-5d4a-9ea6-7a76f0ec1ce7',
						days_of_month: null,
						curb_policy_id: '1e22ecb4-18fe-5e15-b3c0-428520ddd919',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '14:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1f287bc6-94b0-5393-a1ee-0c7a27c72acf',
				name: '730659545_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1b3d14b5-5a67-427e-a82f-8df15b7e2ca3',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1f287bc6-94b0-5393-a1ee-0c7a27c72acf',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'f5e36ffb-6fe0-5b18-9559-5afabf616371',
						days_of_month: null,
						curb_policy_id: '1f287bc6-94b0-5393-a1ee-0c7a27c72acf',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'f5e36ffb-6fe0-5b18-9559-5afabf616372',
						days_of_month: null,
						curb_policy_id: '1f287bc6-94b0-5393-a1ee-0c7a27c72acf',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '1fcbcbad-bdd4-5d98-8f0b-91683c568bff',
				name: '653171150_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '8a6586b6-d8b6-4cd0-a268-196745fa62bd',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '1fcbcbad-bdd4-5d98-8f0b-91683c568bff',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '2dfe21b7-364a-5610-a5ca-68b3a69f8b0b',
						days_of_month: null,
						curb_policy_id: '1fcbcbad-bdd4-5d98-8f0b-91683c568bff',
						weeks_of_month: null,
						time_of_day_end: '21:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '20436e91-192d-5156-a1b5-badbdc927f77',
				name: '1429975465_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '48b240b9-5e0b-48ef-8de0-689a6be2fac1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '20436e91-192d-5156-a1b5-badbdc927f77',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e808874b-ac66-57d0-bba1-7fb013b57f6b',
						days_of_month: null,
						curb_policy_id: '20436e91-192d-5156-a1b5-badbdc927f77',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '220cef3c-57ae-5465-a2bf-3f26741bc687',
				name: '1902913885_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '164f1ff1-c951-4215-82ba-92ef0a023e6c',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '220cef3c-57ae-5465-a2bf-3f26741bc687',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'"],
						time_span_id: '7d588cfc-d1a8-5f6b-8db4-c1074e4df6be',
						days_of_month: null,
						curb_policy_id: '220cef3c-57ae-5465-a2bf-3f26741bc687',
						weeks_of_month: null,
						time_of_day_end: '13:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '225f8249-1c02-54a1-b8c3-3c128c072b1d',
				name: '275387053_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '74c77a65-7a5b-483d-80b6-f5776636cf04',
						activity: 'parking',
						max_stay: 1,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '225f8249-1c02-54a1-b8c3-3c128c072b1d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '6ddd8b9b-c53f-5279-ab25-9f342bfc62cd',
						days_of_month: null,
						curb_policy_id: '225f8249-1c02-54a1-b8c3-3c128c072b1d',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '23577481-4adb-5197-bb76-39cbbe43172b',
				name: '1162913009_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ddf70556-e574-44ee-97c7-253ecc0f0ac4',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '23577481-4adb-5197-bb76-39cbbe43172b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: '95e238e1-53d5-5ad7-87e3-5706c4df6ae5',
						days_of_month: null,
						curb_policy_id: '23577481-4adb-5197-bb76-39cbbe43172b',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '243ee575-097d-5a46-88dc-f3dfc1f725db',
				name: '1957223182_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'c2bdec63-7055-4ae3-b1c8-597194f857c5',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '243ee575-097d-5a46-88dc-f3dfc1f725db',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd485b832-4bcb-544c-8715-1b273d4322c4',
						days_of_month: null,
						curb_policy_id: '243ee575-097d-5a46-88dc-f3dfc1f725db',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '24661754-9974-5694-a218-d685df12895d',
				name: '1189393247_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '60a3f0bc-bfbd-4a14-b328-3adade55a126',
						activity: 'parking',
						max_stay: 4,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '24661754-9974-5694-a218-d685df12895d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '4503d4b1-1628-5cd1-bf43-2527a34b3668',
						days_of_month: null,
						curb_policy_id: '24661754-9974-5694-a218-d685df12895d',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '254f2721-babe-5ea9-a489-27f326badb7d',
				name: '1168508252_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '20165134-01a9-4dc4-8ecd-50eec787448a',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '254f2721-babe-5ea9-a489-27f326badb7d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '167f5120-aff9-5795-b4cb-b7d6ab258e2b',
						days_of_month: null,
						curb_policy_id: '254f2721-babe-5ea9-a489-27f326badb7d',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '26e8b906-28d2-583e-8a3a-c5c42817ee2c',
				name: '2063632809_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '83043382-54c9-4a7d-926d-38413f7f9328',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '26e8b906-28d2-583e-8a3a-c5c42817ee2c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'cbd946d4-934e-5b60-97d6-49ee3779bedb',
						days_of_month: null,
						curb_policy_id: '26e8b906-28d2-583e-8a3a-c5c42817ee2c',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: 'street cleaning',
						time_of_day_start: '0:01',
						designated_period_except: false
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '27bd7e08-3882-5ff3-8ce5-d56d9e8b4860',
				name: '2099516647_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '458847ff-fbcd-4a3d-b036-786c80d96c08',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '27bd7e08-3882-5ff3-8ce5-d56d9e8b4860',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '82b91288-d768-5c2f-817e-8ad02ed59d9e',
						days_of_month: null,
						curb_policy_id: '27bd7e08-3882-5ff3-8ce5-d56d9e8b4860',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2845ff4f-0788-5734-bdfe-20bff9ad038a',
				name: '1682915504_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '6d52c2d1-7540-4ff1-934b-7670a7d6e557',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2845ff4f-0788-5734-bdfe-20bff9ad038a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'bec4873a-366b-5374-95a5-e6f9a0a9f8f9',
						days_of_month: null,
						curb_policy_id: '2845ff4f-0788-5734-bdfe-20bff9ad038a',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '285dc4ae-fc3e-573a-a6bf-c2bd8eee9b53',
				name: '1335174025_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '39457be7-a7a4-4515-abc2-18dff08a6f85',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '285dc4ae-fc3e-573a-a6bf-c2bd8eee9b53',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'e61b8af1-572e-53f2-aea4-6af16529a9a5',
						days_of_month: null,
						curb_policy_id: '285dc4ae-fc3e-573a-a6bf-c2bd8eee9b53',
						weeks_of_month: [2, 4],
						time_of_day_end: '11:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '28957f80-d701-5ea2-b25b-9bb22a271c90',
				name: '476424450_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'e822bff8-7be6-4d71-93f9-c9a4f0baf609',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '28957f80-d701-5ea2-b25b-9bb22a271c90',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '54abf8f3-14af-5f0a-a801-4e085c159f01',
						days_of_month: null,
						curb_policy_id: '28957f80-d701-5ea2-b25b-9bb22a271c90',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'", "'sat'"],
						time_span_id: '54abf8f3-14af-5f0a-a801-4e085c159f02',
						days_of_month: null,
						curb_policy_id: '28957f80-d701-5ea2-b25b-9bb22a271c90',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '28ba52af-0a3c-5f0c-9500-b093f3fbcbec',
				name: '2063632809_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9f3593d9-939b-4169-8e1f-395866e94530',
						activity: 'loading',
						max_stay: 15,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '28ba52af-0a3c-5f0c-9500-b093f3fbcbec',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '3f375120-4dea-5156-a0fe-7b8237bf6a76',
						days_of_month: null,
						curb_policy_id: '28ba52af-0a3c-5f0c-9500-b093f3fbcbec',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '299533b3-188e-5e68-ab50-93716e2c042f',
				name: '424515828_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '2aec5e31-153c-466f-ac12-368081e2c240',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '299533b3-188e-5e68-ab50-93716e2c042f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '8abcbf28-79b0-57d6-a312-30d1515e9929',
						days_of_month: null,
						curb_policy_id: '299533b3-188e-5e68-ab50-93716e2c042f',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '29fee262-b8c6-5b93-8f0b-f99a3e051bac',
				name: '1196403307_P1',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: 'f996ebc2-1e43-4788-9c9a-0f1284655bd3',
						activity: 'loading',
						max_stay: null,
						purposes: ["'freight'", "'delivery'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '29fee262-b8c6-5b93-8f0b-f99a3e051bac',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '649584da-c5ae-5e96-9bbe-fb672be7c93a',
						days_of_month: null,
						curb_policy_id: '29fee262-b8c6-5b93-8f0b-f99a3e051bac',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'holidays',
						time_of_day_start: '9:00',
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2af89f56-6342-5c61-be18-f60b538eaa63',
				name: '1225398269_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '47108687-4559-4a78-a422-9d8cefe2de9a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2af89f56-6342-5c61-be18-f60b538eaa63',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'thu'"],
						time_span_id: '158cfe5e-8d8c-5dbb-a1d7-b5faed7fb5e5',
						days_of_month: null,
						curb_policy_id: '2af89f56-6342-5c61-be18-f60b538eaa63',
						weeks_of_month: null,
						time_of_day_end: '15:00',
						designated_period: 'street cleaning',
						time_of_day_start: '13:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2b627d24-c45f-51ad-92c0-71b4e9094a54',
				name: '1360473068_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ad93013b-2770-4d06-a77d-d5a444897ca9',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2b627d24-c45f-51ad-92c0-71b4e9094a54',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '9825c101-3c89-51be-a5a5-758892c586db',
						days_of_month: null,
						curb_policy_id: '2b627d24-c45f-51ad-92c0-71b4e9094a54',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2c6c7c61-2a49-5606-85a5-39e968736bca',
				name: '1561181563_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '37917841-7171-4972-b041-bda5b5fb04d6',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2c6c7c61-2a49-5606-85a5-39e968736bca',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '65146359-e0e6-56db-8ae8-a311c1d4eacb',
						days_of_month: null,
						curb_policy_id: '2c6c7c61-2a49-5606-85a5-39e968736bca',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '15:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2cbadf36-d4fd-5d93-9286-efbf69527f29',
				name: '327178142_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'a6792ac6-e645-45aa-bac9-872e86de1def',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2cbadf36-d4fd-5d93-9286-efbf69527f29',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'cd3a2168-2dd8-584d-9ddf-53466428324f',
						days_of_month: null,
						curb_policy_id: '2cbadf36-d4fd-5d93-9286-efbf69527f29',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: null,
						time_of_day_start: '21:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2ebf730d-50c4-5c19-91ee-c80d9fbb4a95',
				name: '1448231856_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a672f575-faa9-4ffa-bb9d-0cc590c44f1f',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2ebf730d-50c4-5c19-91ee-c80d9fbb4a95',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [4, 5, 6, 7, 8, 9, 10, 11],
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: '35a2af86-d1fc-549d-abaa-e578a4dc5dc4',
						days_of_month: null,
						curb_policy_id: '2ebf730d-50c4-5c19-91ee-c80d9fbb4a95',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2ee8c7b3-79d0-54a5-82f0-8327253a63ce',
				name: '2117286758_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'd17fbea1-ddec-43d2-928f-095facf4a79b',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2ee8c7b3-79d0-54a5-82f0-8327253a63ce',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '7537b13e-dbc7-5395-8278-1121cc055e6f',
						days_of_month: [2, 4],
						curb_policy_id: '2ee8c7b3-79d0-54a5-82f0-8327253a63ce',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2ef9e0fc-03a2-5679-a0f9-067fe5a037da',
				name: '1957223182_P3',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '00edfa28-4d3b-4ddc-b207-4d89f9ed1e38',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2ef9e0fc-03a2-5679-a0f9-067fe5a037da',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '70c71b30-1e91-594c-96f2-bd7fd73f48b1',
						days_of_month: null,
						curb_policy_id: '2ef9e0fc-03a2-5679-a0f9-067fe5a037da',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2f979ddd-aad8-5520-8d25-daa09d54b8ba',
				name: 'Default',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e32fbd99-1068-4848-9f5a-0da35b500c19',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2f979ddd-aad8-5520-8d25-daa09d54b8ba',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '4fa4989a-a522-525f-9570-6030a8b4c8be',
						days_of_month: null,
						curb_policy_id: '2f979ddd-aad8-5520-8d25-daa09d54b8ba',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '2fd254e4-3962-5556-ba40-0f8c4b746a55',
				name: '1941915488_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'caa9e338-37a1-4995-b8f0-08c02de3b88d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '2fd254e4-3962-5556-ba40-0f8c4b746a55',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '8c236c1d-d8f7-544d-b451-6fd100384575',
						days_of_month: null,
						curb_policy_id: '2fd254e4-3962-5556-ba40-0f8c4b746a55',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '31a6cc77-aafc-5fe0-875b-e7170d3b197b',
				name: '1082361786_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2b688850-50da-4a8a-a085-5e02dd785b43',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '31a6cc77-aafc-5fe0-875b-e7170d3b197b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '04dc93d2-a3fc-5dee-b30d-36de21d22d09',
						days_of_month: null,
						curb_policy_id: '31a6cc77-aafc-5fe0-875b-e7170d3b197b',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3227bf77-6413-5a45-9834-40205bb6c5aa',
				name: '2046457351_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '2b7b1eb6-e892-44b9-a8bf-c487a3c0b439',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3227bf77-6413-5a45-9834-40205bb6c5aa',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: '61d8edee-f3b0-50c1-a89b-366f89cd74d5',
						days_of_month: null,
						curb_policy_id: '3227bf77-6413-5a45-9834-40205bb6c5aa',
						weeks_of_month: [2, 4],
						time_of_day_end: '14:00',
						designated_period: null,
						time_of_day_start: '12:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '35f626b8-55cb-5e17-a8c9-36723a88168a',
				name: '1707807252_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3d3818e1-785f-48e1-be87-64defa7cd4c2',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '35f626b8-55cb-5e17-a8c9-36723a88168a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '44c16d6b-6b3f-5c1f-bba0-27b1fe616707',
						days_of_month: null,
						curb_policy_id: '35f626b8-55cb-5e17-a8c9-36723a88168a',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '44c16d6b-6b3f-5c1f-bba0-27b1fe616708',
						days_of_month: null,
						curb_policy_id: '35f626b8-55cb-5e17-a8c9-36723a88168a',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '386f6db2-e3a3-54e7-9f15-74f3c2922b4d',
				name: '2117286758_P4',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: '6322c249-4258-4f67-a627-3f89667d6aed',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '386f6db2-e3a3-54e7-9f15-74f3c2922b4d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e02be7a7-5447-5b35-bb27-f907d583f871',
						days_of_month: null,
						curb_policy_id: '386f6db2-e3a3-54e7-9f15-74f3c2922b4d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3a0dfef0-f527-5e12-82f8-b31834e0ffa4',
				name: '1165431782_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'a4438031-9285-4882-8600-cad4f284c984',
						activity: 'loading',
						max_stay: 15,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '3a0dfef0-f527-5e12-82f8-b31834e0ffa4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b1052110-c318-5f4f-b463-8a0c85c8b008',
						days_of_month: null,
						curb_policy_id: '3a0dfef0-f527-5e12-82f8-b31834e0ffa4',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '10:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3a6caa16-5f12-54d4-be79-3e58f696008d',
				name: '1557676716_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '72cf1815-c2a4-4fef-8539-da5a60940bff',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3a6caa16-5f12-54d4-be79-3e58f696008d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'dc3b3e21-b196-5302-b59f-c3e3c7d57a07',
						days_of_month: null,
						curb_policy_id: '3a6caa16-5f12-54d4-be79-3e58f696008d',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3c204d52-5aa9-5b80-9cbb-9105221ad263',
				name: '1957223182_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1152a140-bb09-41f7-bdd2-ac86e113b447',
						activity: 'parking',
						max_stay: null,
						purposes: ["'delivery'"],
						no_return: 0,
						description: null,
						user_classes: ["'truck'", "'van'"],
						max_stay_unit: null,
						curb_policy_id: '3c204d52-5aa9-5b80-9cbb-9105221ad263',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'caaae828-bd71-5bf4-b8a8-af4b40ad0b74',
						days_of_month: null,
						curb_policy_id: '3c204d52-5aa9-5b80-9cbb-9105221ad263',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3c250777-efd1-5fa6-ac66-d81fed76f9b1',
				name: '913529280_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e6388139-b5af-4bbf-a5c2-89a0d18f34bc',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3c250777-efd1-5fa6-ac66-d81fed76f9b1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '78582765-fbad-51e9-b0f8-960814d2397b',
						days_of_month: null,
						curb_policy_id: '3c250777-efd1-5fa6-ac66-d81fed76f9b1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'street cleaning',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3d762816-8bf9-53a0-b63b-f70090141cde',
				name: '680289333_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '30708ea1-b905-497b-acb5-4ac6cfffda33',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3d762816-8bf9-53a0-b63b-f70090141cde',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a5b30e9d-5674-58ca-9575-7c37d5ed277c',
						days_of_month: null,
						curb_policy_id: '3d762816-8bf9-53a0-b63b-f70090141cde',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3d908879-f135-5e69-afe5-f1bbb513193d',
				name: '1682915504_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'c8e3a4a7-11e0-40a4-ab5b-83e30d8ff973',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '3d908879-f135-5e69-afe5-f1bbb513193d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '73ceddd4-a393-559a-b5a7-6bae770f2894',
						days_of_month: null,
						curb_policy_id: '3d908879-f135-5e69-afe5-f1bbb513193d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3ea5c0ab-5ef8-5757-8704-0068491d7021',
				name: '35438332_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a41ae7bd-eec4-47a3-8900-7c37f6e3e7c7',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3ea5c0ab-5ef8-5757-8704-0068491d7021',
						no_return_unit: null,
						user_classes_except: ["'bus'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'c61f1bfb-4b4b-51ad-9042-8c4b90a08edf',
						days_of_month: null,
						curb_policy_id: '3ea5c0ab-5ef8-5757-8704-0068491d7021',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3f27c683-b75f-5bf8-ac6c-fdea928d1381',
				name: '249605811_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '13cdd101-fddb-4e8e-bc0b-06dc09613c1b',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3f27c683-b75f-5bf8-ac6c-fdea928d1381',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '3263fad2-9ae7-5f22-849d-8ea7bb01b8ff',
						days_of_month: null,
						curb_policy_id: '3f27c683-b75f-5bf8-ac6c-fdea928d1381',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '3fdb9d44-34dd-5b7a-a77e-0ba6f4618302',
				name: '2115798717_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '5b4f42f7-4a6e-4516-bb37-d2f9df59bea1',
						activity: 'no stopping',
						max_stay: null,
						purposes: ["'school'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '3fdb9d44-34dd-5b7a-a77e-0ba6f4618302',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '06bbf671-d3cc-52ad-a9c9-037da9fd8821',
						days_of_month: null,
						curb_policy_id: '3fdb9d44-34dd-5b7a-a77e-0ba6f4618302',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '400d3549-8961-556e-8211-576a2814f48f',
				name: '1418191247_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'dea80db9-220f-40d6-bc73-76e3d5abe068',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '400d3549-8961-556e-8211-576a2814f48f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'a7907603-f05d-5f82-9148-0a7adf91a995',
						days_of_month: null,
						curb_policy_id: '400d3549-8961-556e-8211-576a2814f48f',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a7907603-f05d-5f82-9148-0a7adf91a994',
						days_of_month: null,
						curb_policy_id: '400d3549-8961-556e-8211-576a2814f48f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'holidays',
						time_of_day_start: null,
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '40602845-13ec-590a-bf1c-a6bf8dc30a8f',
				name: '1082239884_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '57601155-9ac4-4036-b00b-56d7192ac53a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '40602845-13ec-590a-bf1c-a6bf8dc30a8f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [4, 5, 6, 7, 8, 9, 10, 11],
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '2179ec48-b4bc-5f94-8ad2-76675784e5c1',
						days_of_month: null,
						curb_policy_id: '40602845-13ec-590a-bf1c-a6bf8dc30a8f',
						weeks_of_month: [1, 3],
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '410d0122-a359-548a-b402-a8e02df5eb0c',
				name: '1320678680_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1c095d42-635a-49f1-b1d7-7e6e896437b1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '410d0122-a359-548a-b402-a8e02df5eb0c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: '8b8d922c-16fc-5417-96da-aae3c614832d',
						days_of_month: null,
						curb_policy_id: '410d0122-a359-548a-b402-a8e02df5eb0c',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: 'street cleaning',
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4119616b-33d6-554a-a4bd-085236ebfb91',
				name: '1169612840_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '79a4db37-32ab-4470-b5aa-a7fcdfa651ef',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '4119616b-33d6-554a-a4bd-085236ebfb91',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0688457a-6144-5125-8170-2433e0a294de',
						days_of_month: null,
						curb_policy_id: '4119616b-33d6-554a-a4bd-085236ebfb91',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '41763c46-c1dc-518c-b2b6-0046ced9df7c',
				name: '1263071863_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '888148ad-362d-4b37-9e4e-22d45e696468',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '41763c46-c1dc-518c-b2b6-0046ced9df7c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'wed'"],
						time_span_id: 'bfaa85ed-6cbf-59cd-99fe-fbbc89d69c94',
						days_of_month: null,
						curb_policy_id: '41763c46-c1dc-518c-b2b6-0046ced9df7c',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: '14:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '41c76e5d-22d3-5659-8839-9dc5fb2b674d',
				name: '1688558741_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '962810a0-fa21-412a-a2a2-1ad1d0b48e57',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '41c76e5d-22d3-5659-8839-9dc5fb2b674d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '51f2c598-11f2-56e7-95f5-a2c09c6472a0',
						days_of_month: null,
						curb_policy_id: '41c76e5d-22d3-5659-8839-9dc5fb2b674d',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '41e4fbd9-6874-5e12-8ec8-992ec6e95b7e',
				name: '1305491898_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'aeedd022-ee1f-4678-ac1a-4cb31b58d64c',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '41e4fbd9-6874-5e12-8ec8-992ec6e95b7e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '1d4cc0b4-af49-5c6a-bdab-8edf5cdc24c3',
						days_of_month: null,
						curb_policy_id: '41e4fbd9-6874-5e12-8ec8-992ec6e95b7e',
						weeks_of_month: null,
						time_of_day_end: '23:59',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '41fe6cd2-d44c-53c3-9f22-550ccabcd481',
				name: '162735222_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'd6a0df46-bbca-48f3-aabd-3443279044f9',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '41fe6cd2-d44c-53c3-9f22-550ccabcd481',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: 'db649963-2a4a-5f81-8c7d-ae83a175924c',
						days_of_month: null,
						curb_policy_id: '41fe6cd2-d44c-53c3-9f22-550ccabcd481',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: 'street cleaning',
						time_of_day_start: '6:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '42722843-87c0-5c6f-9445-eb267dcfc47d',
				name: '1035008541_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '89da48a1-47ca-4a69-9e36-550611c7eb80',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '42722843-87c0-5c6f-9445-eb267dcfc47d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '6d095e88-73d7-59d7-a354-a0035ec66c90',
						days_of_month: null,
						curb_policy_id: '42722843-87c0-5c6f-9445-eb267dcfc47d',
						weeks_of_month: null,
						time_of_day_end: '11:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '42d175d8-5c52-5e74-b5af-c01b4442109c',
				name: '1888624616_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'c87fb599-f6f7-4a59-8db3-4ce73aac2d02',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '42d175d8-5c52-5e74-b5af-c01b4442109c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '66d77dcb-07e5-503a-b56d-1b2033542317',
						days_of_month: null,
						curb_policy_id: '42d175d8-5c52-5e74-b5af-c01b4442109c',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '447137c8-8e35-5971-91f0-b96484a03102',
				name: '1041634348_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e90a7fa4-ff71-4f4d-9c9d-776cf4c70388',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '447137c8-8e35-5971-91f0-b96484a03102',
						no_return_unit: null,
						user_classes_except: ["'car'"]
					},
					{
						name: null,
						rule_id: 'e90a7fa4-ff71-4f4d-9c9d-776cf4c70389',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: 'hour',
						curb_policy_id: '447137c8-8e35-5971-91f0-b96484a03102',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '62c5c8d6-82b1-59e0-b4ec-7580896ed95d',
						days_of_month: null,
						curb_policy_id: '447137c8-8e35-5971-91f0-b96484a03102',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '45160a20-bfb4-5dfc-9098-d159cbea73b5',
				name: '334876904_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2d502c35-870c-47a2-9531-c1523dd7be6d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '45160a20-bfb4-5dfc-9098-d159cbea73b5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '2a8c5f0c-66c4-5ca7-923d-36ebf7e4de9e',
						days_of_month: null,
						curb_policy_id: '45160a20-bfb4-5dfc-9098-d159cbea73b5',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '469f9c71-d984-57e9-b004-189d6e40d558',
				name: '45304461_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'f946b805-5ed6-474c-8add-ca8035acbea7',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '469f9c71-d984-57e9-b004-189d6e40d558',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6f8b4ca7-2c1d-55b1-a619-1d65891aa459',
						days_of_month: null,
						curb_policy_id: '469f9c71-d984-57e9-b004-189d6e40d558',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '46cc0655-8221-5ca8-b1f1-17262b7573f7',
				name: '303027146_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1c146367-2415-4a8f-809a-2d61b6981372',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '46cc0655-8221-5ca8-b1f1-17262b7573f7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'fri'"],
						time_span_id: 'b2605c18-1143-5b76-bd78-8e4775d5f670',
						days_of_month: null,
						curb_policy_id: '46cc0655-8221-5ca8-b1f1-17262b7573f7',
						weeks_of_month: [2, 4],
						time_of_day_end: '12:00',
						designated_period: 'street cleaning',
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '46d54a70-856f-5c02-bd09-b309d5c81b6c',
				name: '2117286758_P3',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'fc1744e6-651d-4b1b-a975-c43c8d3061ad',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'motorcycle'", "'scooter'", "'moped'", "'car'", "'truck'", "'van'"],
						max_stay_unit: null,
						curb_policy_id: '46d54a70-856f-5c02-bd09-b309d5c81b6c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'ba19569e-6edc-5923-847f-46eac2eb9eac',
						days_of_month: null,
						curb_policy_id: '46d54a70-856f-5c02-bd09-b309d5c81b6c',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '20:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '47545097-2472-57ef-a177-8639ab53858a',
				name: '2031594166_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '861e5b16-8aa5-4b1a-aca2-3ade1547d0e1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '47545097-2472-57ef-a177-8639ab53858a',
						no_return_unit: null,
						user_classes_except: ["'truck'"]
					},
					{
						name: null,
						rule_id: '861e5b16-8aa5-4b1a-aca2-3ade1547d0e2',
						activity: 'loading',
						max_stay: 20,
						purposes: ["'freight'", "'delivery'"],
						no_return: 0,
						description: null,
						user_classes: ["'truck'"],
						max_stay_unit: 'minute',
						curb_policy_id: '47545097-2472-57ef-a177-8639ab53858a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'b47687cf-ddfc-5f62-bc98-ab5cac831069',
						days_of_month: null,
						curb_policy_id: '47545097-2472-57ef-a177-8639ab53858a',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '475d161d-8b85-5782-9b88-28000a4aa09d',
				name: '1561181563_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b3c8a1c3-9df0-4bda-a8d5-8cfc9e6e5b53',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '475d161d-8b85-5782-9b88-28000a4aa09d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '4801d1ab-1a36-5e22-8209-47e5f0d9fc21',
						days_of_month: null,
						curb_policy_id: '475d161d-8b85-5782-9b88-28000a4aa09d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '48154686-5054-5465-bff7-e62742870d1b',
				name: '1707539190_P3',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'c634e142-a184-4b7f-86db-bf8d423fda21',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '48154686-5054-5465-bff7-e62742870d1b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '320aeeb7-5127-5a8a-8c95-c155bfc93ce0',
						days_of_month: null,
						curb_policy_id: '48154686-5054-5465-bff7-e62742870d1b',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '48c86935-64e4-5a1a-b7e7-393fc61a9683',
				name: '397123841_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '0f13c4bb-62e9-4a9b-90cf-f656c3a3b2ac',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '48c86935-64e4-5a1a-b7e7-393fc61a9683',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '33b2cc36-43dd-5017-8383-2074f7e8ed17',
						days_of_month: null,
						curb_policy_id: '48c86935-64e4-5a1a-b7e7-393fc61a9683',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '496996ce-9611-53fc-952b-849e94613b1d',
				name: '439617230_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '2c768ab3-2d39-4b8f-b56b-9140d1c43c99',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '496996ce-9611-53fc-952b-849e94613b1d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'a435dc48-dcc1-5dfa-8e79-abe16def1eda',
						days_of_month: null,
						curb_policy_id: '496996ce-9611-53fc-952b-849e94613b1d',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '49ff20c9-f3e4-518f-a71d-a17e2ef51d74',
				name: '1415054675_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '0dbfe61b-e61f-4b54-9e22-cb1197c42fc1',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '49ff20c9-f3e4-518f-a71d-a17e2ef51d74',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'faff26c9-eacf-58bf-a1c4-044fe9db87ad',
						days_of_month: null,
						curb_policy_id: '49ff20c9-f3e4-518f-a71d-a17e2ef51d74',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4a258291-63f2-5550-94dc-4dee99b39217',
				name: '1687154642_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c8607e74-6b28-4081-80dd-5fcd9592b163',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4a258291-63f2-5550-94dc-4dee99b39217',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '6e8fe35d-6347-572b-a63d-a5b22f4e39e1',
						days_of_month: null,
						curb_policy_id: '4a258291-63f2-5550-94dc-4dee99b39217',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4a2c2290-4989-56bb-9508-b32ed0891a6a',
				name: '904108192_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '3da73e77-67e7-414b-9b6d-988a63c88254',
						activity: 'parking',
						max_stay: 1,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '4a2c2290-4989-56bb-9508-b32ed0891a6a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '8a2289fc-f146-546a-b58f-31f39b30c8c2',
						days_of_month: null,
						curb_policy_id: '4a2c2290-4989-56bb-9508-b32ed0891a6a',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4bc4ff63-3dd4-5243-a175-6efbea1138cd',
				name: '15946032_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b1cd6b18-b511-4dd8-b790-5d3b54f543f6',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: '4bc4ff63-3dd4-5243-a175-6efbea1138cd',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '7cf9a355-721c-591e-bd16-534821946e68',
						days_of_month: null,
						curb_policy_id: '4bc4ff63-3dd4-5243-a175-6efbea1138cd',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4c4bbfc7-fa45-5ba5-99d2-2a38b36c287b',
				name: '1991100803_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c293125a-57c2-4cad-8853-bb6de2895d72',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4c4bbfc7-fa45-5ba5-99d2-2a38b36c287b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: 'c2f0c419-0f58-5811-b019-c17470dcf881',
						days_of_month: null,
						curb_policy_id: '4c4bbfc7-fa45-5ba5-99d2-2a38b36c287b',
						weeks_of_month: null,
						time_of_day_end: '4:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4c7ebe92-afe7-5768-8fb5-93cb7f945dc7',
				name: '2056378342_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '37ad408e-e365-4c2f-9152-36f89944b137',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: ["'bus'"],
						max_stay_unit: null,
						curb_policy_id: '4c7ebe92-afe7-5768-8fb5-93cb7f945dc7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '83aabcd5-3a65-52d8-991f-90118aa65057',
						days_of_month: null,
						curb_policy_id: '4c7ebe92-afe7-5768-8fb5-93cb7f945dc7',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4d211f5e-c195-5cff-978b-8660c037a365',
				name: '401049439_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'dd8c89f1-11a8-4ad2-afc8-071fa6b28d5a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4d211f5e-c195-5cff-978b-8660c037a365',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: '9e947af7-ec2f-53e7-8f01-c8228419bb75',
						days_of_month: null,
						curb_policy_id: '4d211f5e-c195-5cff-978b-8660c037a365',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4d2a12b4-70e2-559c-8bfe-1c989d013a3b',
				name: '1345716085_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ba78966b-2746-4682-bb53-f75eec6c507e',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4d2a12b4-70e2-559c-8bfe-1c989d013a3b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '1084cb7f-87fa-5ef5-b294-24ea51971997',
						days_of_month: null,
						curb_policy_id: '4d2a12b4-70e2-559c-8bfe-1c989d013a3b',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: 'snow emergency',
						time_of_day_start: '7:00',
						designated_period_except: false
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4e3f25bb-c53f-5f16-8577-5b5c6cc48490',
				name: '1850522952_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '2aa70423-236a-41fd-b169-db8a17df4896',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '4e3f25bb-c53f-5f16-8577-5b5c6cc48490',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'ac76e9b5-900d-5f09-8246-768b953a5b4d',
						days_of_month: null,
						curb_policy_id: '4e3f25bb-c53f-5f16-8577-5b5c6cc48490',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4e5fea9b-cf8f-5f77-be79-1368eafc95d1',
				name: '1076325228_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'e427bc6f-8f63-4cf4-9eb9-9d9c6527613c',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4e5fea9b-cf8f-5f77-be79-1368eafc95d1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '601a3267-a406-5db5-b6b4-0c8a9efb231f',
						days_of_month: null,
						curb_policy_id: '4e5fea9b-cf8f-5f77-be79-1368eafc95d1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4ea9b7bc-a122-577a-9065-56acfac6a21e',
				name: '327178142_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1c8fa26d-d73a-465b-8c2e-6e5482662e0f',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4ea9b7bc-a122-577a-9065-56acfac6a21e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'fa5a2ff1-8116-5703-b7f5-38406460d0dd',
						days_of_month: null,
						curb_policy_id: '4ea9b7bc-a122-577a-9065-56acfac6a21e',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4ed7755c-2eb6-54e6-9ed2-b5ddfc3fa7aa',
				name: '649688175_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'f9bbd2cf-8537-491f-84fe-b842c1e23ffb',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4ed7755c-2eb6-54e6-9ed2-b5ddfc3fa7aa',
						no_return_unit: null,
						user_classes_except: ["'bus'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '02a74f4a-2e29-5029-8050-7bd10f5a26b6',
						days_of_month: null,
						curb_policy_id: '4ed7755c-2eb6-54e6-9ed2-b5ddfc3fa7aa',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4ee8d4e8-4fb0-506a-ad88-9443b2134b64',
				name: '19433955_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'fcbde777-05aa-4912-ae0d-f08e198e0d14',
						activity: 'parking',
						max_stay: 1,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '4ee8d4e8-4fb0-506a-ad88-9443b2134b64',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '87f8a31d-132b-55fe-a85a-9eba3e9ada20',
						days_of_month: null,
						curb_policy_id: '4ee8d4e8-4fb0-506a-ad88-9443b2134b64',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4f4c9a9f-9142-5fce-bb7e-b6738adca580',
				name: '1196403307_P4',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '86de6618-0117-424e-9036-b991b9e22507',
						activity: 'parking',
						max_stay: 1,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '4f4c9a9f-9142-5fce-bb7e-b6738adca580',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a30eb52a-73f4-5ef6-ae1b-2de4a6fec441',
						days_of_month: null,
						curb_policy_id: '4f4c9a9f-9142-5fce-bb7e-b6738adca580',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '4f6df3d1-8838-54be-897b-e9cc7c1a253b',
				name: 'FHBS',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '176d1671-d963-4588-b546-402446987979',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '4f6df3d1-8838-54be-897b-e9cc7c1a253b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '3d170604-f2b1-53ee-9d0f-07fa0229e345',
						days_of_month: null,
						curb_policy_id: '4f6df3d1-8838-54be-897b-e9cc7c1a253b',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '504b67b6-5bc3-54d2-af4e-985fb0aa6e92',
				name: '680289333_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f2ad3a41-2314-4693-bc95-fd4366464725',
						activity: 'loading',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '504b67b6-5bc3-54d2-af4e-985fb0aa6e92',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '66a901ac-2e2f-50ab-b9e2-9dd900e69335',
						days_of_month: null,
						curb_policy_id: '504b67b6-5bc3-54d2-af4e-985fb0aa6e92',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '50d22805-a835-58b5-bad9-147bc0806d94',
				name: '1621869769_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '29850ef1-409e-4147-b4ba-75cd6af1c909',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '50d22805-a835-58b5-bad9-147bc0806d94',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '58aa2ab0-00bf-5a18-b238-a6be3fba2c7c',
						days_of_month: null,
						curb_policy_id: '50d22805-a835-58b5-bad9-147bc0806d94',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '511adde7-14b8-566a-a2e8-3fb54cc92ac5',
				name: '1353196456_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0ea15fb7-7f09-4177-a778-b2146a1f5b11',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '511adde7-14b8-566a-a2e8-3fb54cc92ac5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '24b64005-11e4-5f93-acb2-4a09e8bc429a',
						days_of_month: null,
						curb_policy_id: '511adde7-14b8-566a-a2e8-3fb54cc92ac5',
						weeks_of_month: [1, 3],
						time_of_day_end: '11:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5299f283-41b1-57ca-8b18-0d168fd250a7',
				name: '730659545_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '8f61b844-5470-41ec-a713-cbef7787b33a',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5299f283-41b1-57ca-8b18-0d168fd250a7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'b322652d-9ff4-56b6-af91-495f145e473b',
						days_of_month: null,
						curb_policy_id: '5299f283-41b1-57ca-8b18-0d168fd250a7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '52e5ba4b-3d2c-58a0-9ba5-b5741f91d76e',
				name: '699219025_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0a4daddd-0a37-4856-bb3c-010657dc5108',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '52e5ba4b-3d2c-58a0-9ba5-b5741f91d76e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ad34e372-17c9-5e39-865b-2d36c0064f42',
						days_of_month: null,
						curb_policy_id: '52e5ba4b-3d2c-58a0-9ba5-b5741f91d76e',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '52f0748d-d423-568e-93df-62983a006483',
				name: '1041634348_P0',
				description: null,
				published_date: 1767889393000,
				priority: 4,
				rules: [
					{
						name: null,
						rule_id: '89bb111c-93d9-4c62-be9d-617ea26505c7',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '52f0748d-d423-568e-93df-62983a006483',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '595ef7bd-6835-5b30-825f-462e46499f59',
						days_of_month: null,
						curb_policy_id: '52f0748d-d423-568e-93df-62983a006483',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '53c8f982-a7e0-507c-a161-9b5829bdbf41',
				name: '2026742568_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'a22a942c-a8ec-4793-88da-b1ace6b0b898',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '53c8f982-a7e0-507c-a161-9b5829bdbf41',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'c7ac6f5e-2988-51f1-854e-72f9969d2a79',
						days_of_month: null,
						curb_policy_id: '53c8f982-a7e0-507c-a161-9b5829bdbf41',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'holidays',
						time_of_day_start: '8:00',
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '540716c6-7b3e-5b1c-a48b-2a8c922fafda',
				name: '1012158460_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ef4f6019-a7aa-4cca-9049-cde9d338080e',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '540716c6-7b3e-5b1c-a48b-2a8c922fafda',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '442c6a57-09d5-5b4f-b521-567b72898dea',
						days_of_month: null,
						curb_policy_id: '540716c6-7b3e-5b1c-a48b-2a8c922fafda',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5408627d-176f-5ed4-ab9e-246fa8877c15',
				name: '146657195_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'eca2f453-2449-4833-b258-96e4e62df1d4',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '5408627d-176f-5ed4-ab9e-246fa8877c15',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '756c2374-03a9-5a2e-b532-9f1d53009b4b',
						days_of_month: null,
						curb_policy_id: '5408627d-176f-5ed4-ab9e-246fa8877c15',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5490231a-34a0-53d0-91cf-dc780416a51d',
				name: '2064161791_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '87557d1f-ba50-4404-9e5e-271ea9e1374f',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5490231a-34a0-53d0-91cf-dc780416a51d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'e5e0bd1d-44b8-5574-8c2b-c0554391e54c',
						days_of_month: null,
						curb_policy_id: '5490231a-34a0-53d0-91cf-dc780416a51d',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '551c20b6-9db1-5634-8ef9-8cd4024b5932',
				name: '1475906408_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '2561b9a5-2899-493c-92c4-df6c736b9ecc',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '551c20b6-9db1-5634-8ef9-8cd4024b5932',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '9fcb63b8-00bd-5d27-9785-03bb52b80eb2',
						days_of_month: null,
						curb_policy_id: '551c20b6-9db1-5634-8ef9-8cd4024b5932',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5541a223-f6e7-5c49-b1be-5f8488c4c904',
				name: '509160756_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '52f01296-973c-450c-9e73-61e103bdd067',
						activity: 'no loading',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'truck'", "'van'"],
						max_stay_unit: null,
						curb_policy_id: '5541a223-f6e7-5c49-b1be-5f8488c4c904',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '625f9716-f2f4-54d4-8ffe-af771c0cc162',
						days_of_month: null,
						curb_policy_id: '5541a223-f6e7-5c49-b1be-5f8488c4c904',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5547d72c-8032-5065-9f77-13e869524065',
				name: '1328664718_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b6d8685d-aaf8-4b7d-995f-9b4f09e727c0',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5547d72c-8032-5065-9f77-13e869524065',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: 'b6d8685d-aaf8-4b7d-995f-9b4f09e727c1',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5547d72c-8032-5065-9f77-13e869524065',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'b657ef41-7d3c-52f3-abed-a1d2fb97f6ab',
						days_of_month: null,
						curb_policy_id: '5547d72c-8032-5065-9f77-13e869524065',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '55fc4224-a031-5ec7-9bfd-e44eea4d2f97',
				name: '1660546818_P1',
				description: null,
				published_date: 1767889393000,
				priority: 5,
				rules: [
					{
						name: null,
						rule_id: '8f8e447f-8b8f-4d10-bb23-f10f10adf94c',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '55fc4224-a031-5ec7-9bfd-e44eea4d2f97',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6ed64047-6b44-5995-ae22-6c1bacc673e6',
						days_of_month: null,
						curb_policy_id: '55fc4224-a031-5ec7-9bfd-e44eea4d2f97',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '55fc46e6-43f3-5e76-9cfd-16355d11ce87',
				name: '1187604605_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '7f2d0f36-83b7-4f0c-88ad-74c781f0dc67',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '55fc46e6-43f3-5e76-9cfd-16355d11ce87',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'e9e587a5-e571-5463-ab76-48a490380e24',
						days_of_month: null,
						curb_policy_id: '55fc46e6-43f3-5e76-9cfd-16355d11ce87',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '586a9441-0ca0-5ce5-9703-eaa16b5a5dbf',
				name: '1196403307_P2',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: '57b357e9-9119-45a8-8428-bcb1b3abd7cb',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '586a9441-0ca0-5ce5-9703-eaa16b5a5dbf',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '47e7e77f-42ac-5ff8-bd22-7bafca4a64b9',
						days_of_month: null,
						curb_policy_id: '586a9441-0ca0-5ce5-9703-eaa16b5a5dbf',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '590d29e9-d0cc-56c5-9366-a480db42f22a',
				name: '1628648068_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '73356512-6c4a-4cfa-903e-59c980587324',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '590d29e9-d0cc-56c5-9366-a480db42f22a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '40c3a95f-b318-5b21-a517-bdf71c71af19',
						days_of_month: null,
						curb_policy_id: '590d29e9-d0cc-56c5-9366-a480db42f22a',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5929cfa6-021a-5626-9944-782cfb176923',
				name: '1711751599_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2fbe09f6-cbf4-4298-b9a4-2f6ea92e96b0',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5929cfa6-021a-5626-9944-782cfb176923',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: '481128ef-edf4-596b-a583-5c5803a525a1',
						days_of_month: null,
						curb_policy_id: '5929cfa6-021a-5626-9944-782cfb176923',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: 'street cleaning',
						time_of_day_start: '10:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5958e86a-4efa-546f-bfa9-da030105465c',
				name: '709131311_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '5f229ef0-4378-461a-9e32-0aae3bb23088',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5958e86a-4efa-546f-bfa9-da030105465c',
						no_return_unit: null,
						user_classes_except: ["'bus'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b31525c7-cde0-54d2-a750-4187944a6b78',
						days_of_month: null,
						curb_policy_id: '5958e86a-4efa-546f-bfa9-da030105465c',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '598ebf3f-8980-5f27-9316-20aa9edf3b8a',
				name: '604151658_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '1675a163-90c0-404e-b095-e762b51dff98',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '598ebf3f-8980-5f27-9316-20aa9edf3b8a',
						no_return_unit: null,
						user_classes_except: ["'bicycle'", "'cargo_bicycle'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '41beb2cd-c8e0-5f20-ba37-cb7f47e5a968',
						days_of_month: null,
						curb_policy_id: '598ebf3f-8980-5f27-9316-20aa9edf3b8a',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '59dd9997-86da-5185-a3d6-9bd620c2412a',
				name: '2119959374_P3',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '5075fe6c-6e0f-4dcf-be1c-c202a8d8b26f',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '59dd9997-86da-5185-a3d6-9bd620c2412a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '3576bb48-2978-53bc-b07e-29a5d37c2acd',
						days_of_month: null,
						curb_policy_id: '59dd9997-86da-5185-a3d6-9bd620c2412a',
						weeks_of_month: [2, 4],
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5a5967b2-4706-5c66-9e64-5cdc878d70c4',
				name: '680289333_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b23f1090-b49d-4d45-b7ca-350d8a7d799e',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '5a5967b2-4706-5c66-9e64-5cdc878d70c4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '2ba4e610-85df-5541-a551-490a142713cb',
						days_of_month: null,
						curb_policy_id: '5a5967b2-4706-5c66-9e64-5cdc878d70c4',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5ac10478-80b8-5856-b7dc-ac6d8144d6ae',
				name: '1695955142_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'accac860-5f2d-4e72-b24f-797450c0b343',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5ac10478-80b8-5856-b7dc-ac6d8144d6ae',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'abd79b02-ef0c-5df6-8120-86a80b15687b',
						days_of_month: null,
						curb_policy_id: '5ac10478-80b8-5856-b7dc-ac6d8144d6ae',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5b39c8b5-6c84-5a4a-8b20-91f465e9e3ef',
				name: '296225360_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'fbd6a149-6bb2-4e24-a0c2-d51966809028',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: '5b39c8b5-6c84-5a4a-8b20-91f465e9e3ef',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '636fa427-b591-5de9-8bf1-65bf684eec1d',
						days_of_month: null,
						curb_policy_id: '5b39c8b5-6c84-5a4a-8b20-91f465e9e3ef',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5b78e3cd-e136-541d-88dc-b752939acd60',
				name: '1844922889_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '6feed5c1-e935-4c11-af29-e3613a947e16',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5b78e3cd-e136-541d-88dc-b752939acd60',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'dbcde752-c167-5973-bd08-f116b70cf91e',
						days_of_month: null,
						curb_policy_id: '5b78e3cd-e136-541d-88dc-b752939acd60',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5bb128a8-6242-51bb-8a18-88a1280a9912',
				name: '2092953396_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '23b2ece4-654d-4061-b6e7-e45e41903b50',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5bb128a8-6242-51bb-8a18-88a1280a9912',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'a2002c59-2047-5aa0-a938-31219a08b8e4',
						days_of_month: null,
						curb_policy_id: '5bb128a8-6242-51bb-8a18-88a1280a9912',
						weeks_of_month: null,
						time_of_day_end: '18:30',
						designated_period: null,
						time_of_day_start: '17:30',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5c764d7a-83af-5617-85e6-c8950b1e933e',
				name: '1974501598_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '4a825914-62e8-408b-b1b1-459552b66a1a',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5c764d7a-83af-5617-85e6-c8950b1e933e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '147051a0-46c6-5170-a1d4-d45d5135727a',
						days_of_month: null,
						curb_policy_id: '5c764d7a-83af-5617-85e6-c8950b1e933e',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5d142d35-fa2d-5352-988a-6114c1a8b68a',
				name: '1393688548_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'bec3a3f1-c3cc-4e0b-a3c7-89f9405f937a',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '5d142d35-fa2d-5352-988a-6114c1a8b68a',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'moped'",
							"'scooter'",
							"'car'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'bus'",
							"'truck'",
							"'van'"
						]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '5615ec38-dff0-5ece-8d24-271276e2d1a2',
						days_of_month: null,
						curb_policy_id: '5d142d35-fa2d-5352-988a-6114c1a8b68a',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5d3c32ae-99ac-5163-a296-9931750d441a',
				name: '1700551294_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0255d305-de33-4139-a944-e40562fff942',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '5d3c32ae-99ac-5163-a296-9931750d441a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '02d38c05-9458-59ef-b2dd-309b6fc2e2fe',
						days_of_month: null,
						curb_policy_id: '5d3c32ae-99ac-5163-a296-9931750d441a',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5d80ad98-3a3d-56f4-85c6-ff4c54c9bdc8',
				name: '880835381_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '8074d0b2-dee3-4c5e-9e19-6afa51b9c0da',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '5d80ad98-3a3d-56f4-85c6-ff4c54c9bdc8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'"],
						time_span_id: '5507ac8c-5c9a-5122-94dc-e629ee1978fa',
						days_of_month: null,
						curb_policy_id: '5d80ad98-3a3d-56f4-85c6-ff4c54c9bdc8',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '5507ac8c-5c9a-5122-94dc-e629ee1978fb',
						days_of_month: null,
						curb_policy_id: '5d80ad98-3a3d-56f4-85c6-ff4c54c9bdc8',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '5507ac8c-5c9a-5122-94dc-e629ee1978fc',
						days_of_month: null,
						curb_policy_id: '5d80ad98-3a3d-56f4-85c6-ff4c54c9bdc8',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '22:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5dac84b8-4708-5799-848e-42e7f06edec3',
				name: '1266133422_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'd150259a-caad-4e0f-affd-2017a98d01c0',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5dac84b8-4708-5799-848e-42e7f06edec3',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '7d27e667-51d2-507e-ba44-6ffb23494eb7',
						days_of_month: null,
						curb_policy_id: '5dac84b8-4708-5799-848e-42e7f06edec3',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5f466b96-8698-5c28-a171-796cc04456d1',
				name: '972381300_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: null,
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'", "'fri'"],
						time_span_id: '39e96d56-638e-5fc0-9478-2cccc4d78884',
						days_of_month: null,
						curb_policy_id: '5f466b96-8698-5c28-a171-796cc04456d1',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '14:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '5ffe0740-43f0-5a73-b69b-e3a03c59711f',
				name: '1288411477_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '09eaa0b8-d01f-491c-80e0-3e0edc18c518',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '5ffe0740-43f0-5a73-b69b-e3a03c59711f',
						no_return_unit: null,
						user_classes_except: ["'bus'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'b6d5e73d-bd3d-501e-92f8-cf7205212399',
						days_of_month: null,
						curb_policy_id: '5ffe0740-43f0-5a73-b69b-e3a03c59711f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '60207522-fd6d-5803-a67a-cc6758db8b2f',
				name: '1855615714_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '75a5018d-d85c-4983-bb66-ef5c9db19aa2',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '60207522-fd6d-5803-a67a-cc6758db8b2f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6cf373f0-5c3e-5e59-9bff-9af6f2541461',
						days_of_month: null,
						curb_policy_id: '60207522-fd6d-5803-a67a-cc6758db8b2f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '61181a14-9bb0-53ec-a406-cc9fdc9369eb',
				name: '1336672694_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9b57f541-d123-433f-b1a0-b5e11edfe28d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '61181a14-9bb0-53ec-a406-cc9fdc9369eb',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'be236839-d000-5c5b-aacb-42544d704dca',
						days_of_month: null,
						curb_policy_id: '61181a14-9bb0-53ec-a406-cc9fdc9369eb',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'street cleaning',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6182afb8-1913-543e-bad5-f172ae5dc7eb',
				name: '1447290712_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '39bf8211-07d7-4f05-9ede-76de67f290d4',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6182afb8-1913-543e-bad5-f172ae5dc7eb',
						no_return_unit: null,
						user_classes_except: ["'truck'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '686a4908-5d02-579d-a3f3-3d070bf949fa',
						days_of_month: null,
						curb_policy_id: '6182afb8-1913-543e-bad5-f172ae5dc7eb',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '620b0607-4172-5a2d-9e89-49bcec6d61d2',
				name: '146657195_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '7ae319d0-9225-427b-95b8-8c19ec81bcba',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '620b0607-4172-5a2d-9e89-49bcec6d61d2',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '8ebf6dd0-6e4c-53eb-9f0e-dbf818dd5b5f',
						days_of_month: null,
						curb_policy_id: '620b0607-4172-5a2d-9e89-49bcec6d61d2',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '629ba471-58f6-502c-b8b2-50718a292a3d',
				name: '1129018917_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '09e00dc8-b2ea-4469-accf-588ce6f8ac8a',
						activity: 'no loading',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '629ba471-58f6-502c-b8b2-50718a292a3d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '34398c3d-2f26-5aa1-b893-abcac379542a',
						days_of_month: null,
						curb_policy_id: '629ba471-58f6-502c-b8b2-50718a292a3d',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6349c968-0fcb-54b0-a146-1b86396a9157',
				name: '1786746872_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '7ad87839-f42f-4fab-974a-edac92bb54d0',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6349c968-0fcb-54b0-a146-1b86396a9157',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'a6f69776-e472-5852-896e-f4ba6a0ae39a',
						days_of_month: null,
						curb_policy_id: '6349c968-0fcb-54b0-a146-1b86396a9157',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:30',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '64091c56-155e-5266-b347-5dbed5f42233',
				name: '98093375_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '6f5faa0c-d034-4beb-b487-07bf11219a12',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '64091c56-155e-5266-b347-5dbed5f42233',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'eea5ad83-e91f-5fe8-ad4a-1a022a9b4154',
						days_of_month: null,
						curb_policy_id: '64091c56-155e-5266-b347-5dbed5f42233',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6470247b-624f-54f7-b2f4-a81e409c8751',
				name: '2136175018_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '26c7d0ed-ce90-492a-a87b-c9e66c5997a8',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6470247b-624f-54f7-b2f4-a81e409c8751',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '1a7d3ab9-db8f-5759-883d-b9122f524047',
						days_of_month: null,
						curb_policy_id: '6470247b-624f-54f7-b2f4-a81e409c8751',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '64d8fd9d-fca2-5b54-a875-a80e99f907e3',
				name: '2064161791_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'd3ac1c25-f9bb-4f99-9c12-b1feeee37d11',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: 'hour',
						curb_policy_id: '64d8fd9d-fca2-5b54-a875-a80e99f907e3',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '8ceaa90d-81b2-5e50-b8bd-7018528564b1',
						days_of_month: null,
						curb_policy_id: '64d8fd9d-fca2-5b54-a875-a80e99f907e3',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '64f80561-6910-5023-97f3-ef21d1733a19',
				name: '1272617408_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'abe308a5-a71e-4959-b5dc-224906162b29',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '64f80561-6910-5023-97f3-ef21d1733a19',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '29f945f3-3beb-5451-9b8d-8647aa7820d9',
						days_of_month: null,
						curb_policy_id: '64f80561-6910-5023-97f3-ef21d1733a19',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '29f945f3-3beb-5451-9b8d-8647aa7820d8',
						days_of_month: null,
						curb_policy_id: '64f80561-6910-5023-97f3-ef21d1733a19',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6551ab54-bdc0-535d-b06a-10b50b153224',
				name: '1360473068_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '70048386-95d0-4144-bdde-a7e43cd51aa3',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '6551ab54-bdc0-535d-b06a-10b50b153224',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'a1010567-d9fe-5ac4-a99b-76719f9ce56e',
						days_of_month: null,
						curb_policy_id: '6551ab54-bdc0-535d-b06a-10b50b153224',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '658cf657-60d1-5aa8-a4af-075e12875ee8',
				name: '864186504_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '773aa13c-8c63-45bc-9e4b-9713fab26639',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '658cf657-60d1-5aa8-a4af-075e12875ee8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [4, 5, 6, 7, 8, 9, 10, 11],
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '86e62033-fd9c-5e95-bccd-515d186bf807',
						days_of_month: null,
						curb_policy_id: '658cf657-60d1-5aa8-a4af-075e12875ee8',
						weeks_of_month: [1, 3],
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '12:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '66ba5970-d087-55b3-b221-b9e738395937',
				name: '1869366434_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4fc13d48-94a2-41d4-aed9-9d1a22918e9d',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '66ba5970-d087-55b3-b221-b9e738395937',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '602a19a4-d900-5c6e-9116-182f7018d6b2',
						days_of_month: null,
						curb_policy_id: '66ba5970-d087-55b3-b221-b9e738395937',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '66e079ad-86ae-5cee-a682-eb6b1cdf7273',
				name: '1639731475_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '076339ac-7a7e-4824-8bb8-f7bd985a40ff',
						activity: 'loading',
						max_stay: 1,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '66e079ad-86ae-5cee-a682-eb6b1cdf7273',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e3c1bb2d-5afe-5e06-9dd6-5910e8ec58c5',
						days_of_month: null,
						curb_policy_id: '66e079ad-86ae-5cee-a682-eb6b1cdf7273',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '670bcce3-fe58-5059-a51b-71493c3151cb',
				name: '533171840_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '8b054055-dc24-4e5e-9867-1c11299e49a3',
						activity: 'parking',
						max_stay: 10,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '670bcce3-fe58-5059-a51b-71493c3151cb',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'sun'", "'tue'", "'wed'"],
						time_span_id: 'aff29a64-169c-5650-aa13-913bf7de899c',
						days_of_month: null,
						curb_policy_id: '670bcce3-fe58-5059-a51b-71493c3151cb',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '17:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'fri'", "'sat'"],
						time_span_id: 'aff29a64-169c-5650-aa13-913bf7de899d',
						days_of_month: null,
						curb_policy_id: '670bcce3-fe58-5059-a51b-71493c3151cb',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6775a5d5-004f-521c-94a9-e4a4071ffd9c',
				name: '1307019628_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'cd9358a1-eaa0-4c02-b76d-cbbebfa1b247',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6775a5d5-004f-521c-94a9-e4a4071ffd9c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'eb75701e-11fd-5b3d-b136-35ae6fdd3219',
						days_of_month: null,
						curb_policy_id: '6775a5d5-004f-521c-94a9-e4a4071ffd9c',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6a8a2d5c-a7dd-5901-8a7b-857e1648ceac',
				name: '1266133422_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '843e86bb-1456-4808-925d-c46ea2b1b593',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '6a8a2d5c-a7dd-5901-8a7b-857e1648ceac',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'd768eae4-a7d8-519c-b39b-655b24508f29',
						days_of_month: null,
						curb_policy_id: '6a8a2d5c-a7dd-5901-8a7b-857e1648ceac',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6affdeba-d199-5090-9722-db2d4f01cf17',
				name: '1426546900_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4635793b-433b-4b2f-a6f7-9b1cc8002649',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6affdeba-d199-5090-9722-db2d4f01cf17',
						no_return_unit: null,
						user_classes_except: ["'truck'", "'van'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '5fa26e19-fcf4-502e-b706-8715ebc39c15',
						days_of_month: null,
						curb_policy_id: '6affdeba-d199-5090-9722-db2d4f01cf17',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6b16baba-41ae-586a-9f53-34a7b7be56d1',
				name: '1707539190_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '4c4c7273-dd60-4f8a-8975-18122cc296ab',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6b16baba-41ae-586a-9f53-34a7b7be56d1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '88380796-94f6-5198-a1d6-f1d45ea44d65',
						days_of_month: null,
						curb_policy_id: '6b16baba-41ae-586a-9f53-34a7b7be56d1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'street cleaning',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6d14d57a-95b0-5884-bb1f-f3ba62717e74',
				name: '1447290712_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '8222572d-0142-42a2-b406-739182764212',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6d14d57a-95b0-5884-bb1f-f3ba62717e74',
						no_return_unit: null,
						user_classes_except: ["'truck'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '8ef610e5-a6f5-587a-8ee5-3eed592ecec6',
						days_of_month: null,
						curb_policy_id: '6d14d57a-95b0-5884-bb1f-f3ba62717e74',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6dbf618b-8181-55d1-a15f-8afe7a755ee7',
				name: '781012619_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '632fdb1d-716a-46a5-b3b8-9732fd238bb8',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: '6dbf618b-8181-55d1-a15f-8afe7a755ee7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '209e7905-9bcc-5f53-ab7c-362041564abd',
						days_of_month: null,
						curb_policy_id: '6dbf618b-8181-55d1-a15f-8afe7a755ee7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6dc70e1a-e797-56ae-afca-a8dde7a0f765',
				name: '1707539190_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'bacd87a2-1ac0-4080-bc17-2bea119cafe2',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6dc70e1a-e797-56ae-afca-a8dde7a0f765',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd8c20299-5651-5889-a3df-eba0a943fafa',
						days_of_month: null,
						curb_policy_id: '6dc70e1a-e797-56ae-afca-a8dde7a0f765',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6dc87316-c493-5420-a727-9eb55a095cc2',
				name: '2064161791_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '3afab9fd-bba6-4dbf-bf42-bb8315130e0c',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'disabled_parking_permit'", "'permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: 'hour',
						curb_policy_id: '6dc87316-c493-5420-a727-9eb55a095cc2',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'c13d426f-46a5-58cd-a2aa-2d29d2f4c670',
						days_of_month: null,
						curb_policy_id: '6dc87316-c493-5420-a727-9eb55a095cc2',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6dd84f0a-d174-5c38-9ca8-c82aa119a785',
				name: '1342316922_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1385cd45-f6e3-46a2-9f8f-bee7855a2899',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6dd84f0a-d174-5c38-9ca8-c82aa119a785',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '819e6c4a-ca7b-527c-8ff2-f43886e2d1e2',
						days_of_month: null,
						curb_policy_id: '6dd84f0a-d174-5c38-9ca8-c82aa119a785',
						weeks_of_month: null,
						time_of_day_end: '23:59',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6e8a88b4-91c4-5c17-877e-cb3342a564be',
				name: '1556110993_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '85a4358e-51bf-48ff-ba7c-8aff51945b6c',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6e8a88b4-91c4-5c17-877e-cb3342a564be',
						no_return_unit: null,
						user_classes_except: ["'car'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '8cf70df9-0d1b-52d0-885c-273086057993',
						days_of_month: null,
						curb_policy_id: '6e8a88b4-91c4-5c17-877e-cb3342a564be',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6f45f5c9-6975-565c-824e-553f5e10dd41',
				name: '787177174_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'a11cd7ad-25d2-477c-8230-0256ef8e8f4f',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6f45f5c9-6975-565c-824e-553f5e10dd41',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'", "'fri'"],
						time_span_id: '2121ec0f-d335-5804-90d0-428786918b24',
						days_of_month: null,
						curb_policy_id: '6f45f5c9-6975-565c-824e-553f5e10dd41',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '6ff59af1-fe5e-54e2-9644-861f68201bff',
				name: '1197290416_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '23cb7268-58fb-4920-b3dd-d4d8248b2370',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '6ff59af1-fe5e-54e2-9644-861f68201bff',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'e47651eb-8486-5e6f-8e63-d997c7972bf6',
						days_of_month: null,
						curb_policy_id: '6ff59af1-fe5e-54e2-9644-861f68201bff',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '71164f7b-4675-578d-9b94-1935e231cf8f',
				name: '2008893631_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '85423057-a3ff-4fb8-89e9-5830aaee8e65',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '71164f7b-4675-578d-9b94-1935e231cf8f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'c736f28d-af2e-56ab-b714-7ec252383e46',
						days_of_month: null,
						curb_policy_id: '71164f7b-4675-578d-9b94-1935e231cf8f',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '712de787-1b51-5a47-8563-0432ef528bc0',
				name: '1263677844_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '102107ed-77bf-43d6-9ee6-a1f80953a61d',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '712de787-1b51-5a47-8563-0432ef528bc0',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'dc4e5cdd-4b8b-5f89-951a-35a140e1d835',
						days_of_month: null,
						curb_policy_id: '712de787-1b51-5a47-8563-0432ef528bc0',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'holidays',
						time_of_day_start: '8:00',
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '71bd67aa-5b5e-5725-891a-f21705893e6b',
				name: '1981451640_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '66c86601-589b-438c-95b0-3ed9b95d420e',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '71bd67aa-5b5e-5725-891a-f21705893e6b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '865d3db1-a638-5bfa-8ccf-c599476ea3eb',
						days_of_month: null,
						curb_policy_id: '71bd67aa-5b5e-5725-891a-f21705893e6b',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '15:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '865d3db1-a638-5bfa-8ccf-c599476ea3ec',
						days_of_month: null,
						curb_policy_id: '71bd67aa-5b5e-5725-891a-f21705893e6b',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'emergency',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '721caa62-96d6-590f-9aec-78a4ef4eec90',
				name: '1671890507_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b5d06642-0441-4a58-a19c-12b581f07497',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '721caa62-96d6-590f-9aec-78a4ef4eec90',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'wed'"],
						time_span_id: 'ebbef06c-e3f7-573e-8e9d-dd3381cb33ee',
						days_of_month: null,
						curb_policy_id: '721caa62-96d6-590f-9aec-78a4ef4eec90',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '724b156a-7630-591a-bc82-24e45aa67d27',
				name: '1617978731_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'b69dc368-e7dc-48ca-a5b2-d32985a6717d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '724b156a-7630-591a-bc82-24e45aa67d27',
						no_return_unit: null,
						user_classes_except: ["'car'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'cacee622-9c71-5280-b938-c65c87fafda7',
						days_of_month: null,
						curb_policy_id: '724b156a-7630-591a-bc82-24e45aa67d27',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7317ea2e-b020-5980-8b34-1afcc5b99220',
				name: '1397401299_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1635d398-a84f-486c-b93c-d85ceed08105',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7317ea2e-b020-5980-8b34-1afcc5b99220',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: 'a74160d6-2b3e-5102-871e-9ae4aa5f3301',
						days_of_month: null,
						curb_policy_id: '7317ea2e-b020-5980-8b34-1afcc5b99220',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: 'street cleaning',
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '73242f6f-a90e-51d8-8f91-66dd5cf100b2',
				name: '1482422638_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'dc13b7fa-9e2b-4313-b883-7034514c436a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '73242f6f-a90e-51d8-8f91-66dd5cf100b2',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '8ee7058f-a497-5c2f-9363-4742a7816342',
						days_of_month: null,
						curb_policy_id: '73242f6f-a90e-51d8-8f91-66dd5cf100b2',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7373f34b-4cc4-5bcb-a21e-016e0e0b3885',
				name: '1902913885_P0',
				description: null,
				published_date: 1767889393000,
				priority: 5,
				rules: [
					{
						name: null,
						rule_id: '0d9a6842-0aea-4d4e-bd31-611920c48918',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7373f34b-4cc4-5bcb-a21e-016e0e0b3885',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '2697c8ac-a140-55f5-a362-ac1da5506942',
						days_of_month: null,
						curb_policy_id: '7373f34b-4cc4-5bcb-a21e-016e0e0b3885',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '74770c46-b9c2-5d83-aa1a-15cad51965d7',
				name: '962699961_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4e9bf91f-2a51-4186-b116-deac35744bb0',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '74770c46-b9c2-5d83-aa1a-15cad51965d7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '7a6a2ec6-4518-53b7-9463-3578b559571b',
						days_of_month: null,
						curb_policy_id: '74770c46-b9c2-5d83-aa1a-15cad51965d7',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '75117098-b4cb-5c27-9208-2e69d7e796db',
				name: '2119840540_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a5dea5b8-1e51-4497-9411-ad5c6e7e200b',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '75117098-b4cb-5c27-9208-2e69d7e796db',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '987d9d71-800a-5700-a78c-c45c6604844e',
						days_of_month: null,
						curb_policy_id: '75117098-b4cb-5c27-9208-2e69d7e796db',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '75baa206-5a35-59a1-80e9-f673ac218d87',
				name: '498914180_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '132e1bf2-7709-43bb-a3e5-613c93462d13',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '75baa206-5a35-59a1-80e9-f673ac218d87',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e64ad747-47e3-5284-a3d0-e4b4d45cb99c',
						days_of_month: null,
						curb_policy_id: '75baa206-5a35-59a1-80e9-f673ac218d87',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '75cabe9a-70a3-5b39-ac85-b109494bd40e',
				name: '223698601_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a5fda3b8-5b92-41b5-9736-5d4fa2581ce5',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '75cabe9a-70a3-5b39-ac85-b109494bd40e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: '757cc488-3cc5-5a45-ae3d-a928fac342ce',
						days_of_month: null,
						curb_policy_id: '75cabe9a-70a3-5b39-ac85-b109494bd40e',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'thu'"],
						time_span_id: '757cc488-3cc5-5a45-ae3d-a928fac342cd',
						days_of_month: null,
						curb_policy_id: '75cabe9a-70a3-5b39-ac85-b109494bd40e',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '75ea3a07-decb-57c2-bec7-e16907c4020d',
				name: '1345716085_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0da4e842-8619-4aea-b08d-d39f84f21f87',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '75ea3a07-decb-57c2-bec7-e16907c4020d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'c00594dd-a124-5ad2-88bc-d0e79dae4793',
						days_of_month: null,
						curb_policy_id: '75ea3a07-decb-57c2-bec7-e16907c4020d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: false
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7722f6d3-faf0-58a6-8a09-c3b398e7980c',
				name: '1082750735_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0f243bc7-cc5a-4ace-884e-2324f890063c',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7722f6d3-faf0-58a6-8a09-c3b398e7980c',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: '0f243bc7-cc5a-4ace-884e-2324f890063d',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7722f6d3-faf0-58a6-8a09-c3b398e7980c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b6db714a-1cdb-5549-80c2-afc38c68d3a1',
						days_of_month: null,
						curb_policy_id: '7722f6d3-faf0-58a6-8a09-c3b398e7980c',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7733b093-e78f-547c-8580-efa7777d32a4',
				name: '1087357172_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e9442710-cd22-4e3f-ab0e-f05cbd549e78',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7733b093-e78f-547c-8580-efa7777d32a4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ad0a7e72-ec09-5b40-a1c3-4c91dc01b08b',
						days_of_month: null,
						curb_policy_id: '7733b093-e78f-547c-8580-efa7777d32a4',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: 'street cleaning',
						time_of_day_start: '11:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7748bfbb-d3bb-5ddd-8b50-f63445c2b3da',
				name: '2063632809_P3',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c8d37e8e-7cfe-4d10-89ca-2205caafe865',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7748bfbb-d3bb-5ddd-8b50-f63445c2b3da',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6de8ddbb-7423-5aa5-b373-277845508042',
						days_of_month: null,
						curb_policy_id: '7748bfbb-d3bb-5ddd-8b50-f63445c2b3da',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: false
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '774f4050-2935-5aa6-9c84-9b47f6aafaf3',
				name: '2026742568_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '432a684f-08e5-421b-ad9c-b659b9d8aed7',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '774f4050-2935-5aa6-9c84-9b47f6aafaf3',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a33e479f-2cf3-5b11-802d-260be8cb86e5',
						days_of_month: null,
						curb_policy_id: '774f4050-2935-5aa6-9c84-9b47f6aafaf3',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '78182bb5-8694-583d-ba59-05c44fd3ded7',
				name: '853473695_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9079f464-2968-4b2b-b751-2237cf02ba08',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '78182bb5-8694-583d-ba59-05c44fd3ded7',
						no_return_unit: null,
						user_classes_except: ["'bus'"]
					},
					{
						name: null,
						rule_id: '9079f464-2968-4b2b-b751-2237cf02ba09',
						activity: 'stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'bus'"],
						max_stay_unit: null,
						curb_policy_id: '78182bb5-8694-583d-ba59-05c44fd3ded7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6da1c6b2-c3ab-5df5-8ebb-aeb0732d1cb2',
						days_of_month: null,
						curb_policy_id: '78182bb5-8694-583d-ba59-05c44fd3ded7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '794461ec-5841-594f-b265-786e5b4efc93',
				name: '799103540_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '7c2ae990-b9cd-4ddf-8fb6-5811c744ebaf',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '794461ec-5841-594f-b265-786e5b4efc93',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'"],
						time_span_id: '6c58da4b-deeb-50e8-bd53-b60921433753',
						days_of_month: null,
						curb_policy_id: '794461ec-5841-594f-b265-786e5b4efc93',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '6c58da4b-deeb-50e8-bd53-b60921433754',
						days_of_month: null,
						curb_policy_id: '794461ec-5841-594f-b265-786e5b4efc93',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '6c58da4b-deeb-50e8-bd53-b60921433755',
						days_of_month: null,
						curb_policy_id: '794461ec-5841-594f-b265-786e5b4efc93',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '79502fb6-86ce-5f3c-b663-8f4e4d0d20b5',
				name: '1639731475_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '20e5fca3-3c39-461c-95fc-45416ee88bbd',
						activity: 'stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '79502fb6-86ce-5f3c-b663-8f4e4d0d20b5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'"],
						time_span_id: '927a4774-78a2-5b60-8503-06755d3c57df',
						days_of_month: null,
						curb_policy_id: '79502fb6-86ce-5f3c-b663-8f4e4d0d20b5',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '79dd601f-57a0-5c6e-957a-1856c33ce038',
				name: '416091612_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '745d1d65-d30c-4f56-822f-ac027b22ccf3',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '79dd601f-57a0-5c6e-957a-1856c33ce038',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [1, 2, 3, 12],
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b2ed1444-9f96-5240-b235-3625b2a373b8',
						days_of_month: null,
						curb_policy_id: '79dd601f-57a0-5c6e-957a-1856c33ce038',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7ba6c9b5-0a70-5462-aa33-5cbb61cd581c',
				name: '831888400_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '78b8b05a-9b35-4f74-81ef-63958c13a7f2',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7ba6c9b5-0a70-5462-aa33-5cbb61cd581c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '83e21d2a-9116-5c5f-b0bd-88f3067fc898',
						days_of_month: null,
						curb_policy_id: '7ba6c9b5-0a70-5462-aa33-5cbb61cd581c',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7bc00c45-dfe7-524f-b3df-389b6759f511',
				name: '527166227_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'd4221fed-85bd-4c48-99da-aa84fb87dcb7',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7bc00c45-dfe7-524f-b3df-389b6759f511',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: 'd4221fed-85bd-4c48-99da-aa84fb87dcb8',
						activity: 'stopping',
						max_stay: 10,
						purposes: ["'rideshare'", "'delivery'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: '7bc00c45-dfe7-524f-b3df-389b6759f511',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'bd876fdd-fbde-5121-992f-30711fd9c7ea',
						days_of_month: null,
						curb_policy_id: '7bc00c45-dfe7-524f-b3df-389b6759f511',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7c6397b5-8262-5aa8-935e-359af55f316f',
				name: '865688083_P2',
				description: null,
				published_date: 1767889393000,
				priority: 4,
				rules: [
					{
						name: null,
						rule_id: '89589552-8be2-4cb0-822d-165b81ec836c',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7c6397b5-8262-5aa8-935e-359af55f316f',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '28e95d6b-358f-5100-b088-616e55abccca',
						days_of_month: null,
						curb_policy_id: '7c6397b5-8262-5aa8-935e-359af55f316f',
						weeks_of_month: null,
						time_of_day_end: '17:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7ca4b3cd-fb9d-5eac-805b-2fcc6e0785b0',
				name: '2117286758_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '22e023a5-eb55-4c11-af39-9fa8d10bf40b',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '7ca4b3cd-fb9d-5eac-805b-2fcc6e0785b0',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'scooter'",
							"'moped'",
							"'car'",
							"'truck'",
							"'van'"
						]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '7ef75c87-e7d9-5a0f-a95a-4c3309b07f52',
						days_of_month: null,
						curb_policy_id: '7ca4b3cd-fb9d-5eac-805b-2fcc6e0785b0',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '20:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7d06ddb1-0456-5085-ad53-b9694edc297b',
				name: '1335174025_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'f550f48d-7096-49bd-b951-3538457e8303',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7d06ddb1-0456-5085-ad53-b9694edc297b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '1d007c7b-0130-59e0-8ae9-9a55130c8ef8',
						days_of_month: null,
						curb_policy_id: '7d06ddb1-0456-5085-ad53-b9694edc297b',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7d3c5638-0e27-54b0-b880-94b26ffdd4fd',
				name: '1507996520_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1e839e97-af4f-4a6a-9c35-94fb27de2f42',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'truck'"],
						max_stay_unit: null,
						curb_policy_id: '7d3c5638-0e27-54b0-b880-94b26ffdd4fd',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'a468cf1b-2c32-5335-a939-ad8374fd1700',
						days_of_month: null,
						curb_policy_id: '7d3c5638-0e27-54b0-b880-94b26ffdd4fd',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '20:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7d5f8ade-79e2-5b4b-99bd-69837afc9fea',
				name: '23909360_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3ae85c18-b2f8-4183-b48e-4b84d25b126d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7d5f8ade-79e2-5b4b-99bd-69837afc9fea',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '98b1aa79-05d0-5aa0-b7fb-6a2c2db7c2b8',
						days_of_month: null,
						curb_policy_id: '7d5f8ade-79e2-5b4b-99bd-69837afc9fea',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7e30d0bc-d090-5324-9d5f-c6ea6c0bdb8a',
				name: '656802103_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'eac5499e-f2f4-4286-9929-cd5e9e9ee4c9',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '7e30d0bc-d090-5324-9d5f-c6ea6c0bdb8a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '53ddf2e4-dace-5dc8-8401-37d10e23064d',
						days_of_month: null,
						curb_policy_id: '7e30d0bc-d090-5324-9d5f-c6ea6c0bdb8a',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7eff8225-19f6-5b6b-a3f5-3a7a61a4ebc5',
				name: '1096597889_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'c886b2e2-65f4-4096-8092-a70cbb44f197',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '7eff8225-19f6-5b6b-a3f5-3a7a61a4ebc5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '6277cbc9-d113-5172-a000-1ce088da5a45',
						days_of_month: null,
						curb_policy_id: '7eff8225-19f6-5b6b-a3f5-3a7a61a4ebc5',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '7fb43a64-1975-5733-bd2e-ecea901c21c1',
				name: '2057228427_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '72ac5efd-04ba-43f7-977e-e304574d32e0',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '7fb43a64-1975-5733-bd2e-ecea901c21c1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '60262196-05c1-51c2-b0cb-6dfd09bdb4fa',
						days_of_month: null,
						curb_policy_id: '7fb43a64-1975-5733-bd2e-ecea901c21c1',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '813625d6-4ce8-56e0-9cc7-ac561cadc965',
				name: '1234650395_P0',
				description: null,
				published_date: 1767889393000,
				priority: 5,
				rules: [
					{
						name: null,
						rule_id: '8a2a1c97-ab48-4630-9a6d-f2b4c61907ac',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '813625d6-4ce8-56e0-9cc7-ac561cadc965',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '63ea00a8-04cb-5c4d-8410-ddb1c3774925',
						days_of_month: null,
						curb_policy_id: '813625d6-4ce8-56e0-9cc7-ac561cadc965',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '81cd8fd4-706d-5160-8f23-7668800be48e',
				name: '1752359099_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4bd83b6f-1190-4a9a-9301-db67766dd635',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '81cd8fd4-706d-5160-8f23-7668800be48e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'affc8aa5-c66a-594f-aefc-77694e2e66a5',
						days_of_month: null,
						curb_policy_id: '81cd8fd4-706d-5160-8f23-7668800be48e',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '863816d2-2b91-5f29-9273-065523ad00d1',
				name: '1746913485_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e380ddce-9641-4b5c-8c35-036d5b941efc',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '863816d2-2b91-5f29-9273-065523ad00d1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '49cc0cfd-b541-5cca-ab46-d654da90c8e1',
						days_of_month: null,
						curb_policy_id: '863816d2-2b91-5f29-9273-065523ad00d1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '87485d48-d7b1-5dd9-ad46-52c94e12ed77',
				name: '1027098266_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '0ce57c7a-1278-4ed0-a6e0-ec51fc60f483',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '87485d48-d7b1-5dd9-ad46-52c94e12ed77',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b62259ac-2458-56b9-a31e-dbfac5c32c66',
						days_of_month: null,
						curb_policy_id: '87485d48-d7b1-5dd9-ad46-52c94e12ed77',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: false
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '890dca2a-593d-5972-906a-b9b2c4eccb97',
				name: '913529280_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '44f661b2-cc24-4936-80c8-92783e9fe575',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '890dca2a-593d-5972-906a-b9b2c4eccb97',
						no_return_unit: null,
						user_classes_except: ["'van'", "'truck'", "'car'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f813d85d-5b37-51e8-8eb0-cbcdaa7e17f1',
						days_of_month: null,
						curb_policy_id: '890dca2a-593d-5972-906a-b9b2c4eccb97',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '89b70c8f-cf7c-5731-966b-509c293cc706',
				name: '2136175018_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '98a25d59-a071-4e63-978f-837981253c2b',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '89b70c8f-cf7c-5731-966b-509c293cc706',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '1942e67d-c6de-51fc-a7ec-99db3fd302fc',
						days_of_month: null,
						curb_policy_id: '89b70c8f-cf7c-5731-966b-509c293cc706',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '8c3b450b-164e-5cfd-99a7-b43fdaffa958',
				name: '1360473068_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'bab042e7-36b1-469d-aff9-93e1669e3fd5',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '8c3b450b-164e-5cfd-99a7-b43fdaffa958',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '59396cf8-fb54-5b17-bf78-1b03fc5a2a14',
						days_of_month: null,
						curb_policy_id: '8c3b450b-164e-5cfd-99a7-b43fdaffa958',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '8c770287-2db0-5def-b5b0-d5e2917e166c',
				name: '1041634348_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'b255f602-cfb8-4d3b-bb13-f0cbed196091',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '8c770287-2db0-5def-b5b0-d5e2917e166c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '0f596468-4811-573f-9ce7-910182f27b36',
						days_of_month: null,
						curb_policy_id: '8c770287-2db0-5def-b5b0-d5e2917e166c',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '8d9f5444-a5d3-5bee-9b54-3e3cc1a13b58',
				name: '424515828_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'bcdea03b-d457-4fdc-ae9a-b2dd7ac0bfd9',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '8d9f5444-a5d3-5bee-9b54-3e3cc1a13b58',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '54829461-c9fb-52e6-aa82-e95d53858270',
						days_of_month: null,
						curb_policy_id: '8d9f5444-a5d3-5bee-9b54-3e3cc1a13b58',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '6:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9025665d-b42d-5f94-8fe9-8f36a966aa75',
				name: '1059718194_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b8aace7f-aeb1-4318-8d83-048ab22bf8d3',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '9025665d-b42d-5f94-8fe9-8f36a966aa75',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '366e5bc3-6ce7-5c16-af37-208c6d2e6e92',
						days_of_month: null,
						curb_policy_id: '9025665d-b42d-5f94-8fe9-8f36a966aa75',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '90479285-aa3f-5480-9f55-796241ca422c',
				name: '1450386962_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f33d9624-53f8-4cd7-84a5-4f91f3463537',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '90479285-aa3f-5480-9f55-796241ca422c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd83e3b0b-6e0e-5fca-af05-cf9265a805b5',
						days_of_month: null,
						curb_policy_id: '90479285-aa3f-5480-9f55-796241ca422c',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '90fb2fcf-6bfb-52d6-9077-777bfcc4543e',
				name: '1959114771_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e5eefc7b-0ccb-415f-b786-6c1f1aed2c30',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '90fb2fcf-6bfb-52d6-9077-777bfcc4543e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ae0c18ca-8263-5657-a131-e1e9ecb3692d',
						days_of_month: null,
						curb_policy_id: '90fb2fcf-6bfb-52d6-9077-777bfcc4543e',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '91581186-5b14-5c43-b355-15d076478eba',
				name: '105435285_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '4de0b544-e225-476e-b1e4-d1781ce00ca0',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '91581186-5b14-5c43-b355-15d076478eba',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '5844b037-08eb-5c68-95ad-4cf90da0a434',
						days_of_month: null,
						curb_policy_id: '91581186-5b14-5c43-b355-15d076478eba',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '94a27839-03cf-54c2-a1f2-125aa33f8fce',
				name: '402000417_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '42fb96d3-bec1-41a6-80a8-99e4cf9264c5',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '94a27839-03cf-54c2-a1f2-125aa33f8fce',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '5932b1bd-f48d-5d1d-b493-18d4eb4c3fee',
						days_of_month: null,
						curb_policy_id: '94a27839-03cf-54c2-a1f2-125aa33f8fce',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '950bd7d4-f04a-5d2b-b73e-4471a9344ca9',
				name: '1381810973_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '9751941c-fc5f-4afa-9493-d295b6e251b7',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '950bd7d4-f04a-5d2b-b73e-4471a9344ca9',
						no_return_unit: null,
						user_classes_except: ["'car'"]
					},
					{
						name: null,
						rule_id: '9751941c-fc5f-4afa-9493-d295b6e251b8',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: '950bd7d4-f04a-5d2b-b73e-4471a9344ca9',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'ae63b08e-dd07-542e-8b16-33aced9c12a0',
						days_of_month: null,
						curb_policy_id: '950bd7d4-f04a-5d2b-b73e-4471a9344ca9',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '95264811-e15e-5ee4-bcb4-0d7326d374b4',
				name: '175119080_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'd972ad28-fa0b-4370-a6b3-531ea3c38eeb',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: '95264811-e15e-5ee4-bcb4-0d7326d374b4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd9405a1f-67db-5006-96e2-f3ad4d11856f',
						days_of_month: null,
						curb_policy_id: '95264811-e15e-5ee4-bcb4-0d7326d374b4',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '961e5356-b124-58fb-a9dd-bd04a4ef301d',
				name: '2008893631_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '9d2eac26-b94d-4045-a022-becc4be5ddad',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '961e5356-b124-58fb-a9dd-bd04a4ef301d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '75c49406-f47b-547b-a0b7-5da0ceddb775',
						days_of_month: null,
						curb_policy_id: '961e5356-b124-58fb-a9dd-bd04a4ef301d',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '96dd45cd-badb-5134-b383-fb78e850e1c1',
				name: '1639731475_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'dc834a33-041f-4ced-9652-5f4d4f5c4b43',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '96dd45cd-badb-5134-b383-fb78e850e1c1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0e4415d2-27be-5b35-974a-178694a8be25',
						days_of_month: null,
						curb_policy_id: '96dd45cd-badb-5134-b383-fb78e850e1c1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9745621d-9d67-5a65-8d70-88f55ea95ee7',
				name: '1307019628_P0',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'd142a0d4-b22d-4118-a103-d4a1923361bb',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9745621d-9d67-5a65-8d70-88f55ea95ee7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '782439d9-9f58-5225-9599-6c962a31f140',
						days_of_month: null,
						curb_policy_id: '9745621d-9d67-5a65-8d70-88f55ea95ee7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '97712aa8-ce27-53c5-b8e0-c29a2076b417',
				name: '2064501399_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3b656298-96d3-4570-94e4-43ea65a33156',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '97712aa8-ce27-53c5-b8e0-c29a2076b417',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'c5bccb28-679c-5158-8cc5-f48929ecf1fc',
						days_of_month: null,
						curb_policy_id: '97712aa8-ce27-53c5-b8e0-c29a2076b417',
						weeks_of_month: null,
						time_of_day_end: '14:00',
						designated_period: null,
						time_of_day_start: '12:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9837ada3-cb11-58c0-9f76-d52b6c519197',
				name: '563136520_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ac0ab77d-9328-4fd7-8ee4-ee4c1e35cc8d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9837ada3-cb11-58c0-9f76-d52b6c519197',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '402e156b-c332-571e-bb25-9413ae16ee7d',
						days_of_month: null,
						curb_policy_id: '9837ada3-cb11-58c0-9f76-d52b6c519197',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9a121636-534a-5705-be03-a1e4213e4c50',
				name: '33604492_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '061281fb-a1a0-4563-9c82-6b0091c83950',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9a121636-534a-5705-be03-a1e4213e4c50',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sat'", "'thu'", "'tue'"],
						time_span_id: 'f2286e6b-4361-5795-b378-ff2fcfd659a8',
						days_of_month: null,
						curb_policy_id: '9a121636-534a-5705-be03-a1e4213e4c50',
						weeks_of_month: null,
						time_of_day_end: '1:00',
						designated_period: null,
						time_of_day_start: '23:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9a2e8750-c728-54be-a448-b784585a87b3',
				name: '146657195_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'e8e217cd-8fad-4319-8b02-77193c3b87c2',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9a2e8750-c728-54be-a448-b784585a87b3',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '05e3ec31-0957-5865-a361-499ce0dc74fd',
						days_of_month: null,
						curb_policy_id: '9a2e8750-c728-54be-a448-b784585a87b3',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9c8814fe-26fe-5d32-92e7-f2983b96c512',
				name: '785894663_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'be9b2eb1-1a73-4184-820b-155c92d875c8',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '9c8814fe-26fe-5d32-92e7-f2983b96c512',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f57a8651-eea4-52f4-810b-3d0d414d176f',
						days_of_month: null,
						curb_policy_id: '9c8814fe-26fe-5d32-92e7-f2983b96c512',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9cd6a118-9d98-5317-80ea-927bb7db0832',
				name: '291258841_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '3fdbce12-cb19-4222-947d-79a787a9d43b',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9cd6a118-9d98-5317-80ea-927bb7db0832',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '976b599b-a911-5e99-873f-e1303dd561dc',
						days_of_month: null,
						curb_policy_id: '9cd6a118-9d98-5317-80ea-927bb7db0832',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: 'street cleaning',
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9d5e96fd-ddfb-5a49-b644-a16bc3fd3e7c',
				name: '334876904_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'deaa014f-cd31-4ffb-af9f-7864364289b1',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: '9d5e96fd-ddfb-5a49-b644-a16bc3fd3e7c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '1582f4ed-a433-51f6-9d9b-589dfed07fb1',
						days_of_month: null,
						curb_policy_id: '9d5e96fd-ddfb-5a49-b644-a16bc3fd3e7c',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'holidays',
						time_of_day_start: '8:00',
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9db6a326-4cb1-5fab-a29c-b76852473984',
				name: '1187604605_P4',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'cdce9d38-f1f0-434a-86f3-eaca5adeeca1',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9db6a326-4cb1-5fab-a29c-b76852473984',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '571265d3-8b6b-5981-b5d6-c34bd6ddae6d',
						days_of_month: null,
						curb_policy_id: '9db6a326-4cb1-5fab-a29c-b76852473984',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9dbd2676-846d-5a0b-a042-01ec01cfdaad',
				name: '2046296939_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c41b0439-36af-420c-bdfe-8616957c59d8',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9dbd2676-846d-5a0b-a042-01ec01cfdaad',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '54dcecc2-6bcb-5ddb-bd7e-c02b5249a580',
						days_of_month: null,
						curb_policy_id: '9dbd2676-846d-5a0b-a042-01ec01cfdaad',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'street cleaning',
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: '9ec07acc-8921-5de9-a9eb-6a007ab0d438',
				name: '1169612840_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '19b69c18-7c22-49b9-9a22-785cbd9df08e',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: '9ec07acc-8921-5de9-a9eb-6a007ab0d438',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: '19b69c18-7c22-49b9-9a22-785cbd9df08d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: '9ec07acc-8921-5de9-a9eb-6a007ab0d438',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ae1fbd25-e4fb-5e0f-9ec6-373ef15b3628',
						days_of_month: null,
						curb_policy_id: '9ec07acc-8921-5de9-a9eb-6a007ab0d438',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'ae1fbd25-e4fb-5e0f-9ec6-373ef15b3627',
						days_of_month: null,
						curb_policy_id: '9ec07acc-8921-5de9-a9eb-6a007ab0d438',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a1566cce-eac4-59d8-ac6a-f9919e7631a7',
				name: '1845031588_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'fa1d7a6a-a049-4df7-9e75-37969bea326b',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'a1566cce-eac4-59d8-ac6a-f9919e7631a7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a113c4e2-fcb4-5c9d-aff6-72613654f4ac',
						days_of_month: null,
						curb_policy_id: 'a1566cce-eac4-59d8-ac6a-f9919e7631a7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a2c70776-3e65-5a7a-a198-01bfd7d55b67',
				name: '764041842_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '068bbbdc-86cf-40da-a015-cdc9075644be',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'a2c70776-3e65-5a7a-a198-01bfd7d55b67',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd6f89259-f2b4-54f9-a162-9a2af881e59b',
						days_of_month: null,
						curb_policy_id: 'a2c70776-3e65-5a7a-a198-01bfd7d55b67',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a31506eb-8959-593f-84d3-bc9402e7e0ad',
				name: '1353196456_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '5c4bb5c5-47ea-4138-8df0-9147761efbfc',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: 'a31506eb-8959-593f-84d3-bc9402e7e0ad',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd6bcbbcf-1107-5f67-bcc6-2eb3476cda32',
						days_of_month: null,
						curb_policy_id: 'a31506eb-8959-593f-84d3-bc9402e7e0ad',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a3528fbd-0846-519b-92c7-3759845c178c',
				name: '439617230_P2',
				description: null,
				published_date: 1767889393000,
				priority: 4,
				rules: [
					{
						name: null,
						rule_id: '3488439c-d88c-4c85-bce2-44dc4064389c',
						activity: 'parking',
						max_stay: 1,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'truck'", "'van'"],
						max_stay_unit: 'hour',
						curb_policy_id: 'a3528fbd-0846-519b-92c7-3759845c178c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'db5565c5-ae6e-5020-9bec-9587c9805bb2',
						days_of_month: null,
						curb_policy_id: 'a3528fbd-0846-519b-92c7-3759845c178c',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a45bee59-b684-5c26-bfce-f5b359f38439',
				name: '704034131_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'd88da204-6977-4a84-a2f5-32d8d910fd01',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'a45bee59-b684-5c26-bfce-f5b359f38439',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '4b984290-7867-5886-abc4-d9013efb0b1b',
						days_of_month: null,
						curb_policy_id: 'a45bee59-b684-5c26-bfce-f5b359f38439',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a4f0ee95-810e-54c7-ab28-d24cfec4a94c',
				name: '436273405_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '76bf0b9f-c3bb-46e5-8baf-fbf337c10b5d',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'a4f0ee95-810e-54c7-ab28-d24cfec4a94c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b1e824dd-ace0-5bc1-b6f0-cb72890698c5',
						days_of_month: null,
						curb_policy_id: 'a4f0ee95-810e-54c7-ab28-d24cfec4a94c',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a5133d46-e63b-5f8d-a1d0-b7c1266c2667',
				name: '1829322154_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3b3b3e31-d19c-4b6a-941f-183cb3f266be',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'a5133d46-e63b-5f8d-a1d0-b7c1266c2667',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '85302dd4-b25f-591b-ab5c-b22da18e3e96',
						days_of_month: null,
						curb_policy_id: 'a5133d46-e63b-5f8d-a1d0-b7c1266c2667',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a60f3355-85b2-5639-beb7-cd53e6d4185f',
				name: '39958553_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '6bac6e39-312c-4f19-a6d5-13c3896f288c',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'a60f3355-85b2-5639-beb7-cd53e6d4185f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '3e2c1bb2-ce60-50a3-8cd7-84029e9fa4db',
						days_of_month: null,
						curb_policy_id: 'a60f3355-85b2-5639-beb7-cd53e6d4185f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a61bff4b-b79c-512c-9952-5eb6d2aa2a22',
				name: '325306185_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1aedb398-de82-43ff-a6e2-460cb14f8fee',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'van'", "'car'"],
						max_stay_unit: null,
						curb_policy_id: 'a61bff4b-b79c-512c-9952-5eb6d2aa2a22',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e45c7178-240d-572d-a051-e9433ac760de',
						days_of_month: null,
						curb_policy_id: 'a61bff4b-b79c-512c-9952-5eb6d2aa2a22',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a6b1fe5f-5cd0-5e1e-822f-b49602a01df0',
				name: '448172264_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '779c75ed-0b69-475e-8309-358b76b4cba0',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'a6b1fe5f-5cd0-5e1e-822f-b49602a01df0',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '3484b917-01c6-5368-ae9a-67c82cc52562',
						days_of_month: null,
						curb_policy_id: 'a6b1fe5f-5cd0-5e1e-822f-b49602a01df0',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a7acad0b-c1fd-5138-a6dd-ccc13086161f',
				name: '937197516_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c32d3bdd-d2ac-422d-b6dd-dbd35c3a3a19',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'a7acad0b-c1fd-5138-a6dd-ccc13086161f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'ffb62b5d-a275-5196-bd34-2cfb07241e5b',
						days_of_month: null,
						curb_policy_id: 'a7acad0b-c1fd-5138-a6dd-ccc13086161f',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'a8666b06-98f6-517d-9ebd-6185b7b3add1',
				name: '815647547_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '24f01419-cec5-49af-9217-8979b7c8fe7d',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'a8666b06-98f6-517d-9ebd-6185b7b3add1',
						no_return_unit: null,
						user_classes_except: ["'bus'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '34713249-dad5-5057-bf39-27abb56f9797',
						days_of_month: null,
						curb_policy_id: 'a8666b06-98f6-517d-9ebd-6185b7b3add1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'aa0f330e-c261-5289-ad4b-262f27283f9a',
				name: '2117286758_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'a8072bba-b4c4-4af6-b79c-9dffb5991b61',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'aa0f330e-c261-5289-ad4b-262f27283f9a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '1a80a1c2-4f21-57b0-9f25-580333a94805',
						days_of_month: null,
						curb_policy_id: 'aa0f330e-c261-5289-ad4b-262f27283f9a',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'aa9cb429-d8a0-5d43-ad19-520a8d3d8322',
				name: '1082750735_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'dce9dccf-b987-4dc7-9b4c-b721fff2551e',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'aa9cb429-d8a0-5d43-ad19-520a8d3d8322',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'thu'", "'tue'"],
						time_span_id: '3ce069ae-f613-5e62-923c-d037a489a951',
						days_of_month: null,
						curb_policy_id: 'aa9cb429-d8a0-5d43-ad19-520a8d3d8322',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ab37b411-2dd6-5bd6-958e-cfba6f5b4ed2',
				name: '1480041181_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '40137fe2-3870-4ab5-8936-a2f6aa2869b7',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ab37b411-2dd6-5bd6-958e-cfba6f5b4ed2',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'fea91fdf-09a4-5f7d-812c-057052ae4611',
						days_of_month: null,
						curb_policy_id: 'ab37b411-2dd6-5bd6-958e-cfba6f5b4ed2',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'abb1d0ec-a89a-5856-aac1-83201e39e341',
				name: '1129018917_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '30f207d0-710c-4fd4-967b-ecddcb48dcac',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'abb1d0ec-a89a-5856-aac1-83201e39e341',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'c58d537f-8d03-532a-add6-a1dd28c8a598',
						days_of_month: null,
						curb_policy_id: 'abb1d0ec-a89a-5856-aac1-83201e39e341',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'aca6e4a4-8d4b-532f-a080-6c20ccd468e2',
				name: '684358065_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '54a2a095-ed7c-482c-b956-d6acdab13f6b',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'human'"],
						max_stay_unit: null,
						curb_policy_id: 'aca6e4a4-8d4b-532f-a080-6c20ccd468e2',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: '54a2a095-ed7c-482c-b956-d6acdab13f6c',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'aca6e4a4-8d4b-532f-a080-6c20ccd468e2',
						no_return_unit: null,
						user_classes_except: ["'human'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '7474fbe1-de72-51cf-b904-1eeaea298dba',
						days_of_month: null,
						curb_policy_id: 'aca6e4a4-8d4b-532f-a080-6c20ccd468e2',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'acf22892-d81f-5b78-9c8d-6dcb67c12596',
				name: '1025895877_P1',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: '615b9cb3-0e38-49a9-be59-270693e6758a',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'acf22892-d81f-5b78-9c8d-6dcb67c12596',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '5f47d7b3-8f85-5edb-b15e-3a867c99bef9',
						days_of_month: null,
						curb_policy_id: 'acf22892-d81f-5b78-9c8d-6dcb67c12596',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ad4ec61c-7f14-5c23-a5b1-49754e157f88',
				name: '766874009_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '28637be2-0dc8-4e6a-91d3-77722845aa8b',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ad4ec61c-7f14-5c23-a5b1-49754e157f88',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '0e3598bf-f1ac-5ed5-83f4-148121a2f73d',
						days_of_month: null,
						curb_policy_id: 'ad4ec61c-7f14-5c23-a5b1-49754e157f88',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ad8b584d-f988-5ff2-92ec-fcb69f4e6690',
				name: '1807289555_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '3d446333-a103-4e76-ba63-9d203c04e3ab',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'ad8b584d-f988-5ff2-92ec-fcb69f4e6690',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '58623812-715c-5bbe-84fb-96d04d170c46',
						days_of_month: null,
						curb_policy_id: 'ad8b584d-f988-5ff2-92ec-fcb69f4e6690',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ada3f874-43f7-563c-8a80-54885a71ecee',
				name: '215909344_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4cfca6c4-0f89-47e1-a80f-6833e7a66a15',
						activity: 'parking',
						max_stay: 20,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: 'ada3f874-43f7-563c-8a80-54885a71ecee',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'b6ecc66b-14b5-51e8-ba92-67fdb08651ce',
						days_of_month: null,
						curb_policy_id: 'ada3f874-43f7-563c-8a80-54885a71ecee',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'b6ecc66b-14b5-51e8-ba92-67fdb08651cd',
						days_of_month: null,
						curb_policy_id: 'ada3f874-43f7-563c-8a80-54885a71ecee',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'af145109-0bd4-56c3-86b5-a28f0f48b279',
				name: '904108192_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '5d67cacd-04e4-410b-a468-f921785bf43f',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'af145109-0bd4-56c3-86b5-a28f0f48b279',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '8fc6a21d-8bf9-5bfd-a2fd-f9f54b475ff7',
						days_of_month: null,
						curb_policy_id: 'af145109-0bd4-56c3-86b5-a28f0f48b279',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '10:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b01b4c02-6a8a-572f-a86f-e7136156eff5',
				name: '886580921_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'cca27636-32b8-4ce7-961f-b84a6aebf982',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b01b4c02-6a8a-572f-a86f-e7136156eff5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '9626ebdc-ca42-543a-a6a1-8d044218c36e',
						days_of_month: null,
						curb_policy_id: 'b01b4c02-6a8a-572f-a86f-e7136156eff5',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b0b74a62-b677-5302-811a-030d9b158338',
				name: '1288411477_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'ff47485e-d9ee-49c6-9667-6e6a254b9cbb',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b0b74a62-b677-5302-811a-030d9b158338',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '7298a249-f54b-5ad3-aeb5-09feebf53e4d',
						days_of_month: null,
						curb_policy_id: 'b0b74a62-b677-5302-811a-030d9b158338',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b1079a08-69eb-5787-a75e-2f9ba64dd39a',
				name: '1818882_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '809470fa-41d0-46db-8a0a-988ee695c842',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'b1079a08-69eb-5787-a75e-2f9ba64dd39a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '60208e7e-5734-5782-8418-e913c9b5524f',
						days_of_month: null,
						curb_policy_id: 'b1079a08-69eb-5787-a75e-2f9ba64dd39a',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b1878a56-bb1c-575b-a737-389c4af739d9',
				name: '703422875_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '671af8de-3051-41a3-9e1f-0a39eab70bb8',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'b1878a56-bb1c-575b-a737-389c4af739d9',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '5b2ca981-2a27-5d7b-b8eb-0454e5ae933f',
						days_of_month: null,
						curb_policy_id: 'b1878a56-bb1c-575b-a737-389c4af739d9',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b1b1f600-8757-5f19-ac7e-0e375868ad44',
				name: '1096246262_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'e5b54033-fe25-459b-8017-cdccd38f3c58',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'b1b1f600-8757-5f19-ac7e-0e375868ad44',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'cfcceca8-124a-5ec0-ac96-b67d73fe0677',
						days_of_month: null,
						curb_policy_id: 'b1b1f600-8757-5f19-ac7e-0e375868ad44',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b3fa6650-8d2f-52b3-ab6e-19c56555c5da',
				name: '1855615714_P0',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: '7120cf12-1885-407d-ad22-1651e2cab8ba',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'b3fa6650-8d2f-52b3-ab6e-19c56555c5da',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'e3903e18-f784-50bb-8afe-ebeaffec19e5',
						days_of_month: null,
						curb_policy_id: 'b3fa6650-8d2f-52b3-ab6e-19c56555c5da',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b46839b3-ca5b-5e6e-bdfb-fcc56080ffba',
				name: '1628019348_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c8dfca95-64c3-4027-ba70-a092795d93e1',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b46839b3-ca5b-5e6e-bdfb-fcc56080ffba',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'ece561bf-d97f-5c1f-ae5c-0dd86c991ddf',
						days_of_month: null,
						curb_policy_id: 'b46839b3-ca5b-5e6e-bdfb-fcc56080ffba',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ece561bf-d97f-5c1f-ae5c-0dd86c991dde',
						days_of_month: null,
						curb_policy_id: 'b46839b3-ca5b-5e6e-bdfb-fcc56080ffba',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'holidays',
						time_of_day_start: null,
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b483165f-aa59-5e13-ab1c-8291a6bdd8d0',
				name: '1475906408_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'a7f34a56-b0e0-46fa-9345-636d2185d349',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b483165f-aa59-5e13-ab1c-8291a6bdd8d0',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b3cc8411-ff5b-5c6f-b61b-86cc897367ad',
						days_of_month: null,
						curb_policy_id: 'b483165f-aa59-5e13-ab1c-8291a6bdd8d0',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b5043705-bc01-5371-9ab7-6e94668dce72',
				name: '969141954_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1d76de12-78f0-4635-9a0d-97ac9db2ed83',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b5043705-bc01-5371-9ab7-6e94668dce72',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'thu'"],
						time_span_id: '8209633f-a30d-5e96-a70a-f950afceccfa',
						days_of_month: null,
						curb_policy_id: 'b5043705-bc01-5371-9ab7-6e94668dce72',
						weeks_of_month: null,
						time_of_day_end: '11:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b5accb2d-0acc-555a-8f63-b0990f88939d',
				name: '404457146_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4ab8d85a-66ef-469e-bff6-151ce2117e57',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'b5accb2d-0acc-555a-8f63-b0990f88939d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'e3ba4f63-ff4c-5381-b6bf-a11f8b18c18f',
						days_of_month: null,
						curb_policy_id: 'b5accb2d-0acc-555a-8f63-b0990f88939d',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b61d1ae6-90f0-52b3-a82f-40ed607b11b8',
				name: '1563621326_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'd06728d4-bec9-4b41-9385-1aa344155830',
						activity: 'parking',
						max_stay: 30,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: 'b61d1ae6-90f0-52b3-a82f-40ed607b11b8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'cbb120bc-0fd7-5725-a8c1-c37bf65446a0',
						days_of_month: null,
						curb_policy_id: 'b61d1ae6-90f0-52b3-a82f-40ed607b11b8',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b782410f-bc21-50c3-be54-c8350ba32fd8',
				name: '1957864307_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'bd5369d2-5a27-435a-9d79-fcd12570c8ae',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b782410f-bc21-50c3-be54-c8350ba32fd8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: '25574419-42f9-5df6-a8a6-04776bec2cdb',
						days_of_month: null,
						curb_policy_id: 'b782410f-bc21-50c3-be54-c8350ba32fd8',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: 'street cleaning',
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b7c95450-d05c-5f1e-8208-6deafb6c142a',
				name: '880835381_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '9d7ae5fa-234e-40e2-9789-07775353560e',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b7c95450-d05c-5f1e-8208-6deafb6c142a',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'moped'",
							"'scooter'",
							"'car'",
							"'bus'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'truck'",
							"'van'"
						]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'd6c644fe-43f2-5c2c-8e54-47ad688f5648',
						days_of_month: null,
						curb_policy_id: 'b7c95450-d05c-5f1e-8208-6deafb6c142a',
						weeks_of_month: null,
						time_of_day_end: '22:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b8134010-4ca3-5e46-bf0e-63abd7885329',
				name: '704034131_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '8f5b5072-a0e2-41a7-bbc5-6ef0d407fef5',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'b8134010-4ca3-5e46-bf0e-63abd7885329',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'"],
						time_span_id: 'c55741f7-fa81-54ab-8fc3-cef604c2a4c0',
						days_of_month: null,
						curb_policy_id: 'b8134010-4ca3-5e46-bf0e-63abd7885329',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'c55741f7-fa81-54ab-8fc3-cef604c2a4c1',
						days_of_month: null,
						curb_policy_id: 'b8134010-4ca3-5e46-bf0e-63abd7885329',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'c55741f7-fa81-54ab-8fc3-cef604c2a4c2',
						days_of_month: null,
						curb_policy_id: 'b8134010-4ca3-5e46-bf0e-63abd7885329',
						weeks_of_month: null,
						time_of_day_end: '23:59',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b86ac306-30dd-5674-897b-75be94e9678e',
				name: '2055962002_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a4cccdd3-9568-4591-adb2-015359d752ac',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b86ac306-30dd-5674-897b-75be94e9678e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '77e0f09c-2e8a-5320-9376-cbfd2ba1ec6f',
						days_of_month: null,
						curb_policy_id: 'b86ac306-30dd-5674-897b-75be94e9678e',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b8fc1bea-d7ff-5b47-93af-598bc711cda4',
				name: '913529280_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '3d9419bf-f004-41f3-9691-ae616674638a',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'van'", "'truck'", "'car'"],
						max_stay_unit: null,
						curb_policy_id: 'b8fc1bea-d7ff-5b47-93af-598bc711cda4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'bfd37787-f71a-5dbb-a431-5ee47a636b1e',
						days_of_month: null,
						curb_policy_id: 'b8fc1bea-d7ff-5b47-93af-598bc711cda4',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b91a9e7d-a947-5bef-b2b9-0e64cd64ae60',
				name: '1165431782_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'c0b2f606-a948-4317-a476-e40c5e3d946b',
						activity: 'loading',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: 'b91a9e7d-a947-5bef-b2b9-0e64cd64ae60',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd04dc9b8-3a7a-5f5c-9d9f-f0a44d4395cd',
						days_of_month: null,
						curb_policy_id: 'b91a9e7d-a947-5bef-b2b9-0e64cd64ae60',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'b9d1dff6-80cc-55cf-add9-4f028eed8e62',
				name: '1700551294_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9c066605-9ee9-4887-87e5-9a853d6e4cac',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'b9d1dff6-80cc-55cf-add9-4f028eed8e62',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '4b310144-3ca7-5266-9f04-56d7232dac96',
						days_of_month: null,
						curb_policy_id: 'b9d1dff6-80cc-55cf-add9-4f028eed8e62',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '4b310144-3ca7-5266-9f04-56d7232dac97',
						days_of_month: null,
						curb_policy_id: 'b9d1dff6-80cc-55cf-add9-4f028eed8e62',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ba867b78-007e-5eb7-b249-62fb6484eb1c',
				name: '410289078_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0ac75c7f-f44a-41f6-8088-222df49b85cf',
						activity: 'parking',
						max_stay: 10,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'minute',
						curb_policy_id: 'ba867b78-007e-5eb7-b249-62fb6484eb1c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'fcb450f7-7e6f-5003-a8d7-2cd0d299dcbf',
						days_of_month: null,
						curb_policy_id: 'ba867b78-007e-5eb7-b249-62fb6484eb1c',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'baeead56-b80a-5982-8538-66cde44b82f1',
				name: '1189393247_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '5d0ac48d-2d52-4487-a622-9e115415d5c4',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'baeead56-b80a-5982-8538-66cde44b82f1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '49c6d939-fdc1-5f3e-8b84-fb43d8bef176',
						days_of_month: null,
						curb_policy_id: 'baeead56-b80a-5982-8538-66cde44b82f1',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bb29d13b-11db-5bb3-a8cf-72919b581f77',
				name: '296225360_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '1775c9d0-0691-4872-bdda-55454e2a4fa1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bb29d13b-11db-5bb3-a8cf-72919b581f77',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '975ea1d2-391f-5278-8f32-e671c3cf9ed4',
						days_of_month: null,
						curb_policy_id: 'bb29d13b-11db-5bb3-a8cf-72919b581f77',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bb3ef670-876f-5b27-98f3-b3134bf48a4b',
				name: '1783706333_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'efba963b-8f66-41f7-8d6e-a95c14d7bb97',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: 'bb3ef670-876f-5b27-98f3-b3134bf48a4b',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: 'efba963b-8f66-41f7-8d6e-a95c14d7bb98',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bb3ef670-876f-5b27-98f3-b3134bf48a4b',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '4b12f370-321f-5358-9c7c-5ab249ec5eec',
						days_of_month: null,
						curb_policy_id: 'bb3ef670-876f-5b27-98f3-b3134bf48a4b',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bb4ee255-8c51-53e6-86d4-30ddf71171af',
				name: '1196403307_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'db1c5425-94c4-4346-92ca-b82cb22688a2',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bb4ee255-8c51-53e6-86d4-30ddf71171af',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '0d313162-03fb-51cc-83bc-d535720242b6',
						days_of_month: null,
						curb_policy_id: 'bb4ee255-8c51-53e6-86d4-30ddf71171af',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'holidays',
						time_of_day_start: '9:00',
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bc1d892e-2e2e-5e06-aef2-edc926714801',
				name: '479907278_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0c7800dd-3e4b-4733-b595-bf30db26223d',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'bc1d892e-2e2e-5e06-aef2-edc926714801',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '12fb0592-14fb-5f0e-93ee-a16aa2cbcaf0',
						days_of_month: null,
						curb_policy_id: 'bc1d892e-2e2e-5e06-aef2-edc926714801',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bc280707-fef6-5808-b495-549df21d2f2f',
				name: '2094133912_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'b378755c-efd9-4e95-aeed-45e8b232e7b6',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bc280707-fef6-5808-b495-549df21d2f2f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '42f198b7-f542-5860-85ea-7489a348cd7f',
						days_of_month: null,
						curb_policy_id: 'bc280707-fef6-5808-b495-549df21d2f2f',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bc470a34-5e66-52de-ab9d-c6190decd98f',
				name: '1225398269_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '4c20618e-bcb9-4d57-a242-1fd5a0dadf3a',
						activity: 'parking',
						max_stay: 1,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'bc470a34-5e66-52de-ab9d-c6190decd98f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'c6f17ac8-799e-5252-bb72-cb1fd4447939',
						days_of_month: null,
						curb_policy_id: 'bc470a34-5e66-52de-ab9d-c6190decd98f',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bc90b0af-e062-5870-9901-194c7ae6598d',
				name: '431647735_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '1ee63851-54a1-4973-babf-fdcdc0819a19',
						activity: 'no loading',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bc90b0af-e062-5870-9901-194c7ae6598d',
						no_return_unit: null,
						user_classes_except: ["'truck'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '56797089-1106-5642-8c78-cf5088cb9f66',
						days_of_month: null,
						curb_policy_id: 'bc90b0af-e062-5870-9901-194c7ae6598d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bcc56264-6a7e-59fa-b09c-ee851de90283',
				name: '256002712_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '5c3a7037-0043-4eae-a4e1-b0e4b82a8ab7',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bcc56264-6a7e-59fa-b09c-ee851de90283',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '2d1de86f-ff57-5c8b-a6d3-6a2a8410a0c3',
						days_of_month: null,
						curb_policy_id: 'bcc56264-6a7e-59fa-b09c-ee851de90283',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'street cleaning',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bd54af29-6733-5aac-8bb3-83bd15cbcc09',
				name: '1131412737_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'ccd681bd-2f11-44d6-a4a8-a220e8a61f43',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bd54af29-6733-5aac-8bb3-83bd15cbcc09',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd1eff4cb-b089-5383-8ea8-8d404e7fa5aa',
						days_of_month: null,
						curb_policy_id: 'bd54af29-6733-5aac-8bb3-83bd15cbcc09',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'be57ccee-3f0a-5014-b77c-c49467686cc8',
				name: '1850522952_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2adff227-fb7b-4b4b-89f8-f29d136bc373',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'be57ccee-3f0a-5014-b77c-c49467686cc8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'wed'"],
						time_span_id: 'b229fa16-4b4b-5955-b99f-e33b2ec8dd57',
						days_of_month: null,
						curb_policy_id: 'be57ccee-3f0a-5014-b77c-c49467686cc8',
						weeks_of_month: null,
						time_of_day_end: '13:00',
						designated_period: null,
						time_of_day_start: '11:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'beb371b5-418e-537e-b684-79ef8f504e29',
				name: '1187604605_P3',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b856974c-2939-435f-9d3c-b251a7ca39c2',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'beb371b5-418e-537e-b684-79ef8f504e29',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '8b84bc6b-0087-5ea5-a01d-2d3c8aabef14',
						days_of_month: null,
						curb_policy_id: 'beb371b5-418e-537e-b684-79ef8f504e29',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bec539c0-33fe-51d1-8c0b-5475e0a28f6f',
				name: '722349650_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '83ae4066-448c-432a-abc2-b79cace7bb22',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'bec539c0-33fe-51d1-8c0b-5475e0a28f6f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '7c2caa78-6c4c-51d8-9cdb-585d5c047433',
						days_of_month: null,
						curb_policy_id: 'bec539c0-33fe-51d1-8c0b-5475e0a28f6f',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bed9d965-dcae-5f9f-855c-38c1b60e4c1e',
				name: '496384270_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'd2a4e40e-8907-4884-80d4-18bc91b53983',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'bed9d965-dcae-5f9f-855c-38c1b60e4c1e',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '658151d0-7c9d-56e3-99ca-68a718132df6',
						days_of_month: null,
						curb_policy_id: 'bed9d965-dcae-5f9f-855c-38c1b60e4c1e',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'bfc2808e-bcf6-50c6-894b-e5dbe0883861',
				name: '1618212853_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b79fdd09-b04a-42c2-85b9-ce4facbf9495',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'bfc2808e-bcf6-50c6-894b-e5dbe0883861',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '67265713-4ece-5cf6-b64f-034292c39921',
						days_of_month: null,
						curb_policy_id: 'bfc2808e-bcf6-50c6-894b-e5dbe0883861',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c04996eb-04b0-5c1e-b13c-6a77becf57eb',
				name: '1638555719_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4e685e0d-664b-410a-8534-07fa8347db33',
						activity: 'no travel',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c04996eb-04b0-5c1e-b13c-6a77becf57eb',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd1fd3967-8b0c-55b8-a5f5-76334f8ebdb8',
						days_of_month: null,
						curb_policy_id: 'c04996eb-04b0-5c1e-b13c-6a77becf57eb',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c05e4d61-4b59-57a5-958e-7fdd6a198b35',
				name: '369370337_P2',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: 'acb4142b-d1f0-48d7-a8df-b4da6f3aa54e',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c05e4d61-4b59-57a5-958e-7fdd6a198b35',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '80ed902c-672c-5191-a2e4-d16aae996db3',
						days_of_month: null,
						curb_policy_id: 'c05e4d61-4b59-57a5-958e-7fdd6a198b35',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c1ab6313-727c-5524-a997-9fb0c0a2d201',
				name: '854643145_P0',
				description: null,
				published_date: 1767889393000,
				priority: 5,
				rules: [
					{
						name: null,
						rule_id: '6aacb231-0350-425f-8b41-bed3660dbb8e',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c1ab6313-727c-5524-a997-9fb0c0a2d201',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '7e7416f3-5dba-5c40-95f0-de2d54db35fa',
						days_of_month: null,
						curb_policy_id: 'c1ab6313-727c-5524-a997-9fb0c0a2d201',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c2f6be3b-92c7-5c8c-80fd-bfa894f2feb9',
				name: '1780846294_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f45fff7a-d01c-4aab-8a3d-fb7659951b76',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c2f6be3b-92c7-5c8c-80fd-bfa894f2feb9',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: '340f7b15-b71e-51e2-bb7e-1a8741a2c249',
						days_of_month: null,
						curb_policy_id: 'c2f6be3b-92c7-5c8c-80fd-bfa894f2feb9',
						weeks_of_month: null,
						time_of_day_end: '10:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c40247d7-f775-5421-9735-25e4a01cb5c2',
				name: '95943282_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '26c23885-b539-4cc3-be8d-deff8a1bad24',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c40247d7-f775-5421-9735-25e4a01cb5c2',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '42ec29b8-5d31-5edc-94b7-24e9da1d6a1f',
						days_of_month: null,
						curb_policy_id: 'c40247d7-f775-5421-9735-25e4a01cb5c2',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c45ccb1e-8b0d-5f5f-8a0c-4b6e09156532',
				name: '733071097_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '0d592af2-0545-4a05-8f23-40b7c31b903d',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'disabled_parking_permit'"],
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: 'hour',
						curb_policy_id: 'c45ccb1e-8b0d-5f5f-8a0c-4b6e09156532',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '51cd15de-af85-57ed-9993-92cb11ba88a1',
						days_of_month: null,
						curb_policy_id: 'c45ccb1e-8b0d-5f5f-8a0c-4b6e09156532',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c45fa889-1be7-5a0d-b13b-cb09759c85f4',
				name: '1336104505_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2517827d-6336-47d5-9360-f423fafefc3e',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'waste_management'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c45fa889-1be7-5a0d-b13b-cb09759c85f4',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'wed'"],
						time_span_id: '58cfb4a7-6275-5f22-bad5-e5c4f754cc7a',
						days_of_month: null,
						curb_policy_id: 'c45fa889-1be7-5a0d-b13b-cb09759c85f4',
						weeks_of_month: [1, 3],
						time_of_day_end: '11:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c4759574-99ec-5766-87b8-a4636a46623a',
				name: '1582455800_P1',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: 'd149dba7-17e3-4717-993c-95a6906da999',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c4759574-99ec-5766-87b8-a4636a46623a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '9bec8cd4-1b11-553b-b6f4-01ce644f9062',
						days_of_month: null,
						curb_policy_id: 'c4759574-99ec-5766-87b8-a4636a46623a',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c4830626-162e-5a59-9d41-e40311ad0a43',
				name: '1429975465_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2c4becd8-dff6-42ae-89b6-97dc0d2fd7b1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c4830626-162e-5a59-9d41-e40311ad0a43',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'b652a0d0-ecbe-5282-8092-b55812113c3e',
						days_of_month: null,
						curb_policy_id: 'c4830626-162e-5a59-9d41-e40311ad0a43',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: null,
						time_of_day_start: '0:01',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c4c57476-8106-57f5-b259-ff8d504a9510',
				name: '315186950_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '39c7ac42-5897-418a-ae27-9ae9dca7e075',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: 'c4c57476-8106-57f5-b259-ff8d504a9510',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a5ce8de7-2e73-52db-b1b1-3523ce11ff18',
						days_of_month: null,
						curb_policy_id: 'c4c57476-8106-57f5-b259-ff8d504a9510',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c58bbccf-7511-5830-9754-0914dd401b12',
				name: '338422520_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '25cc1614-4cf8-4f0d-9e5d-b8cfdd20a104',
						activity: 'parking',
						max_stay: null,
						purposes: ["'emergency_use'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c58bbccf-7511-5830-9754-0914dd401b12',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ce258cff-a5e7-5647-bfa2-487c45fc036b',
						days_of_month: null,
						curb_policy_id: 'c58bbccf-7511-5830-9754-0914dd401b12',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c700e78a-11cb-5b64-a715-c32c8026eb85',
				name: '880899132_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'b2f13656-5f58-4a2a-8371-f3e2a2366de9',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'c700e78a-11cb-5b64-a715-c32c8026eb85',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'de53bc12-625c-52e6-aa28-6d995c73e258',
						days_of_month: null,
						curb_policy_id: 'c700e78a-11cb-5b64-a715-c32c8026eb85',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c86c7e6e-e09d-5ca7-a300-6e47f0fd8d20',
				name: '1569586838_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'f6c7081b-b885-4eda-ad36-e6714a817745',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: 'hour',
						curb_policy_id: 'c86c7e6e-e09d-5ca7-a300-6e47f0fd8d20',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f6acf0d0-292d-5d5f-915c-17a20f1e93d0',
						days_of_month: null,
						curb_policy_id: 'c86c7e6e-e09d-5ca7-a300-6e47f0fd8d20',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'c8e6eb88-225c-56e5-8bfb-9e1de387c8c6',
				name: '509160756_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '58705331-9dca-4fbc-8a49-a32a50d289e2',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: 'c8e6eb88-225c-56e5-8bfb-9e1de387c8c6',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'e48a42a0-a736-5054-b848-57aeeb36e88c',
						days_of_month: null,
						curb_policy_id: 'c8e6eb88-225c-56e5-8bfb-9e1de387c8c6',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ca070e92-ac65-5063-8378-b4353d3ac2fe',
				name: '1559958522_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'f9666731-8d9d-49d2-a60f-29746cbe64f2',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ca070e92-ac65-5063-8378-b4353d3ac2fe',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e0129811-8659-53e5-9b1e-4856ff443e06',
						days_of_month: null,
						curb_policy_id: 'ca070e92-ac65-5063-8378-b4353d3ac2fe',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ca853f80-1528-58ad-af4f-dae112bb949a',
				name: '2140235207_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'fbb52328-0830-4bc1-9364-3697e1d935dc',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'ca853f80-1528-58ad-af4f-dae112bb949a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '78827cfb-9e1c-5bdc-8720-80baf44e35c3',
						days_of_month: null,
						curb_policy_id: 'ca853f80-1528-58ad-af4f-dae112bb949a',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'caa4d22a-cd93-5af7-87cf-fe1987a32963',
				name: '1441251946_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ceb1158a-6e98-4ed6-bd9f-c3183a2419fc',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'caa4d22a-cd93-5af7-87cf-fe1987a32963',
						no_return_unit: null,
						user_classes_except: ["'bicycle'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '6b3a5c00-6f36-54dc-b622-b46c42e8f7c9',
						days_of_month: null,
						curb_policy_id: 'caa4d22a-cd93-5af7-87cf-fe1987a32963',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'cb60ae0c-cc2e-575c-a7a3-5b4204bb10d8',
				name: '1845031588_P0',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: 'f04f52bd-ed18-4e81-83f1-d2fbeb899ca9',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'disabled_parking_permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: 'hour',
						curb_policy_id: 'cb60ae0c-cc2e-575c-a7a3-5b4204bb10d8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '2b30d811-0898-5adf-95f2-7ea0977385b9',
						days_of_month: null,
						curb_policy_id: 'cb60ae0c-cc2e-575c-a7a3-5b4204bb10d8',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'cba3f226-c76a-57bb-b7a8-629ec0cd4f60',
				name: '416091612_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'f93bdf16-3d47-4d38-884f-838a4b1bd24b',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'cba3f226-c76a-57bb-b7a8-629ec0cd4f60',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [4, 5, 6, 7, 8, 9, 10, 11],
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: '34eb8b43-3f67-54f4-ac63-45eb5cab150c',
						days_of_month: null,
						curb_policy_id: 'cba3f226-c76a-57bb-b7a8-629ec0cd4f60',
						weeks_of_month: null,
						time_of_day_end: '17:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'cd339caa-fb4c-5064-a0bd-31bb34f4e1c7',
				name: '2144535226_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9a508433-23c5-4452-8e75-03cf351e8a9d',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'cd339caa-fb4c-5064-a0bd-31bb34f4e1c7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '2118d98d-170f-50c4-b8f3-80384e599389',
						days_of_month: null,
						curb_policy_id: 'cd339caa-fb4c-5064-a0bd-31bb34f4e1c7',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'cf58705a-2d0d-5f21-8146-f783ea20d024',
				name: '1030332366_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '010fada7-0671-405c-8192-74eb1b099cf3',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: 'cf58705a-2d0d-5f21-8146-f783ea20d024',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ca11baa0-3bab-5003-a1f0-e11968eeb8a9',
						days_of_month: null,
						curb_policy_id: 'cf58705a-2d0d-5f21-8146-f783ea20d024',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd010c9f4-635e-5eaa-a0aa-2caf6762f399',
				name: '1818882_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b0d417cf-7d6f-48e3-b38a-d78163ef3be7',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd010c9f4-635e-5eaa-a0aa-2caf6762f399',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'"],
						time_span_id: 'b963d015-cc24-5628-8f25-016c2f1dc1f1',
						days_of_month: null,
						curb_policy_id: 'd010c9f4-635e-5eaa-a0aa-2caf6762f399',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: null,
						time_of_day_start: '10:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd0a6549b-a216-570c-a269-ed916c810986',
				name: '612537522_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: null,
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'fe282196-de4b-5165-b3e1-1c7f229b077f',
						days_of_month: null,
						curb_policy_id: 'd0a6549b-a216-570c-a269-ed916c810986',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd1791fd4-75cd-5994-a669-41f84c93cabb',
				name: '917358465_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '77dd7850-c4ec-4458-9765-d251e354e378',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd1791fd4-75cd-5994-a669-41f84c93cabb',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '52e95eb3-6539-549f-9ff6-cc2010fac8be',
						days_of_month: null,
						curb_policy_id: 'd1791fd4-75cd-5994-a669-41f84c93cabb',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd1a1c063-c56c-5b21-8afc-49802d21a0a3',
				name: '215909344_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f3e79361-72c4-4ba0-b38d-f59739b572d3',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd1a1c063-c56c-5b21-8afc-49802d21a0a3',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f01b41e1-e739-55ec-aac3-336165ee5b9e',
						days_of_month: null,
						curb_policy_id: 'd1a1c063-c56c-5b21-8afc-49802d21a0a3',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd241ee8f-baf3-53e9-8d6c-90b0834757ab',
				name: '91073819_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'a160df61-0b7a-4e66-9f5b-d9079134846e',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'd241ee8f-baf3-53e9-8d6c-90b0834757ab',
						no_return_unit: null,
						user_classes_except: null
					},
					{
						name: null,
						rule_id: 'a160df61-0b7a-4e66-9f5b-d9079134846d',
						activity: 'loading',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd241ee8f-baf3-53e9-8d6c-90b0834757ab',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'ea337b03-f350-5892-ba0e-c801f5eafe5d',
						days_of_month: null,
						curb_policy_id: 'd241ee8f-baf3-53e9-8d6c-90b0834757ab',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd25464d8-0b41-5789-bdb0-72103a036f50',
				name: '2094133912_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '5126975b-fe45-45e6-a9b2-eaa4f50d7f88',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd25464d8-0b41-5789-bdb0-72103a036f50',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '790b1cea-f86c-52ec-a706-b6fde93b8105',
						days_of_month: null,
						curb_policy_id: 'd25464d8-0b41-5789-bdb0-72103a036f50',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd30532d6-2b18-5ab7-a783-a52a987bdbab',
				name: '351822526_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '7d96aefa-9355-4815-97cc-19383b77f27d',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd30532d6-2b18-5ab7-a783-a52a987bdbab',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '5bcd7afa-a2d1-58d8-b9cb-8265ab5ccb46',
						days_of_month: null,
						curb_policy_id: 'd30532d6-2b18-5ab7-a783-a52a987bdbab',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd4141793-0e12-5379-ab9b-207e17755b90',
				name: '1165431782_P3',
				description: null,
				published_date: 1767889393000,
				priority: 4,
				rules: [
					{
						name: null,
						rule_id: '8dfca1df-98e0-475a-9f40-0e2c131a932c',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd4141793-0e12-5379-ab9b-207e17755b90',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '8e66e228-4fbb-5b8d-9e79-c54fc32f5079',
						days_of_month: null,
						curb_policy_id: 'd4141793-0e12-5379-ab9b-207e17755b90',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd43a6945-994d-52bb-97c9-641460b4bdaf',
				name: '1299879925_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '56102178-a03c-4e6e-af2d-03c3c5b87dfb',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: 'd43a6945-994d-52bb-97c9-641460b4bdaf',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'b5909be1-d2e4-56bd-91f5-9bf000843e46',
						days_of_month: null,
						curb_policy_id: 'd43a6945-994d-52bb-97c9-641460b4bdaf',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd538afd9-0fbb-5cbc-a0a0-5625a8a38373',
				name: '1345716085_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ea73af8d-0dd6-4727-987c-3be2436ac2c4',
						activity: 'parking',
						max_stay: null,
						purposes: ["'disabled_parking_permit'"],
						no_return: null,
						description: null,
						user_classes: ["'accessible'"],
						max_stay_unit: null,
						curb_policy_id: 'd538afd9-0fbb-5cbc-a0a0-5625a8a38373',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f80f38f3-cac8-59c1-8b2a-e0c84860aa8e',
						days_of_month: null,
						curb_policy_id: 'd538afd9-0fbb-5cbc-a0a0-5625a8a38373',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: false
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd55b0da4-76e9-5676-beb8-af3f5eb4c778',
				name: '1752359099_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '6efd1d22-3a2d-42e7-8cd1-ad3c73d77819',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'd55b0da4-76e9-5676-beb8-af3f5eb4c778',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '626c022c-a1a0-5252-b619-80ddcdbc95a5',
						days_of_month: null,
						curb_policy_id: 'd55b0da4-76e9-5676-beb8-af3f5eb4c778',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd5a6f207-9f6a-55fa-a9da-5847f738db0d',
				name: '1078612296_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '7024f3af-c3fd-4937-8c5f-3162d95ed182',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd5a6f207-9f6a-55fa-a9da-5847f738db0d',
						no_return_unit: null,
						user_classes_except: [
							"'motorcycle'",
							"'scooter'",
							"'moped'",
							"'car'",
							"'bus'",
							"'bicycle'",
							"'cargo_bicycle'",
							"'truck'",
							"'van'"
						]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '0ca2da80-8f1b-5854-9af4-77912a5cdd0e',
						days_of_month: null,
						curb_policy_id: 'd5a6f207-9f6a-55fa-a9da-5847f738db0d',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd7c38e6a-e74e-5692-8490-09d02a201455',
				name: '439617230_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '9ec6768d-9cbb-4870-a5c1-2f1e9bbc78c5',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd7c38e6a-e74e-5692-8490-09d02a201455',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '481ecf73-483d-51e0-b8bf-69298c4869d3',
						days_of_month: null,
						curb_policy_id: 'd7c38e6a-e74e-5692-8490-09d02a201455',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sat'"],
						time_span_id: '481ecf73-483d-51e0-b8bf-69298c4869d4',
						days_of_month: null,
						curb_policy_id: 'd7c38e6a-e74e-5692-8490-09d02a201455',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd83a715d-ba47-571a-a82f-74f1c5804238',
				name: '1727504811_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '9c98cd33-86e9-4a3c-aa36-1c786fbff878',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd83a715d-ba47-571a-a82f-74f1c5804238',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'thu'"],
						time_span_id: 'e919cec9-0470-5171-bd98-026cc5eabed7',
						days_of_month: null,
						curb_policy_id: 'd83a715d-ba47-571a-a82f-74f1c5804238',
						weeks_of_month: null,
						time_of_day_end: '14:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd86f639a-22ba-5c09-ad93-07d3981125fd',
				name: '584750943_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '3d9c5700-7411-4a64-961e-35ceadfc3db5',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd86f639a-22ba-5c09-ad93-07d3981125fd',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '8a310373-74ae-5c54-8cb3-986c779a05e3',
						days_of_month: null,
						curb_policy_id: 'd86f639a-22ba-5c09-ad93-07d3981125fd',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd8d8c098-e6f6-5883-9b8e-b50c9e58cadd',
				name: '1272617408_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '891cbf88-4788-41c2-ac2b-cde2a23d69cc',
						activity: 'no travel',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'd8d8c098-e6f6-5883-9b8e-b50c9e58cadd',
						no_return_unit: null,
						user_classes_except: ["'bus'", "'bicycle'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '7c209d6e-c63b-5ce3-bf51-b02d6bbc1879',
						days_of_month: null,
						curb_policy_id: 'd8d8c098-e6f6-5883-9b8e-b50c9e58cadd',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'd94c4786-c4cc-56fd-af33-366833fbb6aa',
				name: '730659545_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: 'b100ca20-0172-4180-b802-a131f864fae3',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'd94c4786-c4cc-56fd-af33-366833fbb6aa',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'd576f66d-5f8f-5959-937e-c2a9c90ab582',
						days_of_month: null,
						curb_policy_id: 'd94c4786-c4cc-56fd-af33-366833fbb6aa',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'da95060d-ab9e-57e1-8aca-53daac0a1e98',
				name: '1030332366_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '24a422c4-849b-452e-803f-42db667f9991',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: null,
						curb_policy_id: 'da95060d-ab9e-57e1-8aca-53daac0a1e98',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '20575eae-333c-5ef7-9aac-f5861d4b5349',
						days_of_month: null,
						curb_policy_id: 'da95060d-ab9e-57e1-8aca-53daac0a1e98',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'db132dcc-c7bb-5e51-bf95-16ddeba77b4b',
				name: '263327061_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '61aa7e6e-c2db-4f29-aa80-0d1cbc737462',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'db132dcc-c7bb-5e51-bf95-16ddeba77b4b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'afcea66d-8878-5507-9f7d-3ed8cbe55b1e',
						days_of_month: null,
						curb_policy_id: 'db132dcc-c7bb-5e51-bf95-16ddeba77b4b',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'db94e13b-dca6-5559-9530-6d86d2052669',
				name: '1598834328_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'b221126d-8244-481b-b05b-ac1d328c4907',
						activity: 'parking',
						max_stay: null,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'db94e13b-dca6-5559-9530-6d86d2052669',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '798deef0-1926-5866-8e87-6d2d03af3e3e',
						days_of_month: null,
						curb_policy_id: 'db94e13b-dca6-5559-9530-6d86d2052669',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'dbece3a0-e2a7-5b3d-8a14-f74391b7a3c7',
				name: '1337061694_P2',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1fa56cba-5169-4d99-80f9-966899647cbe',
						activity: 'parking',
						max_stay: null,
						purposes: ["'construction'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'dbece3a0-e2a7-5b3d-8a14-f74391b7a3c7',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'df898469-646c-5b10-9f8b-d7fe93f80ced',
						days_of_month: null,
						curb_policy_id: 'dbece3a0-e2a7-5b3d-8a14-f74391b7a3c7',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'dc76a149-fd39-5b0f-9f96-88728504aafc',
				name: '1927608458_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '7be316ea-2e9e-4a54-9f71-4f96aa34fb39',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'dc76a149-fd39-5b0f-9f96-88728504aafc',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: '64fce0d0-c496-5c7c-9323-4152e1f6f634',
						days_of_month: null,
						curb_policy_id: 'dc76a149-fd39-5b0f-9f96-88728504aafc',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'dc811e79-2737-5544-944c-c3564c9c5fc2',
				name: '1402210587_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'f32422e2-cde6-4aa6-8791-b0199bbf8a00',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'dc811e79-2737-5544-944c-c3564c9c5fc2',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '43e3a23f-50b0-565b-9524-58284275bae4',
						days_of_month: null,
						curb_policy_id: 'dc811e79-2737-5544-944c-c3564c9c5fc2',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '43e3a23f-50b0-565b-9524-58284275bae3',
						days_of_month: null,
						curb_policy_id: 'dc811e79-2737-5544-944c-c3564c9c5fc2',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'holidays',
						time_of_day_start: null,
						designated_period_except: true
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'dcda7ddd-329b-5409-ab93-f133952e3704',
				name: '1285022634_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '454d9e5a-ec32-4273-b813-1ae2641d36e4',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'dcda7ddd-329b-5409-ab93-f133952e3704',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: '53090797-c291-502a-b51f-70afaf1e9cef',
						days_of_month: null,
						curb_policy_id: 'dcda7ddd-329b-5409-ab93-f133952e3704',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'de409afc-8c3c-5e98-9dce-a999c765fe12',
				name: '45304461_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'f22fee9a-0f48-49f8-a40a-a6dac8cce31b',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'de409afc-8c3c-5e98-9dce-a999c765fe12',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'c04428d7-0b39-596e-b5aa-d7fdf00f0851',
						days_of_month: null,
						curb_policy_id: 'de409afc-8c3c-5e98-9dce-a999c765fe12',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'df083a27-ee00-55aa-89f9-8a3f36f6c350',
				name: '8369021_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'c5f2de8f-8798-4f31-95bd-2e4d2922afdb',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'df083a27-ee00-55aa-89f9-8a3f36f6c350',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '973cd108-bbe0-5462-a784-89905889406e',
						days_of_month: null,
						curb_policy_id: 'df083a27-ee00-55aa-89f9-8a3f36f6c350',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e064e263-714b-541e-b7e3-3f05e6b4083b',
				name: '664831418_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b243dbe9-63c8-48af-abb1-0ee321c6598c',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e064e263-714b-541e-b7e3-3f05e6b4083b',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'f670ae0f-2a50-57f9-99ec-6815dd92544b',
						days_of_month: null,
						curb_policy_id: 'e064e263-714b-541e-b7e3-3f05e6b4083b',
						weeks_of_month: null,
						time_of_day_end: '16:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e0a37669-9de9-5f9d-a412-777842af8aee',
				name: '137406282_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '8f8c48c6-1d38-41f9-b4fa-30ed42ef9d00',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e0a37669-9de9-5f9d-a412-777842af8aee',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '3cf3d25d-7c8e-51fe-91a0-6e0f89f79a9b',
						days_of_month: null,
						curb_policy_id: 'e0a37669-9de9-5f9d-a412-777842af8aee',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e1dc1341-5e42-59ce-8216-64ff605e8fdd',
				name: '429008123_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'dc064340-5444-4a11-ad49-63180318fb95',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e1dc1341-5e42-59ce-8216-64ff605e8fdd',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'", "'fri'"],
						time_span_id: '6fb22259-bd1c-5a1f-bb3f-9bc640058a88',
						days_of_month: null,
						curb_policy_id: 'e1dc1341-5e42-59ce-8216-64ff605e8fdd',
						weeks_of_month: null,
						time_of_day_end: '6:00',
						designated_period: null,
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e2514582-4948-50ee-85cd-3902e9c96db1',
				name: '1386185077_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1ed65e9f-d040-4208-b8ea-10fdd7e38eae',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e2514582-4948-50ee-85cd-3902e9c96db1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '607bfd82-83ea-5acd-a6df-24bf0d866db3',
						days_of_month: null,
						curb_policy_id: 'e2514582-4948-50ee-85cd-3902e9c96db1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e3a5544e-9d17-51cd-b9dd-7a77c396c260',
				name: '549020721_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '2786a678-d5b6-4830-be39-2d395dc59048',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e3a5544e-9d17-51cd-b9dd-7a77c396c260',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'd828193e-7014-50aa-8f9a-78eddd60f561',
						days_of_month: null,
						curb_policy_id: 'e3a5544e-9d17-51cd-b9dd-7a77c396c260',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e67567dd-cb5a-5c75-ab2e-d37ceb61d4e6',
				name: '1957223182_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'd01748ce-85a2-49dd-bb31-824dc805e530',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'e67567dd-cb5a-5c75-ab2e-d37ceb61d4e6',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '651dd28d-1285-530b-af6c-5ea417c2e796',
						days_of_month: null,
						curb_policy_id: 'e67567dd-cb5a-5c75-ab2e-d37ceb61d4e6',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e7541209-5dbc-56bf-80bb-e3942dab0b2c',
				name: '1078612296_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '4c162966-9b9e-4500-adce-95cf0ee2dcdf',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e7541209-5dbc-56bf-80bb-e3942dab0b2c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '2186a518-05dd-5d21-9838-33117f45672f',
						days_of_month: null,
						curb_policy_id: 'e7541209-5dbc-56bf-80bb-e3942dab0b2c',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e77b959b-b457-5355-8bcc-0e07c4050b3f',
				name: '567610378_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c4a2c809-b3ce-421d-8332-3f4cc9792b34',
						activity: 'no parking',
						max_stay: null,
						purposes: ["'emergency_use'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e77b959b-b457-5355-8bcc-0e07c4050b3f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '71b6ca69-17c8-5007-a89c-752e9634e89d',
						days_of_month: null,
						curb_policy_id: 'e77b959b-b457-5355-8bcc-0e07c4050b3f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'snow emergency',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e80060ca-bcba-5199-9563-0cabdc89ba21',
				name: '1695955142_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '253fa7c0-fa09-465c-9c2c-366a84aeca86',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e80060ca-bcba-5199-9563-0cabdc89ba21',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'f046fc6f-10a2-589f-8f71-1b7c3a90371c',
						days_of_month: null,
						curb_policy_id: 'e80060ca-bcba-5199-9563-0cabdc89ba21',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'f046fc6f-10a2-589f-8f71-1b7c3a90371b',
						days_of_month: null,
						curb_policy_id: 'e80060ca-bcba-5199-9563-0cabdc89ba21',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '16:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e8e5d35f-d658-50b9-8f97-947129e2d541',
				name: '907149246_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9c4dc57a-26f7-4c1f-9a75-02efb0a92c73',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e8e5d35f-d658-50b9-8f97-947129e2d541',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'fri'", "'thu'"],
						time_span_id: '90bc8970-851b-5720-8cb0-7ac583fbcb40',
						days_of_month: null,
						curb_policy_id: 'e8e5d35f-d658-50b9-8f97-947129e2d541',
						weeks_of_month: null,
						time_of_day_end: '12:00',
						designated_period: 'street cleaning',
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'e97abc43-0488-53a8-a3f7-3ffd2abcc1fa',
				name: '1654106206_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'abd84d0a-4a94-409c-917a-53bc685c9ed1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'e97abc43-0488-53a8-a3f7-3ffd2abcc1fa',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: [4, 5, 6, 7, 8, 9, 10, 11],
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'wed'"],
						time_span_id: 'c4a83cbf-7aec-5fd2-9888-2b54a2c7eb88',
						days_of_month: null,
						curb_policy_id: 'e97abc43-0488-53a8-a3f7-3ffd2abcc1fa',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: 'street cleaning',
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ea554050-bd8e-5b05-a49d-76c60ac978a1',
				name: '443203033_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4fce2f54-44e6-4127-812c-17d7794684f1',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ea554050-bd8e-5b05-a49d-76c60ac978a1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: 'e86b455f-a05e-5f6e-af09-8eaa30e32cc3',
						days_of_month: null,
						curb_policy_id: 'ea554050-bd8e-5b05-a49d-76c60ac978a1',
						weeks_of_month: [1, 3],
						time_of_day_end: '12:00',
						designated_period: 'street cleaning',
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'eb1ce3b1-3a62-5fba-b02f-dfdf0a4b3a28',
				name: '465525382_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: null,
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sat'", "'thu'", "'tue'"],
						time_span_id: 'd5a027fc-e8e1-5ae5-9ad2-c9d9f7cfce4f',
						days_of_month: null,
						curb_policy_id: 'eb1ce3b1-3a62-5fba-b02f-dfdf0a4b3a28',
						weeks_of_month: null,
						time_of_day_end: '1:00',
						designated_period: null,
						time_of_day_start: '23:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '5627ca53-21ef-5dd9-ab78-ccb01b71d82b',
						days_of_month: null,
						curb_policy_id: 'eb1ce3b1-3a62-5fba-b02f-dfdf0a4b3a28',
						weeks_of_month: null,
						time_of_day_end: '20:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'tue'"],
						time_span_id: '1eea2cff-a074-5836-9213-fc53d6600be6',
						days_of_month: null,
						curb_policy_id: 'eb1ce3b1-3a62-5fba-b02f-dfdf0a4b3a28',
						weeks_of_month: [1, 3],
						time_of_day_end: '12:00',
						designated_period: 'street cleaning',
						time_of_day_start: '9:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'eb21da82-1b91-57fb-86f0-05513a6a7859',
				name: '45304461_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '54516b39-37b6-4c30-b603-9bfc8aa2c167',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'eb21da82-1b91-57fb-86f0-05513a6a7859',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '1f680dde-2f3d-5f33-a461-c865125750aa',
						days_of_month: null,
						curb_policy_id: 'eb21da82-1b91-57fb-86f0-05513a6a7859',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ebad5eb6-fded-5834-97ba-08277a9b1861',
				name: '527166227_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'b02249b3-d7bf-4214-b7ce-b2ca807a67e8',
						activity: 'parking',
						max_stay: null,
						purposes: ["'taxi'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ebad5eb6-fded-5834-97ba-08277a9b1861',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a5700400-3953-5fc8-86e8-348bd6b1bbb9',
						days_of_month: null,
						curb_policy_id: 'ebad5eb6-fded-5834-97ba-08277a9b1861',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ec8f8791-83ce-546d-9ee0-fb6f0c2ea58f',
				name: '464220184_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '1ef90391-48e1-4443-881f-232dc0a74d42',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ec8f8791-83ce-546d-9ee0-fb6f0c2ea58f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '47a969a1-547e-5daa-808a-1fd92f864043',
						days_of_month: null,
						curb_policy_id: 'ec8f8791-83ce-546d-9ee0-fb6f0c2ea58f',
						weeks_of_month: null,
						time_of_day_end: '19:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ecbbf4f0-1e31-5270-9bb4-7a940e92901f',
				name: '2008893631_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'f9135550-d4f3-4d45-9464-51d81a4bc343',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ecbbf4f0-1e31-5270-9bb4-7a940e92901f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '36a33af6-c1de-5588-b543-d9439dc645cd',
						days_of_month: null,
						curb_policy_id: 'ecbbf4f0-1e31-5270-9bb4-7a940e92901f',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ecd33c25-5dfc-5af0-bec2-fc3f41beaeab',
				name: '1740851661_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '8b116354-304e-4f4c-9a6f-34ef55478fb7',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ecd33c25-5dfc-5af0-bec2-fc3f41beaeab',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '35a69071-4ed5-56c9-9bf4-882a305874b7',
						days_of_month: null,
						curb_policy_id: 'ecd33c25-5dfc-5af0-bec2-fc3f41beaeab',
						weeks_of_month: null,
						time_of_day_end: '8:00',
						designated_period: null,
						time_of_day_start: '18:00',
						designated_period_except: null
					},
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'", "'sat'"],
						time_span_id: '35a69071-4ed5-56c9-9bf4-882a305874b6',
						days_of_month: null,
						curb_policy_id: 'ecd33c25-5dfc-5af0-bec2-fc3f41beaeab',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: 'holidays',
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ed22737f-0dfb-5e39-9c79-f4cd9bdf985e',
				name: '2035997817_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '0545f449-3327-4e8b-b789-88bf11f19be6',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ed22737f-0dfb-5e39-9c79-f4cd9bdf985e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'c9fc211f-eddd-51ad-bc2b-576cc40bd278',
						days_of_month: null,
						curb_policy_id: 'ed22737f-0dfb-5e39-9c79-f4cd9bdf985e',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'ed789899-b8ad-515d-94b9-06ada74aab5a',
				name: '1687154642_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '17cbcf65-e0de-41e8-8844-b172ec7a9eef',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'ed789899-b8ad-515d-94b9-06ada74aab5a',
						no_return_unit: null,
						user_classes_except: ["'accessible'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'e57054a5-c558-5c7f-91c4-5cae1f8c7cb7',
						days_of_month: null,
						curb_policy_id: 'ed789899-b8ad-515d-94b9-06ada74aab5a',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f01a6126-3f0d-5544-ae36-942dcf0aaa36',
				name: '799103540_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '7143f5a7-a43e-4c76-87d4-6a1cc93eff2e',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: ["'car'"],
						max_stay_unit: 'hour',
						curb_policy_id: 'f01a6126-3f0d-5544-ae36-942dcf0aaa36',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'aa181794-b9c4-5c2a-8bf3-61b76441bb8b',
						days_of_month: null,
						curb_policy_id: 'f01a6126-3f0d-5544-ae36-942dcf0aaa36',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f07d1966-485c-57d9-a35d-9c4a45329ada',
				name: '1475906408_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '9abac1cb-28fb-45f0-82bb-5451d7b904c5',
						activity: 'no travel',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f07d1966-485c-57d9-a35d-9c4a45329ada',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '60fbcbcd-8afe-56c6-a505-1c3edd024aea',
						days_of_month: null,
						curb_policy_id: 'f07d1966-485c-57d9-a35d-9c4a45329ada',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f10ba4b2-142a-5bc3-950f-47c9a8d181f8',
				name: '1205410842_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '68886875-9fbe-4e79-9b2f-f1562390d580',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f10ba4b2-142a-5bc3-950f-47c9a8d181f8',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '9c57db6b-ae06-5410-be7f-f43b712c949a',
						days_of_month: null,
						curb_policy_id: 'f10ba4b2-142a-5bc3-950f-47c9a8d181f8',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f1d15846-b7e6-59b3-8b7a-7428702d8aa0',
				name: '1373350955_P1',
				description: null,
				published_date: 1767889393000,
				priority: 0,
				rules: [
					{
						name: null,
						rule_id: 'c071e6d3-bbea-492c-96bc-b31c028df366',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f1d15846-b7e6-59b3-8b7a-7428702d8aa0',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '8d70dc16-84ce-5a23-b5d9-82d4c8990a19',
						days_of_month: null,
						curb_policy_id: 'f1d15846-b7e6-59b3-8b7a-7428702d8aa0',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f25be282-30ac-547e-840b-60c48a11cfed',
				name: '658842449_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'd4228230-09f6-4774-99f3-80e5544b65b8',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f25be282-30ac-547e-840b-60c48a11cfed',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '57d66718-4b48-5eea-bd74-e751248bccc8',
						days_of_month: null,
						curb_policy_id: 'f25be282-30ac-547e-840b-60c48a11cfed',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f2952e0f-73d7-5246-b69b-9f42adb17806',
				name: '1205410842_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'bab01321-7d19-471c-8fe1-6af0f8c23bbe',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'f2952e0f-73d7-5246-b69b-9f42adb17806',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '41975284-e73b-5598-90e8-2990d6bfc4a6',
						days_of_month: null,
						curb_policy_id: 'f2952e0f-73d7-5246-b69b-9f42adb17806',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f2b7feff-26d0-53c2-b489-2d706cbaaf0e',
				name: '1307019628_P3',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '63a7d135-9fda-4c9f-8c81-051bb7762552',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f2b7feff-26d0-53c2-b489-2d706cbaaf0e',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '08eeab3e-0f3b-58f4-b341-1966d3912107',
						days_of_month: null,
						curb_policy_id: 'f2b7feff-26d0-53c2-b489-2d706cbaaf0e',
						weeks_of_month: null,
						time_of_day_end: '9:00',
						designated_period: null,
						time_of_day_start: '7:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f3c985b3-c18f-5bae-99c7-5bd21add25a1',
				name: '37019181_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'c9480933-9fce-4674-bb75-3a1af6509169',
						activity: 'parking',
						max_stay: 2,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'f3c985b3-c18f-5bae-99c7-5bd21add25a1',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '74bd4e0b-1a91-50bc-8b08-94d58a29b3af',
						days_of_month: null,
						curb_policy_id: 'f3c985b3-c18f-5bae-99c7-5bd21add25a1',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f3f9e8c9-9ba6-5eb8-b534-949865ba6eda',
				name: '799103540_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '4b721de7-9338-4108-b5ea-05bc2b7da7d0',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f3f9e8c9-9ba6-5eb8-b534-949865ba6eda',
						no_return_unit: null,
						user_classes_except: ["'car'"]
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'bd41c9fa-e27e-5560-9294-f37e9deb0eaf',
						days_of_month: null,
						curb_policy_id: 'f3f9e8c9-9ba6-5eb8-b534-949865ba6eda',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f43044f4-cb5b-5ea7-af83-544017aa309a',
				name: '1593964969_P0',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '102ea227-21ed-4c01-9a85-b89d54a3cd30',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f43044f4-cb5b-5ea7-af83-544017aa309a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'sun'", "'tue'", "'sat'", "'wed'"],
						time_span_id: '8ae53e88-1f52-56bb-adf6-c4ad931ca819',
						days_of_month: null,
						curb_policy_id: 'f43044f4-cb5b-5ea7-af83-544017aa309a',
						weeks_of_month: null,
						time_of_day_end: '0:00',
						designated_period: null,
						time_of_day_start: '0:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f45f2768-b91a-5797-8cf2-c8add1a249fe',
				name: '875676722_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '3775b903-4049-4bad-a1e1-bf676fb833a6',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'f45f2768-b91a-5797-8cf2-c8add1a249fe',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: 'eee8deef-a719-5129-95a9-2c53511d93a0',
						days_of_month: null,
						curb_policy_id: 'f45f2768-b91a-5797-8cf2-c8add1a249fe',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f571c238-f8aa-549c-aed6-d7b5335379d9',
				name: '1598903595_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: 'ba50f39c-6e78-4983-a8ec-0e6831a5abce',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f571c238-f8aa-549c-aed6-d7b5335379d9',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'wed'"],
						time_span_id: '3e7310ce-83f0-5d0e-a4f9-a4154543ddab',
						days_of_month: null,
						curb_policy_id: 'f571c238-f8aa-549c-aed6-d7b5335379d9',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: 'street cleaning',
						time_of_day_start: '1:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f6233e93-a901-57f0-a559-1de6c2c4701d',
				name: '1714463442_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '5049333b-9108-4a12-8129-bee281e93713',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f6233e93-a901-57f0-a559-1de6c2c4701d',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '558b7c06-4b29-5e5a-911f-e1bf7889ce6b',
						days_of_month: null,
						curb_policy_id: 'f6233e93-a901-57f0-a559-1de6c2c4701d',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f6624cd9-8c83-5a51-b4d9-2022a3d7cb9c',
				name: '533171840_P2',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'cf5c2e0e-7486-4f28-9f6e-8945b2caf85b',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f6624cd9-8c83-5a51-b4d9-2022a3d7cb9c',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '40193a61-901c-5701-b1d2-f23a8888b1c9',
						days_of_month: null,
						curb_policy_id: 'f6624cd9-8c83-5a51-b4d9-2022a3d7cb9c',
						weeks_of_month: null,
						time_of_day_end: '17:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f66b3a58-6e67-5551-a2df-913bdaaa555a',
				name: '787177174_P2',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '4f523b0c-6351-45ae-9cd5-1aaf80e1bd6e',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f66b3a58-6e67-5551-a2df-913bdaaa555a',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: '42b20c42-ffa9-566d-9652-ed39da7112b0',
						days_of_month: null,
						curb_policy_id: 'f66b3a58-6e67-5551-a2df-913bdaaa555a',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f66c701c-ce6e-546c-9d1a-f2847cf4dc46',
				name: '525693480_P0',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '24bc5086-a837-455b-ae6b-a1c3deadc124',
						activity: 'no parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f66c701c-ce6e-546c-9d1a-f2847cf4dc46',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'a8a51963-2958-56ce-90e7-fd4410a31f72',
						days_of_month: null,
						curb_policy_id: 'f66c701c-ce6e-546c-9d1a-f2847cf4dc46',
						weeks_of_month: null,
						time_of_day_end: '7:00',
						designated_period: 'street cleaning',
						time_of_day_start: '2:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f7284169-cbbe-5fad-bb69-a7bb2895dd5f',
				name: '215909344_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: '386583a3-9084-490e-a891-84adaa2e4514',
						activity: 'no stopping',
						max_stay: null,
						purposes: null,
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'f7284169-cbbe-5fad-bb69-a7bb2895dd5f',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: null,
						time_span_id: 'bf11ce9c-0cce-5138-9d6f-ce78c42b15b9',
						days_of_month: null,
						curb_policy_id: 'f7284169-cbbe-5fad-bb69-a7bb2895dd5f',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: null,
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'f7711268-b65b-5151-972f-40224685bbf5',
				name: '2083835819_P1',
				description: null,
				published_date: 1767889393000,
				priority: 3,
				rules: [
					{
						name: null,
						rule_id: '9744608a-d6f0-4d29-a4aa-55491491d8c6',
						activity: 'parking',
						max_stay: 2,
						purposes: ["'parking'"],
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: 'hour',
						curb_policy_id: 'f7711268-b65b-5151-972f-40224685bbf5',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'sat'", "'wed'"],
						time_span_id: 'e1d01f56-c096-530e-adad-f3ee5ff34861',
						days_of_month: null,
						curb_policy_id: 'f7711268-b65b-5151-972f-40224685bbf5',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'faf1ce34-8788-57bf-afde-35e44f3eb6fa',
				name: '1325516054_P1',
				description: null,
				published_date: 1767889393000,
				priority: 2,
				rules: [
					{
						name: null,
						rule_id: 'a9b66662-5133-4c3e-a16c-21c5581d69d9',
						activity: 'parking',
						max_stay: null,
						purposes: null,
						no_return: null,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'faf1ce34-8788-57bf-afde-35e44f3eb6fa',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'sun'", "'sat'"],
						time_span_id: 'dae2c162-363f-5278-8f80-a7869a3be948',
						days_of_month: null,
						curb_policy_id: 'faf1ce34-8788-57bf-afde-35e44f3eb6fa',
						weeks_of_month: null,
						time_of_day_end: null,
						designated_period: 'holidays',
						time_of_day_start: null,
						designated_period_except: null
					}
				],
				policy_color: null
			},
			{
				curb_policy_id: 'fd2d5e69-46ee-5f2e-a20c-14fce9961214',
				name: '1309951668_P1',
				description: null,
				published_date: 1767889393000,
				priority: 1,
				rules: [
					{
						name: null,
						rule_id: '8138beb2-d048-46bc-ad20-efe6e89d07bb',
						activity: 'parking',
						max_stay: null,
						purposes: ["'permit'"],
						no_return: 0,
						description: null,
						user_classes: null,
						max_stay_unit: null,
						curb_policy_id: 'fd2d5e69-46ee-5f2e-a20c-14fce9961214',
						no_return_unit: null,
						user_classes_except: null
					}
				],
				time_spans: [
					{
						months: null,
						end_date: null,
						start_date: null,
						days_of_week: ["'mon'", "'thu'", "'fri'", "'tue'", "'wed'"],
						time_span_id: '8f1a09e6-e3f6-5450-af97-536b2cc8b411',
						days_of_month: null,
						curb_policy_id: 'fd2d5e69-46ee-5f2e-a20c-14fce9961214',
						weeks_of_month: null,
						time_of_day_end: '18:00',
						designated_period: null,
						time_of_day_start: '8:00',
						designated_period_except: null
					}
				],
				policy_color: null
			}
		]
	}
};

tempPolicyList = tempPolicyList.data.policies.reduce((acc, p) => {
	acc[p?.curb_policy_id] = p;
	return acc;
}, {});

// let field = Object.values(tempPolicyList)
// 	.map((p) => p?.time_spans)
// 	.flat()
// 	.filter(Boolean);

// field = field.map((r) => r.time_of_day_start).flat();

// field = [...new Set(field)];

// console.log(field);

const getCurbPoliciesById = async (ids) => {
	const url = `${curbApiUrl}/curbs/policies?ids=${ids.join(',')}`;
	const resultData = await fetchUrl({ url, method: 'GET' });

	if (!resultData) return [];

	return resultData.data.policies;

	// return ids.map((id) => tempPolicyList[id]).filter(Boolean);
};

export { getCurbPoliciesById };
