angular.module( 'interoApp' )

.directive( 'tasksRight', function() {
	return {
		templateUrl: './directives/tasks-right/tasks-right-dir.html',
		scope: {
			tasks: '=',
			showTasks: '='
		},
		controller: function() {
			$( document ).ready( function() {
				$( '.collapsible' ).collapsible( {
					accordion: false
				} );
				$( '.modal-trigger' ).leanModal();
			} );
		}
	};
} );
