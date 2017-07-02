angular.module('SNS').component('tableView', {
    bindings: {
        tableData: '<',
        labels: '<',
        actionButtons: '<',
        callback: '&'
    },
    templateUrl: 'templates/components/tableView.html',
    controller: function($location) {
        this.createNameKey = function(key) {
          return  key.replace('_', " ").replace('.', ' ');
        }


        this.performAction = function (action, item) {
            if(this.callback) {
                this.callback({data: {action: action, item: item}});
            } else {
                console.log('unhandled action')
            }
        }
    }
});
