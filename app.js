angular.module( 'interoApp', [ 'ui.router' ] )

.config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	// Init Firebase
	( function() {
		firebase.initializeApp( {
			apiKey: "AIzaSyB7zDsdPV-mnp7lOGLnTH1VAG9OaEN0C6U",
			authDomain: "project-7490252363998286033.firebaseapp.com",
			databaseURL: "https://project-7490252363998286033.firebaseio.com",
			storageBucket: "project-7490252363998286033.appspot.com",
		} );
	} )()

	$urlRouterProvider.otherwise( '/' );

	$stateProvider
		.state( 'home', {
			url: '/',
			templateUrl: './views/home/home.html',
			controller: 'homeCtrl'
		} )
		.state( 'dashboard', {
			url: '/dashboard',
			templateUrl: './views/dashboard/dashboard.html',
			controller: 'dashboardCtrl'
		} )
		.state( 'tasks', {
			url: '/tasks',
			templateUrl: './views/tasks/tasks.html',
			controller: 'tasksCtrl'
		} )

} ] );



