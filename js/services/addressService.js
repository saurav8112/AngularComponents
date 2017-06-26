app.service('AddressService', function($q, $http) {
    var baseUrl = 'http://localhost:8080/employees';
    this.getAllAddress = function(id) {
        var deferred = $q.defer();
        $http.get(baseUrl+"/"+id+"/address").then(function(response) {
            console.log("Response", response.data);
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }

    this.addAddress  = function(id,address) {
        var deferred = $q.defer();
        $http.post(baseUrl+"/"+id+"/address", address).then(function(response) {
            console.log("addAddress", response.data);
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }
})
