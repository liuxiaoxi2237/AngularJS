var app = angular.module('myapp',[]);
app.controller('myctrl', function($scope, $http) {
	$http({
		method: 'GET',
		url: 'http://192.168.47.1:8080/hello'}).then
		(function (responses) {
			$scope.result = responses.data;});
});

