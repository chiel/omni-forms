'use strict';

module.exports = function(manifest) {
	var singleOptionField = {
		pages: [{ 'groups': 'group1' }],
		groups: {
			group1: {
				fields: [ 'opt_label', 'opt_value' ]
			}
		},
		fields: {
			opt_label: {
				placeholder: 'Label'
			},
			opt_value: {
				placeholder: 'Value'
			}
		}
	};

	var optionsForm = {
		objects: [[ 'opt_label', 'opt_value' ]],
		fields: {
			opt_label: {
				placeholder: 'Label'
			},
			opt_value: {
				placeholder: 'Value'
			}
		}
	};

	var fieldsForm = {
		objects: [
			[ 'label', 'name', 'placeholder' ],
			'type'
		],

		triggers: {
			single_option_group: 'options'
		},

		fields: {
			label: {
				label: 'Label',
				placeholder: 'Label'
			},
			name: {
				label: 'Name',
				placeholder: 'Name'
			},
			placeholder: {
				label: 'Placeholder',
				placeholder: 'Placeholder'
			},
			type: {
				label: 'Field type',
				type: 'single_option',
				placeholder: 'Field type',
				options: [
					{ label: 'Text field', value: 'text' },
					{ label: 'Textarea', value: 'textarea' },
					{ label: 'Dropdown', value: 'single_option' }
				],
				triggers: [
					{ value: 'single_option', object: 'single_option_group' }
				]
			},
			options: {
				type: 'list',
				label: 'Options',
				field: {
					placeholder: 'Value'
				}
			}
		}
	};

	manifest.forms = {
		create: {
			tabs: [{
				objects: [[ 'name', 'slug' ], 'fields' ]
			}],
			fields: {
				name: {
					label: 'Name',
					placeholder: 'e.g. Contact'
				},
				slug: {
					type: 'slug',
					label: 'Slug',
					placeholder: 'e.g. contact',
					subscribe: [ 'name' ]
				},
				fields: {
					type: 'form_list',
					label: 'Fields',
					form: fieldsForm
				}
			}
		}
	};

	return manifest;
};
