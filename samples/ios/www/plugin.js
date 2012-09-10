
var plugin = {
    get: function() {
        window.plugins.secureDeviceIdentifier.get({
            domain: 'com.example.myapp',
            key: 'difficult-to-guess-key'
        }, function() {
            var args = Array.prototype.slice.call(arguments, 0);
            console.log("secureDeviceIdentifier.get:" + JSON.stringify(args));
        });
    }
};

