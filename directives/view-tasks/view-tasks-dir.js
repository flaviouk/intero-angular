angular.module( 'interoApp' )

.directive( 'viewTasks', function() {
	return {
		templateUrl: './directives/view-tasks/view-tasks-dir.html',
		scope: {
			tasks: '='
		},
		controller: function( tasksFactory ) {
			$( document ).ready( function() {
				$( '.collapsible' ).collapsible( {
					accordion: false
				} );
				$( '.modal-trigger' ).leanModal();
			} );
			function done(task){
				tasksFactory.taskDone(task).then(function (result) {
					$timeout( function() {
						Materialize.toast( 'Nice Job!', 3000 );
					}, 500 );
				})
			}
		}
	};
} );
