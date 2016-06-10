angular.module( 'interoApp' )

.factory( 'authFactory', function() {

	function initOAuth() {
		OAuth.initialize( 'fTZkJremo7KTNuKHVSitO7zbpls' );
	}

	initOAuth();

	function login() {
		OAuth.popup( 'facebook', { cache: true } )
			.done( function( result ) {
				console.log( result );
				result.me()
					.done( function( response ) {
						console.log( response );
						Materialize.toast('I am a toast!', 4000);
					} )
					.fail( function( err ) {
						console.log( err );
						//handle error with err
					} );
			} )
			.fail( function( err ) {
				console.log( err );
				//handle error with err
			} );
	}

	function logout() {
		OAuth.clearCache();
		console.log('logged out');
	}



	return {
		login: login,
		logout: logout
	}
} );
