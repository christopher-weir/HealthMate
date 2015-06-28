'use strict';

// Setting up route
angular.module('deficiencies').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('deficiencies', {
			abstract: true,
			url: '/articles',
			template: '<ui-view/>'
		}).
		state('deficiencies.list', {
			url: '',
			templateUrl: 'modules/deficiencies/views/list-deficiencies.client.view.html'
		}).
		state('deficiencies.create', {
			url: '/create',
			templateUrl: 'modules/deficiencies/views/create-deficiencie.client.view.html'
		}).
		state('deficiencies.view', {
			url: '/:articleId',
			templateUrl: 'modules/deficiencies/views/view-deficiencie.client.view.html'
		}).
		state('deficiencies.edit', {
			url: '/:articleId/edit',
			templateUrl: 'modules/deficiencies/views/edit-deficiencie.client.view.html'
		});
	}
]);
