angular.module('Brussels', [])

	.controller('ModalCtrl', function($scope) {
		$scope.selectedPhoto = null;
		$scope.selectPhoto = function( photo ) {
			$scope.selectedPhoto = photo;
		}
	})
;

