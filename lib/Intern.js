function Intern (name, empID, email, school, title = 'intern') {
    this.name = name;

    this.empID = empID;
    this.email = email;
    this.school = school;
    this.title = title;
}


module.exports = Intern;