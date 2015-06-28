'use strict';

// Configuring the Articles module
angular.module('questions').run(['Menus',
	function(Menus) {
		// Add the articles dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Articles',
			state: 'articles',
			type: 'dropdown'
		});
	}
]);
