(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var inAppBrowserRef;
    function onDeviceReady() {
        if (navigator.connection.type) {
            var networkStatus = navigator.connection.type;
            if (networkStatus === 'Connection.UNKNOWN' || networkStatus === 'Connection.NONE') {
                myNotif();
            } else {
                navigator.splashscreen.show();
                setTimeout(function () {
                    window.open = cordova.InAppBrowser.open;
                    loadUrl('http://mos.parseps.com');
                }, 5000);
            }
        }
    }

    function fuckyou() {
        navigator.splashscreen.show();
        navigator.notification.alert('No network available! Please connect to a network and continue again.', fakeFunc, 'Network', 'Ok');
    }

    function fakeFunc() {
        //
    }

    function myNotif() {
        navigator.notification.alert('No network available! Please connect to a network and continue again.', fakeFunc, 'Network', 'Ok');
    }

    function checkNetwork() {
        if (navigator.connection.type) {
            var networkStatus = navigator.connection.type;
            if (networkStatus === 'Connection.UNKNOWN' || networkStatus === 'Connection.NONE') {
                myNotif();
            }
        }

        if (window.localStorage.getItem('uniqueId') === null) {
            window.localStorage.setItem('uniqueId', device.uuid);
        }
    }

    function loadUrl(url) {
        var target = "_blank";
        var options = "location=no,hidden=no";
        inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
        inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
        inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
        inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
    }

    function loadStartCallBack() {
        //
    }

    function loadStopCallBack() {
        //
    }

    function loadErrorCallBack() {
        //
    }

    setTimeout(function () {
        checkNetwork();
    }, 3000);

    setTimeout(function () {
        navigator.splashscreen.hide();
    }, 5000);

})();