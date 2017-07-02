angular.module('SNS').service('dummyService', function() {

    function randomStr(m) {
        var m = m || 9;
        s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < m; i++) { s += r.charAt(Math.floor(Math.random() * r.length)); }
        return s;
    };

    var emp = []
    this.dummyDataGenerator = function(limit) {
        for (var i = 0; i < limit; i++) {
            emp.push({
                "id": Math.floor(Math.random() * 10000),
                "first_name": randomStr(6),
                "last_name": randomStr(6),
                "email": randomStr(10),
                "gender": randomStr(20),
                "ip_address": Math.floor(Math.random() * 10000000)
            })
        }
        console.log(emp)
        return emp
    }
});
