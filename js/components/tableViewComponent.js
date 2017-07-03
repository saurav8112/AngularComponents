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
        this.currentPage = 1
        this.range = {
            start: 1,
            end: 10,
            viewPerPage: 10
        }
        this.viewVal = this.range.viewPerPage
        this.viewPerPageChanged = function() {
            this.range.viewPerPage =  this.viewVal;
            this.goToPage(1);
        }

        this.goToPage = function(page) {
            page = Math.ceil(page);
            this.range.start = (this.range.viewPerPage * page) - this.range.viewPerPage;
            this.range.end = (this.range.viewPerPage * page);
            this.currentPage = page
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
