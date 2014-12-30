angular.module('starter.controllers', [])

.controller('StartCtrl', function($scope, $log, $location) {

        $scope.pasteAddress = function() {
            alert("PASTE"+$location.path());
            $location.path("/tab/startnew");
            alert("PASTE2"+$location.path());
        };

        $scope.scanAddress = function() {

            try {

                var scanner = cordova.require("cordova/plugin/BarcodeScanner");
                scanner.scan( function (result) {

                    alert("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);

                    $log.info("Scanner result: \n" +
                        "text: " + result.text + "\n" +
                        "format: " + result.format + "\n" +
                        "cancelled: " + result.cancelled + "\n");

                    document.getElementById("info").innerHTML = result.text;
                    $log.info(result);
                    /*
                     if (args.format == "QR_CODE") {
                     window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
                     }
                     */

                }, function (error) {
                    console.log("Scanning failed: ", error);
                } );

            } catch (e) {
                alert("Exception: "+e);
                console.dir(e);
            }

        }

})

.controller('StartNewCtrl', function($scope, $log, $location) {
    alert("StartNew");
})

.controller('BookmarksCtrl', function($scope) {

        // set the rate and max variables
        $scope.rate = 2;
        $scope.max = 5;

        $scope.delete = function() {
            alert("TODO: DELETE");
        };

})

.controller('SettingsCtrl', function($scope) {

        $scope.amount = 1000;
        $scope.notificationActive = true;

});
