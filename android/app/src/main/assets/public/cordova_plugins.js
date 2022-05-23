
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
          "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
          "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
          "facebookConnectPlugin"
        ]
        },
      {
          "id": "cordova-plugin-lottie-splashscreen.LottieSplashScreen",
          "file": "plugins/cordova-plugin-lottie-splashscreen/dist/www/lottie-splashscreen.js",
          "pluginId": "cordova-plugin-lottie-splashscreen",
        "clobbers": [
          "lottie.splashscreen"
        ]
        },
      {
          "id": "cordova-plugin-app-preferences.apppreferences",
          "file": "plugins/cordova-plugin-app-preferences/www/apppreferences.js",
          "pluginId": "cordova-plugin-app-preferences",
        "clobbers": [
          "plugins.appPreferences"
        ]
        },
      {
          "id": "cordova-plugin-googleplus.GooglePlus",
          "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
          "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
          "window.plugins.googleplus"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "phonegap-plugin-barcodescanner": "8.1.0",
      "cordova-plugin-app-preferences": "0.99.3",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-facebook4": "6.4.0",
      "cordova-plugin-googleplus": "8.5.",
      "cordova-plugin-lottie-splashscreen": "0.9.1",
      "cordova-plugin-statusbar": "2.4.2",
      "cordova-plugin-whitelist": "1.3.3"
    };
    // BOTTOM OF METADATA
    });
    