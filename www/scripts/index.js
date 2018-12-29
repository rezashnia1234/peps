(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var inAppBrowserRef;
    function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
        if (navigator.connection.type) {
            var networkStatus = navigator.connection.type;
            if (networkStatus === 'Connection.UNKNOWN' || networkStatus === 'Connection.NONE') {
                myNotif();
            } else {
                loadUrl('http://mos.parseps.com');
            }
        }
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

})();