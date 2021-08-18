
function Manager(name = '', email = '', office = '', empID = '') {
    this.name = name;

    this.empID = empID;
    this.email = email;
    this.office = office;
}


module.exports = Manager;