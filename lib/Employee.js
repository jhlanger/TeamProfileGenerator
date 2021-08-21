function Employee(name = '', email = '', empID = '', random = '') {
    this.name = name;

    this.empID = empID;
    this.email = email;
    this.random = random;
}

module.exports = Employee;