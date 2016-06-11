angular.module( 'interoApp' )

.factory( 'tasksFactory', function( $timeout, authFactory, $firebaseArray ) {


	Tasks = authFactory.currentUserTasks;

	function addTask( task ) {
		if ( Tasks.push( task ) ) {
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
		for ( var i = 0; i < Tasks.length; i++ ) {
			if ( Tasks.created === task.created ) {
				var thisTask = authFactory.currentUserTasks + '/' + task.$id;
				console.log(task);
				console.log(task.$id);
				// Tasks.update( {completed: bolean });
			}
		}
	}



	return {
		addTask: addTask,
		taskDone: taskDone
	}
} );
