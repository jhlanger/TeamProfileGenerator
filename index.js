

const inquirer = require('inquirer');

const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

function website() {
    this.interns = [];
    this.managers = [];
    this.engineers = [];
}

website.prototype.initializeWebsite = function () {
    inquirer 
        .prompt ({
            type: 'text',
            name: 'managername',
            message: "What is the manager's name?"
        },
        {
            type: 'text',
            name: 'managerID',
            message: "What is your manager's employee ID?"
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "What is your manager's employee email address?"
        },
        {
            type: 'text',
            name: 'managerOffice',
            message: "What is your manager's office number?"
        })
        .then(({managername, managerID, managerEmail, managerOffice}) =>{
            this.managers = new Manager(managername, managerEmail, managerOffice, managerID);
            console.log(managers);
        })
             

        new website.initializeWebsite();

}