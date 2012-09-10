//
//  SecureDeviceIdentifier.js
//
// Created by Olivier Louvignes on 2012-05-31.
//
// Copyright 2012 Olivier Louvignes. All rights reserved.
// MIT Licensed

(function(cordova) {

	function SecureDeviceIdentifier() {}

	SecureDeviceIdentifier.prototype.get = function(options, callback) {
		options || (options = {});
		var scope = options.scope || null;

		var config = {
			domain: options.domain || 'com.example.myapp',
			key: options.key || 'difficult-to-guess-key'
		};

		var _callback = function() {
			if(typeof callback == 'function') callback.apply(scope, arguments);
		};

		return cordova.exec(_callback, _callback, 'SecureDeviceIdentifier', 'get', [config]);
	};

	cordova.addConstructor(function() {
		if(!window.plugins) window.plugins = {};
		window.plugins.secureDeviceIdentifier = new SecureDeviceIdentifier();
	});

})(window.cordova || window.Cordova);
