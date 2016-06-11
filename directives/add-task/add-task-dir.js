angular.module( 'interoApp' )

.directive( 'addTask', function() {
	return {
		templateUrl: './directives/add-task/add-task-dir.html',
		scope: {
			tasks: '='
		},
		controller: function() {
			
		}
	};
} );
