angular.module( 'interoApp' )

.factory( 'tasksFactory', function( $timeout, authFactory, firebaseRef, $firebaseArray ) {


	var TasksUrl = authFactory.currentUserTasks;
	var tasks = $firebaseArray( authFactory.currentUserTasks );


	function addTask( task ) {
		if ( TasksUrl.push( task ) ) {
			$timeout( function() {
				Materialize.toast( 'Added!', 3000 );
			}, 500 );
		} else {
			$timeout( function() {
				Materialize.toast( 'Something went wrong, try again later!', 3000 );
			}, 500 );
		}
	}

	function taskDone( task, bolean ) {
		for ( var i = 0; i < tasks.length; i++ ) {
			if ( tasks[i].$id === task.$id ) {
				var thisTask = new Firebase(authFactory.currentUserTasks + '/' + task.$id);
				thisTask.update( {completed: bolean });
			}
		}
	}

	return {
		addTask: addTask,
		taskDone: taskDone
	}
} );
