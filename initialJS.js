var app = angular.module('myModule', []);

app.controller('myController', function($scope){

$scope.masterList = {taskName: null};
//prepopulating list
$scope.toDoItems = [{taskName: 'Finish'},{taskName: 'Add function'},{taskName: 'Cross Off'},{taskName: 'Restart'}];
            //now that I'm adding it as an object, I need to pre-populate using those names
//from ng book for submission
$scope.submit = function() {
    if ($scope.masterList.taskName) {
      $scope.toDoItems.push({taskName:$scope.masterList.taskName});
      $scope.masterList = '';
        //will clear out items
    }
  };
//turn red when clicked
$scope.selected = 0;

$scope.select = function (index){
  $scope.selected = index;
  

};
  //end of myModule
  //go back to adding to an object
  //
});
