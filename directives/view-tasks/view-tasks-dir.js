angular.module( 'interoApp' )

.directive( 'viewTasks', function() {
	return {
		templateUrl: './directives/view-tasks/view-tasks-dir.html',
		scope: {
			tasks: '='
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
