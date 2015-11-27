'use strict';

var BaseBlock = require('builder/blocks/base');

/**
 * FormBlock
 */
var FormBlock = function(data, wrap, callback){
	if (!(this instanceof FormBlock)){
		return new FormBlock(data, wrap, callback);
	}

	BaseBlock.call(this, data, wrap, callback);
};

require('util').inherits(FormBlock, BaseBlock);

/**
 * Get a small identifying fragment for this block
 */
FormBlock.getFragment = function(data){
	return data ? data.form : '';
};

/**
 * FormBlock metadata
 */
FormBlock.prototype.meta = FormBlock.meta = {
	type: 'form',
	name: 'Form'
};

/**
 * FormBlock form specification
 */
FormBlock.prototype.formSpec = {
	tabs: [
		{
			objects: [
				'form'
			]
		}
	],

	fields: {
		form: {
			type: 'api_single_option',
			label: 'Title',
			autofocus: true,
			endpoint: '/forms/',
			valueField: '_id',
			labelField: 'name'
		}
	}
};

module.exports = FormBlock;
