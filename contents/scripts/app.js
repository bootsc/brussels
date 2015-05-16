angular.module('Brussels', [])

	.controller('ModalCtrl', function($scope, photos) {
		$scope.selectedPhoto = null;
		$scope.photos = photos;
		
		$scope.selectPhoto = function( i ) {
			$scope.selectedPhoto = i;
		}
		$scope.next = function() {
			$scope.selectedPhoto += 1 % photos.length;
		};
		$scope.prev = function() { 
			var len = photos.length;
			$scope.selectedPhoto = (($scope.selectedPhoto - 1 % len) + len) % len; 
		}
	})

	.constant('photos', [
        { "title": "Veins", "file": "veins.jpg" },
        { "title": "Mirror", "file": "mirrorcar.jpg" },
        { "title": "Dexter", "file": "dextercar.jpg" },
        { "title": "Barn", "file": "barn.jpg" },
        { "title": "Mile Marker 13", "file": "mile13.jpg" },
        { "title": "Modern Cowboy", "file": "moderncowboy.jpg" },
        { "title": "Storm", "file": "storm.jpg" },
        { "title": "Yellowstone", "file": "YellowstonePontiac.jpg" },
        { "title": "Golden Gate", "file": "goldengatebelair.jpg" },
        { "title": "City from Sausalito", "file": "cityfromsausalito.jpg" },
        { "title": "Tire", "file": "tire.jpg" },
        { "title": "Abandoned", "file": "utah.jpg" },
        { "title": "Yellowstone River", "file": "yellowstoneriver.jpg" },
        { "title": "DeLuxe", "file": "deluxe.jpg" },
        { "title": "Shot to Death", "file": "shottodeath.jpg" },
        { "title": "Dexter", "file": "dextersleeping.jpg" },
        { "title": "Golden Gate", "file": "goldengate.jpg" },
        { "title": "Canyon", "file": "canyon.jpg" },
        { "title": "Cadillac Ranch", "file": "cadillacranch.jpg" },
        { "title": "Buffalo", "file": "buffalo.jpg" },
        { "title": "Red", "file": "red.jpg" },
        { "title": "Lets Race", "file": "letsrace.jpg" },
        { "title": "Arch", "file": "arch.jpg" },
        { "title": "Couple", "file": "couple.jpg" },
        { "title": "Multon Barn", "file": "multonbarn.jpg" },
        { "title": "Window Arch", "file": "windowarch.jpg" },
        { "title": "Falls", "file": "falls.jpg" },
        { "title": "Cowboy", "file": "cowboy.jpg" },
        { "title": "Fields", "file": "fields.jpg" },
        { "title": "Dexter", "file": "dextercabin.jpg" },
        { "title": "Fishing", "file": "fishingpole.jpg" },
        { "title": "My Family", "file": "MyFamily.jpg" },
        { "title": "48", "file": "48.jpg" },
        { "title": "Roys", "file": "roys.jpg" },
        { "title": "Beauty", "file": "beauty.jpg" }
			]
	)
;

