
function Manager(name , empID , email , office, title = 'manager' ) {
    this.name = name;

    this.empID = empID;
    this.email = email;
    this.office = office;
    this.title =title
}


module.exports = Manager;