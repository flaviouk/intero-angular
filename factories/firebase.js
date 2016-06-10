angular.module( 'interoApp' )

.factory( 'firebaseFactory', function( firebaseRef ) {

	function initFirebase( config ) {
		firebase.initializeApp( config );
	}

	initFirebase( firebaseRef.config );

	var database = firebase.database();

	function writeUserData( userId, name, email ) {
		database.ref( 'users/' + userId ).set( {
			username: name,
			email: email
		} );
	}

	firebase.auth().signInAnonymously().catch( function( error ) {
		// Handle Errors here.
		console.log(error);
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	} );
	
	writeUserData( 1, 'Flavio', 'flavio046@hotmail.com' );



	return {

	}
} );
