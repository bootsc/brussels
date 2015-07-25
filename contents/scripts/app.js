angular.module('Brussels', [])

	.controller('ModalCtrl', function($scope, photos) {
		$scope.selectedPhoto = null;
		$scope.photos = photos;
		
		$scope.selectPhoto = function( i ) {
			$scope.selectedPhoto = i;
		}
		$scope.photoSelected = function() { return $scope.selectedPhoto != null; }
		$scope.clearSelected = function() { $scope.selected = null; }
		$scope.next = function() {
			$scope.selectedPhoto += 1 % photos.length;
		};
		$scope.prev = function() { 
			var len = photos.length;
			$scope.selectedPhoto = (($scope.selectedPhoto - 1 % len) + len) % len; 
		}
	})

	.constant('photos', [
        { "title": "Veins", "file": "veins.jpg", "tags": "California" },
        { "title": "Mirror", "file": "mirrorcar.jpg", "tags": "Bonneville" },
        { "title": "Dexter", "file": "dextercar.jpg" },
        { "title": "Barn", "file": "barn.jpg", "tags": "Landscape" },
        { "title": "Mile Marker 13", "file": "mile13.jpg", "tags": "Landscape" },
        { "title": "Modern Cowboy", "file": "moderncowboy.jpg", "tags": "Landscape" },
        { "title": "Storm", "file": "storm.jpg", "tags": "Bonneville" },
        { "title": "Yellowstone", "file": "YellowstonePontiac.jpg" },
        { "title": "Golden Gate", "file": "goldengatebelair.jpg", "tags": "California" },
        { "title": "City from Sausalito", "file": "cityfromsausalito.jpg", "tags": "California" },
        { "title": "Tire", "file": "tire.jpg", "tags": "Bonneville" },
        { "title": "Abandoned", "file": "utah.jpg", "tags": "Desert" },
        { "title": "Yellowstone River", "file": "yellowstoneriver.jpg", "tags": "Landscape" },
        { "title": "DeLuxe", "file": "deluxe.jpg", "tags": "Bonneville" },
        { "title": "Shot to Death", "file": "shottodeath.jpg" },
        { "title": "Dexter", "file": "dextersleeping.jpg" },
        { "title": "Golden Gate", "file": "goldengate.jpg", "tags": "California" },
        { "title": "Canyon", "file": "canyon.jpg", "tags": "Landscape" },
        { "title": "Cadillac Ranch", "file": "cadillacranch.jpg" },
        { "title": "Buffalo", "file": "buffalo.jpg" },
        { "title": "Red", "file": "red.jpg", "tags": "Bonneville" },
        { "title": "Lets Race", "file": "letsrace.jpg", "tags": "Bonneville" },
        { "title": "Arch", "file": "arch.jpg", "tags": "Landscape" },
        { "title": "Couple", "file": "couple.jpg" },
        { "title": "Multon Barn", "file": "multonbarn.jpg", "tags": "Landscape" },
        { "title": "Window Arch", "file": "windowarch.jpg", "tags": "Landscape" },
        { "title": "Falls", "file": "falls.jpg" },
        { "title": "Cowboy", "file": "cowboy.jpg" },
        { "title": "Fields", "file": "fields.jpg" },
        { "title": "Dexter", "file": "dextercabin.jpg" },
        { "title": "Fishing", "file": "fishingpole.jpg" },
        { "title": "My Family", "file": "MyFamily.jpg", "tags": "California" },
        { "title": "48", "file": "48.jpg", "tags": "Bonneville" },
        { "title": "Roys", "file": "roys.jpg" },
        { "title": "Beauty", "file": "beauty.jpg" }
			]
	)
;

