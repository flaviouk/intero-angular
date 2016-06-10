angular.module( 'interoApp' )

.factory( 'authFactory', function( firebaseRef, $state ) {

	// Init Firebase
	function initFirebase( config ) {
		firebase.initializeApp( config );
	}
	initFirebase( firebaseRef.config );

	// Facebook Provider
	var provider = new firebase.auth.FacebookAuthProvider();

	// Login with facebook
	function login() {
		firebase.auth().signInWithPopup( provider ).then( function( result ) {

			Materialize.toast( 'Welcome to intero, ' + result.user.displayName + '!', 3000 );
			console.log( result, 'result' );
			$state.go('dashboard');

		} ).catch( function( error ) {
			Materialize.toast( 'Whoops, something went wrong. Try again later!', 3000 );
			console.log( error );
		} );
	}

	// Logout
	function logout() {
		firebase.auth().signOut()
			.then(function() {

				Materialize.toast( 'Bye, see you soon!', 3000 );
			$state.go('home');

			}, function(error) {

				Materialize.toast( 'Whoops, something went wrong. Try again later!', 3000 );
  				console.log(error);
			});
	}

	return {
		login: login,
		logout: logout
	}
} );
