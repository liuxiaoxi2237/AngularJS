var mycred = btoa("user:password");
var myheaders = {"Authorization": "Basic " + mycred};
app.controller('postctrl',function($scope,$http) 
	{
	  $scope.send() = function()
	    {
	        method: 'POST',
                headers: myheaders,
		Content-Type: 'applicaiton/json',
                url: 'http://192.168.47.1:8080/writeData'}).then
                (function (responses) {
                        $scope.result02 = responses.status;});
           };
     });

