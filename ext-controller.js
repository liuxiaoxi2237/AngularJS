var app = angular.module('myapp',[])
app.controller('ext-controller', function($scope, $location, $http) {
	$scope.ip01 = "hello world";
	$scope.myurl = $location.absUrl();
	$http.get("spage.html").then(function (response) {
		$scope.mymessage = response.data;});
	$http({
		method: 'GET',
		url: 'http://192.168.47.138:8000/fpage.html'}).then
		(function (responses) {
			$scope.fpage = responses.status;});
						

		
	});

