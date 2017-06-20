/**
 * http://usejsdoc.org/
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope','$http', function($scope,$http) {
	console.log("Inside controller");
	$scope.add = function(){
		console.log("Inside controller Add");
		var n1 = $scope.add1;
		var n2 = $scope.add2;
		
		$http({
			method:"POST",
			url:'/calculate',
			data: {"op": "add","num1":n1,"num2":n2}
			}).then(function successCallback(res) {
				console.log(res);
				console.log(res);
				var r = (res.data.res).toFixed(2);
				alert("Result: "+r);
			}, function errorCallback(err) {
					console.log(err);
			});
	}
	
	$scope.divide = function(){
		console.log("Inside controller Divide");
		var n1 = $scope.divide1;
		var n2 = $scope.divide2;
		if(n2 !=0 ){
			$http({
				method:"POST",
				url:'/calculate',
				data: {"op": "divide","num1":n1,"num2":n2}
				}).then(function successCallback(res) {
					console.log(res);
					var r = (res.data.res).toFixed(2);
					alert("Result: "+r);
				}, function errorCallback(err) {
						console.log(err);
				});
		}else{
			alert("Cannot be divided by Zero");
		}	
	}
	$scope.msg = function(){
		console.log("Inside controller Msg");
		var name = $scope.name;
		$http({
			method:"POST",
			url:'/getMsg',
			data: {"name":name}
			}).then(function successCallback(res) {
				console.log(res);
				alert("Hello "+res.data.name+"! You can reach the web service!")
			}, function errorCallback(err) {
					console.log(err);
			});
	}
	$scope.getTime = function(){
		console.log("Inside controller getTime");
		$http({
			method:"GET",
			url:'/getDate'
			}).then(function successCallback(res) {
				console.log(res);
				alert("GMT : "+res.data.gmt+"\nCurrent Date: "+res.data.cur);
			}, function errorCallback(err) {
					console.log(err);
			});
	}
}]);
