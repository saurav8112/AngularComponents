app.service('EmployeeService', function($q, $http) {
    var baseUrl = 'http://localhost:8080/employees';
    this.getAllEmployee = function() {
        var deferred = $q.defer();
        $http.get(baseUrl).then(function(response) {
            console.log("Response", response.data);
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }

    this.addEmployee = function(emp) {
        var deferred = $q.defer();
        $http.post(baseUrl, emp).then(function(response) {
            console.log("addEmployee", response.data);
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }
})
