'use strict';

// Setting up route
angular.module('questions').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('questions', {
			abstract: true,
			url: '/articles',
			template: '<ui-view/>'
		}).
		state('questions.list', {
			url: '',
			templateUrl: 'modules/questions/views/list-questions.client.view.html'
		}).
		state('questions.create', {
			url: '/create',
			templateUrl: 'modules/questions/views/create-question.client.view.html'
		}).
		state('questions.view', {
			url: '/:articleId',
			templateUrl: 'modules/questions/views/view-question.client.view.html'
		}).
		state('questions.edit', {
			url: '/:articleId/edit',
			templateUrl: 'modules/questions/views/edit-question.client.view.html'
		});
	}
]);
