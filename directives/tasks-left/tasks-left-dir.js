angular.module( 'interoApp' )

.directive( 'tasksLeft', function() {
	return {
		templateUrl: './directives/tasks-left/tasks-left-dir.html',
		scope: {
			title: '=',
			showTasks: '='
		},
		controller: function() {

		}
	};
} );
