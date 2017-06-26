app.service('modelService', function() {
    this.employeeModel = {
        "id": 0,
        "first_name": '',
        "last_name": '',
        "email": '',
        "gender": '',
        "contact": '',
        "password": '',
        "role": "Developer"
    }
    this.AddressModel = {
        "id": 0,
        "address_line1": '',
        "address_line2": '',
        "city": '',
        "state": '',
        "country": '',
        "zip_code": '',
        "employee_id": 0
    }
})
