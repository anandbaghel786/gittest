(function () {
    var app = angular.module("app", ['ui.router']);

    // app.config(function ($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/home');
    //     $stateProvider
    //         .state('home', {
    //             url: '/home',
    //             templateUrl: './home.html'
    //         })

    //         .state('about', {
    //             url: '/about',
    //             templateUrl: './about.html'
    //         });
    // });


    app.controller("myctrl", ["$scope", myctrl]);
    function myctrl($scope) {
        var vm = this;

        $scope.submit = function (formname) {
            $scope.formname = document.getElementById("abc")
            console.log($scope.formname.error.$invalid);
        }

        $scope.namess = "rohan"
        var quill = new Quill('#editor', {
            theme: 'snow'
        });
        $scope.abc = function () {
            console.log(quill.getContents());
        }
        $scope.name = "Mohan";
        var s = " ";
        var k = 1;
        $scope.ram = {
            name: "Ram Singh",
            age: 25,
            salary: 25000
        }
        $scope.stud = [

        ]
    }
})();

// 1. Dashboard total revenue card updated.
// 2. Implemented permission for master permission in admin portal
// 3. Updated UI for master permission in admin portal.
// 4. Updated customer list for Nuli admin portal.
// 5. Updated vendorlist for Nuli admin portal.
// 6. Showing total referral earning vendor in customer details.
// 7. Showing total referral earning customer in customer details.
// 8. Showing total referral earning driver in customer details.

// 12345
// 4321
// 123
// 21
// 1