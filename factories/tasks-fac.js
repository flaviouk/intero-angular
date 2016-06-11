angular.module( 'interoApp' )

.factory( 'tasksFactory', function( $timeout ) {

	var database = firebase.database();
	var userId = firebase.auth().currentUser.uid;

	function getTasks() {
		return database.ref( userId + '/tasks' ).once( 'value' );
	}

	function addTask( task ) {
		database.ref( userId + '/tasks' ).push( task ).then( function( result ) {
			$timeout( function() {
				Materialize.toast( 'Added!', 3000 );
			}, 500 );
		} ).catch(function(err){
			$timeout( function() {
				Materialize.toast( 'Something went wrong, try again later!', 3000 );
			}, 500 );
		});
	}


	return {
		getTasks: getTasks,
		addTask: addTask
	}
} );



// angular.module( 'interoApp' )

// .factory( 'tasksFactory', function( $timeout ) {

// 	var database = firebase.database();
// 	var userId = firebase.auth().currentUser.uid;

// 	function getTasks() {
// 		return database.ref( userId + '/tasks' ).once( 'value' );
// 	}

	

// 	function getAllTasks(){
// 		var allTasks;
// 		getTasks().then( function( result ) {
// 			allTasks = result.val();
// 		} );

// 		function checkTasks( counter ) {
// 			if ( !allTasks ) {
// 				if ( !counter ) { counter = 500 }
// 				$timeout( function() {
// 					checkTasks( counter * 2 );
// 				}, counter )
// 			} else {
// 				return allTasks;
// 			}
// 		}
// 		return checkTasks();
// 	}

// 	var tasks = getAllTasks();

// 	console.log(tasks);

// 	function addTask( task ) {
// 		database.ref( userId + '/tasks' ).push( task ).then( function( result ) {
// 			$timeout( function() {
// 				Materialize.toast( 'Added!', 3000 );
// 			}, 500 );
// 		} ).catch(function(err){
// 			$timeout( function() {
// 				Materialize.toast( 'Something went wrong, try again later!', 3000 );
// 			}, 500 );
// 		});
// 	}

	

// 	// function done(task) {
// 	// 	var allTasks;
// 	// 	getTasks().then( function(result){
// 	// 		allTasks = result.val();
// 	// 	})
// 	// 	var tasks = checkTasks();

// 	// 	for( var i = 0; i < tasks.length; i++){
// 	// 		if(tasks[i].created === task.created){
// 	// 			database.ref( userId + '/tasks' +)
// 	// 		}
// 	// 	}

// 	// }

// 	return {
// 		getTasks: getTasks,
// 		addTask: addTask,
// 		getAllTasks: getAllTasks,
// 		// done: done,
// 		// checkTasks: checkTasks
// 	}
// } );
