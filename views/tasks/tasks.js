angular.module( 'interoApp' )
	.controller( 'tasksCtrl', function( $scope, tasksFactory, $timeout ) {
		var allTasks;
		tasksFactory.getTasks().then( function( result ) {
			allTasks = result.val();
		} );

		$timeout(function(){
			$scope.tasks = allTasks.splice(1);
			console.log($scope.tasks);
		}, 250);

	} );
