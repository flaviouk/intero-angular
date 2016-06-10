angular.module( 'interoApp' )

.factory( 'authFactory', function( $state, $timeout) {


	// Facebook Provider
	var provider = new firebase.auth.FacebookAuthProvider();

	// Login with facebook
	function login() {
		firebase.auth().signInWithPopup( provider ).then( function( result ) {
			$timeout( function() {
				Materialize.toast( 'Welcome to intero, ' + result.user.displayName + '!', 3000 );
			}, 500 );
			$state.go( 'dashboard' );

		} ).catch( function( error ) {
			$timeout( function() {
				Materialize.toast( 'Whoops, something went wrong. Try again later!', 3000 );
			}, 500 );
			console.log( error );
		} );
	}

	// Logout
	function logout() {
		firebase.auth().signOut()
			.then( function() {
				$timeout( function() {
					Materialize.toast( 'Bye, see you soon!', 3000 );
				}, 500 );
				$state.go( 'home' );

			}, function( error ) {
				$timeout( function() {
					Materialize.toast( 'Whoops, something went wrong. Try again later!', 3000 );
				}, 500 );
				console.log( error );
			} );
	}

	return {
		login: login,
		logout: logout
	}
} );
