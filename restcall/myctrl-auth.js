var app = angular.module('myapp',[]);
var mycred = btoa("user:password");
var myheaders = {"Authorization": "Basic " + mycred};
app.controller('myctrl', function($scope,$http) {
	//This funciton is used to write data to restAPI
	$scope.write = function(){
	$http({
		method: 'POST',
		headers: myheaders,
		url: 'http://192.168.47.1:8080/writeData',
		data: {code:$scope.code,changerate:$scope.changerate,price:$scope.price,netrate:$scope.netrate,rank:$scope.rank}
		}).then
		(function (responses) {
			$scope.result = responses.status;});
	};

	$scope.read = function() {
        $http({
                method: 'GET',
                headers: myheaders,
                url: 'http://192.168.47.1:8080/readData',
                params: {code:$scope.querycode}
                }).then
                (function (responses) {
                        $scope.result = responses.status;
			$scope.temp = angular.fromJson(responses.data);
			$scope.code = $scope.temp.code;
			$scope.price = $scope.temp.price;
 			$scope.changerate = $scope.temp.changerate;
 			$scope.netrate = $scope.temp.netrate;
 			$scope.rank = $scope.temp.rank;
        	});
	};
});
