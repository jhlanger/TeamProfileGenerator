

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

interns = [];
managers = [];
engineers = [];
employees = [];


const managerData = function () {
    return inquirer
        .prompt([
            {

                type: 'text',
                name: 'name',
                message: "What is the name of the Manager?"
            },
            {
                type: 'text',
                name: 'empID',
                message: "What is your Managers's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your Manager's email address?"
            },
            {
                type: 'text',
                name: 'office',
                message: "What is your Manager's office number?"
            }


        ]).then(managerData => {
            
            managers.push(new Manager(managerData.name, managerData.empID, managerData.email, managerData.office));
            
        })

}

const buildTeam = function () {
    return inquirer
        .prompt([

            {
                type: 'rawlist',
                name: 'title',
                message: 'Would you like to add another employee?',
                choices: ['Engineer', 'Intern', 'I do not want to add another employee']
            }
        ])
        .then(buildTeam => {
            if (buildTeam.title === 'Engineer') {
                console.log(`
                =================
                Add a New Engineer
                =================
                `);
                newEngineer();
            } else if (buildTeam.title === 'Intern') {
                console.log(`
                =================
                Add a New Intern
                =================
                `);
                newIntern();
            } else if (buildTeam.title === 'I do not want to add another employee') {
                console.log(managers, engineers, interns);

                //employees.push(managers, engineers, interns);
               
                return staff;
            }
        })
}

const newEngineer = function () {
    return inquirer
        .prompt([
            {

                type: 'text',
                name: 'name',
                message: "What is the name of the Engineer?"
            },
            {
                type: 'text',
                name: 'empID',
                message: "What is your Engineer's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your Engineer's email address?"
            },
            {
                type: 'text',
                name: 'github',
                message: "What is your Engineer's github username?"
            }
        ])
        .then(newEngineer => {
            engineers.push(new Engineer(newEngineer.name, newEngineer.empID, newEngineer.email, newEngineer.github));
            
            return buildTeam();
        })
}
const newIntern = function () {
    return inquirer
        .prompt([
            {

                type: 'text',
                name: 'name',
                message: "What is the name of the Intern?"
            },
            {
                type: 'text',
                name: 'empID',
                message: "What is your Intern's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your Intern's email address?"
            },
            {
                type: 'text',
                name: 'university',
                message: "What is your Intern's university?"
            }
        ])
        .then(newIntern => {
            interns.push(new Intern(newIntern.name, newIntern.empID, newIntern.email, newIntern.university));
            return buildTeam();
        })
}




managerData()
    .then(buildTeam)
    .then(managers, engineers, interns => {

        const pageHTML = generatePage(managers, engineers, interns);

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw err;
          
            console.log('Portfolio complete! Check out index.html to see the output!');
          });
        //return generatePage(managers,engineers, interns)
    })


