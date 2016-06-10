angular.module( 'interoApp' )

.factory( 'tasksFactory', function() {

	var database = firebase.database();

	var userId = firebase.auth().currentUser.uid;

	database.ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
});

	function getTasks(id) {
		
	}


	return {
		getMyTasks: getTasks
	}
} );
