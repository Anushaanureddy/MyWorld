var exec = require('cordova/exec');

exports.happy = function(arg0, success, error) {
    exec(success, error, 'MyWorld', 'happy', [arg0]);
};