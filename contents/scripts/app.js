angular.module('Brussels', [])

	.controller('ModalCtrl', function($scope, photos) {
		$scope.photos = photos.sort(function(x,y) {return Math.random() - 0.5;});
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
        { "title": "DeLuxe", "file": "deluxe.jpg", "tags": "Bonneville" },
        { "title": "Shot to Death", "file": "shottodeath.jpg" },
        { "title": "Dexter", "file": "dextersleeping.jpg" },
        { "title": "Golden Gate", "file": "goldengate.jpg", "tags": "California" },
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
        { "title": "My Family", "file": "MyFamily.jpg", "tags": "California" },
        { "title": "48", "file": "48.jpg", "tags": "Bonneville" },
        { "title": "Roys", "file": "roys.jpg" },
        { "title": "Beauty", "file": "beauty.jpg" },
        { "title": "bonneville-1", "file": "bonneville-1.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-2.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-3.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-4.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-5.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-6.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-7.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-8.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-9.jpg", "tags": "Bonneville" },
        { "title": "bonneville-1", "file": "bonneville-10.jpg", "tags": "Bonneville" },
        { "title": "cuba", "file": "cuba-1.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-2.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-3.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-4.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-5.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-6.jpg", "tags": "Cuba, Landscape" },
        { "title": "cuba", "file": "cuba-7.jpg", "tags": "Cuba, Landscape" },
        { "title": "cuba", "file": "cuba-8.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-9.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-10.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-11.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-12.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-13.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-14.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-15.jpg", "tags": "Cuba" },
        { "title": "cuba", "file": "cuba-16.jpg", "tags": "Cuba" },
        { "title": "photo", "file": "photo-1.jpg", "tags": "Landscape" },
        { "title": "photo", "file": "photo-2.jpg", "tags": "Landscape" },
        { "title": "photo", "file": "photo-3.jpg", "tags": "Cuba, Landscape" },
        { "title": "photo", "file": "photo-4.jpg", "tags": "Bonneville, Landscape" },
        { "title": "photo", "file": "photo-5.jpg", "tags": "Bonneville" },
        { "title": "photo", "file": "photo-6.jpg", "tags": "California" },
        { "title": "photo", "file": "photo-7.jpg", "tags": "California, Landscape" },
        { "title": "photo", "file": "photo-8.jpg", "tags": "California" },
        { "title": "photo", "file": "photo-9.jpg", "tags": "Landscape" },
        { "title": "photo", "file": "photo-11.jpg", "tags": "California" },
        { "title": "photo", "file": "photo-12.jpg", "tags": "" },
        { "title": "photo", "file": "photo-14.jpg", "tags": "Landscape" },
        { "title": "photo", "file": "photo-15.jpg", "tags": "Landscape" },
        { "title": "nyc", "file": "nyc-1.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-2.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-3.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-4.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-5.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-6.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-7.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-8.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-9.jpg", "tags": "NYC" },
        { "title": "nyc", "file": "nyc-10.jpg", "tags": "NYC" },
        { "title": "The Race of the Gentalmen", "file": "trog-1.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-2.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-3.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-4.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-5.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-6.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-7.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-8.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-9.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-10.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-11.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-12.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-13.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-14.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-15.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-16.jpg", "tags": "TROG" },
        { "title": "The Race of the Gentalmen", "file": "trog-17.jpg", "tags": "TROG" }
			]
	)
;

