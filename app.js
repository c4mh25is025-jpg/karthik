
/*
Name: Your Full Name
Department: Your Department
*/

// Create AngularJS Application

var app = angular.module("collegeApp", []);


// Parent Controller

app.controller("CollegeController", function($scope) {

    // College Name

    $scope.collegeName = "  MIT College";

});


// Child Controller

app.controller("StudentController", function($scope) {


    // Array of Sample Student Names

    $scope.students = [
        "Rahul",
        "Priya",
        "Arun"
    ];


    // Initially Hide Student Details

    $scope.showDetails = false;


    // Function to Add Student

    $scope.addStudent = function() {

        // Check Student Name

        if ($scope.studentName && $scope.studentName.trim() !== "") {

            // Add Student to Array

            $scope.students.push($scope.studentName.trim());

            // Clear Student Name Input

            $scope.studentName = "";

        }

        else {

            alert("Please enter student name!");

        }

    };

});
