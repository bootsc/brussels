
angular.module('Brussels', [])
	.controller('ModalCtrl', function() {
		console.log('modal ctrl');
	})
;


openModal = function(file) { console.log('open modal with file: '+ file); }

