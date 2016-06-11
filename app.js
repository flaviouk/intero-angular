angular.module( 'interoApp', [ 'ui.router', 'firebase' ] )


.constant('firebaseRef', {
	base: new Firebase('https://intero.firebaseio.com'),
	tasks: new Firebase('https://intero.firebaseio.com/tasks')

})


.config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {


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






