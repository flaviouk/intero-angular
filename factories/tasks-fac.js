angular.module( 'interoApp' )

.factory( 'tasksFactory', function() {

	var database = firebase.database();
	var userId = firebase.auth().currentUser.uid;

	function getTasks() {
		return database.ref( userId + '/tasks' ).once( 'value');
	}


	return {
		getTasks: getTasks
	}
} );
