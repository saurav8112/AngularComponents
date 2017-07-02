function homeController($scope, dummyService) {
    $scope.labels = {
    	hide: ['id', 'ip_address']
    }
    $scope.tableData = dummyService.dummyDataGenerator(20);
    $scope.actionButtons = [{
    	actionName: 'Delete',
    	class: 'fa-trash-o'
    },{
    	actionName: 'Add',
    	class: 'fa-plus'
    },{
    	actionName: 'Update',
    	class: 'fa-pencil'
    }]

    $scope.tableActionHandler = function (data) {
    	switch (data.action) {
    		case 'Delete' : console.log('Delete :', data.item); break;
    		case 'Add' : console.log('Add :', data.item); break;
    		case 'Update' : console.log('Update :', data.item); break;
    	}

    }
}
angular.module('SNS').controller('homeCtrl', homeController);
