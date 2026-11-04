var app = angular.module('myApp', []);

//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "abc college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "karthik";
        $scope.department = "Information Science";
        $scope.semester = 3;

        //aray
        $scope.students =[
            "AYUSH KUMAR K S",
            "AMRUTHA H S",
            "AKSHAY U SHET",
        
        ];
    }
);