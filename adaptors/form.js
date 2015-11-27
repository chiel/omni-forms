'use strict';

var Promise = require('promise');

module.exports = function(mod){
	return function(data){
		return new Promise(function(resolve, reject){
			mod.methods.findOne({ _id: data.form }).then(
				function(item){

					var fields = [];
					var fieldDefs = {};
					item.fields.forEach(function(field){
						fields.push(field.name);
						fieldDefs[field.name] = field;
						delete field.name;
					});

					resolve({
						objects: fields,
						fields: fieldDefs
					});
				},
				function(err){
					console.error(err);
					resolve(data);
				}
			);
		});
	};
};
