// INITILIZE APP
// ============================================================
var app = angular.module("routes", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './app/routes/home/homeTmpl.html',
				controller: 'homeCtrl'
			})
			// ABOUT ME STATE
			.state('aboutMe', {
				url: '/aboutMe',
				templateUrl: './app/routes/aboutMe/aboutMeTmpl.html',
				controller: 'aboutMeCtrl'
			})
			// CONTACT STATE
			.state('contact', {
				url: '/contact',
				templateUrl: './app/routes/contact/contactTmpl.html',
				controller: 'contactCtrl'
			})
			.state('contact.email', {
				url: '/email',
				templateUrl: './app/routes/email/emailTmpl.html',
				controller: 'emailCtrl'
			})

		// TEXT STATE
		.state('contact.text', {
			url: '/text',
			templateUrl: './app/routes/text/textTmpl.html',
			controller: 'textCtrl'
		});





		$urlRouterProvider.otherwise('/');
	});
