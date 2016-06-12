angular.module( 'interoApp' )

.directive( 'addTask', function() {
	return {
		templateUrl: './directives/add-task/add-task-dir.html',
		controller: function( $scope, tasksFactory, $state ) {
			$( '.datepicker' ).pickadate( {
				selectMonths: true,
				selectYears: 12
			} );

			$scope.addTask = function() {
				// var dateFormated = '';
				// dateFormated += $( '#date' ).val() + ' ';
				// dateFormated += $( '#hour' ).val();
				

				var date = $('#date').val();
				var hour = $('#hour').val();
				// function(date, hour){
					
				// }
				console.log(date);
				console.log(hour);

				// if(!$scope.add.priority){
				// 	$scope.add.priority = 1;
				// }

				// tasksFactory.addTask( {
				// 	name: $scope.add.name,
				// 	description: $scope.add.description,
				// 	due: dateFormated,
				// 	priority: $scope.add.priority,
				// 	completed: false,
				// 	created: new Date()
				// } )
				// $scope.showTasks = true;
				// $state.go( 'tasks' );
			}

		}
	};
} );
// function getFormattedDate() {
				// 	var d = new Date();

				// 	function month() {
				// 		var months = [ 'January', 'February ', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
				// 		for ( var i = 0; i < months.length; i++ ) {
				// 			if ( i === ( d.getMonth() ) ) {
				// 				return months[ i ];
				// 			}
				// 		}
				// 	}
				// 	var month = month();
				// 	d = ( '0' + d.getDate() ).slice( -2 ) +
				// 		" " +
				// 		month +
				// 		", " +
				// 		d.getFullYear() +
				// 		" " +
				// 		( '0' + d.getHours() ).slice( -2 ) +
				// 		":" +
				// 		( '0' + d.getMinutes() ).slice( -2 );

				// 	return d;
				// }