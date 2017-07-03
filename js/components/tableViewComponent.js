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
            return key.replace('_', " ").replace('.', ' ');
        }

        this.range = {
            start: 1,
            end: 10,
            viewPerPage: 10
        }

        this.goToPage = function(page) {
            page = Math.ceil(page);
            this.range.start = (this.range.viewPerPage * page) - this.range.viewPerPage;
            this.range.end = (this.range.viewPerPage * page);
        }

        this.performAction = function(action, item) {
            if (this.callback) {
                this.callback({ data: { action: action, item: item } });
            } else {
                console.log('unhandled action')
            }
        }
    }
});
