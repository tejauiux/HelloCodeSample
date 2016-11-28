
angular.module('HelloApp', [])
     .controller("HelloCtrl", function($scope){
		 $scope.reversemsg;
	 })
    .filter('reverseIt', [function() {
        return function(string) {
            return string.split('').reverse().join('');
        };
    }]);
