angular.module( 'interoApp' )

.factory( 'tasksFactory', function( $timeout, $q ) {

	var database = firebase.database();
	var userId = firebase.auth().currentUser.uid;

	function getTasks() {
		return database.ref( userId + '/tasks' ).once( 'value', function( snapshot ) {
			return snapshot.val();
		} );
	}

	function addTask( task ) {
		database.ref( userId + '/tasks' ).push( task ).then( function( result ) {
			$timeout( function() {
				Materialize.toast( 'Added!', 3000 );
			}, 500 );
		} ).catch( function( err ) {
			$timeout( function() {
				Materialize.toast( 'Something went wrong, try again later!', 3000 );
			}, 500 );
		} );
	}

	// ( function init() {
	// 	return database.ref( userId + '/tasks' ).on( 'child_changed', function( snapshot ) {
	// 		// console.log(snapshot.val());
	// 		return snapshot.val();
	// 	} );
	// } )()

	return {
		getTasks: getTasks,
		addTask: addTask,
		// bindTasks: bindTasks
	}
} );
