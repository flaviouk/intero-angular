angular.module( 'interoApp' )

.directive( 'viewTasks', function(tasksFactory) {
	return {
		templateUrl: './directives/view-tasks/view-tasks-dir.html',
		link: function (scope, elem, attr) {
			scope.done = function (task, bolean){
				tasksFactory.taskDone(task, bolean);
			}
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
