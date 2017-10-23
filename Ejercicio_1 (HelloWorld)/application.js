var app = angular.module('MyApp', ['firebase']);

app.controller('MyController', function($scope, $window, $firebaseArray, $firebaseAuth, 
										$firebaseObject, $firebaseStorage){
	
	var dbReference  = firebase.database().ref();

	$scope.dataArray = $firebaseArray(dbReference);
	$scope.model;

	$scope.add = function () {
		$scope.dataArray.$add($scope.model);
	}

	$scope.clear = function () {
		$scope.model = null;
	}

	$scope.delete = function (id) {
		console.log(id)
		$scope.dataArray.$remove($scope.dataArray[id]);
	}


	$scope.getKey =  function (id) {
		var key  =  $scope.dataArray.$keyAt(id)
		console.log(key)
	}


	$scope.getIndex =  function (id) {

		var index  = $scope.dataArray.$indexFor(id)
		console.log(index)
	}

	$scope.stopFireBase = function () {
		$scope.dataArray.$destroy();
	}
	$scope.startFireBase = function () {
		$scope.dataArray = $firebaseArray(dbReference);
	}

	$scope.select = function(key, index) {
		$scope.model = key;
		$scope.index = index
	}

	$scope.index;
	$scope.isUpdate;
	$scope.update = function () {
		$scope.dataArray.$save($scope.index)
		.then( function success(ref) {
			ref.key === $scope.dataArray[$scope.index].$id;			
		})
	}

});
