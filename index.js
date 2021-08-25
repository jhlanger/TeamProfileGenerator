

const inquirer = require('inquirer');
const fs = require('fs');

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
               console.log(managers[0].name);
                return createFile(managers, engineers, interns);
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
    .then(buildTeam);

    const createFile = function(managers, engineers, interns) {
        console.log(managers, engineers, interns);
        fs.writeFile('./dist/index.html', fileCreate(managers, engineers, interns), err => {
            if (err) throw err;
          
            console.log('Portfolio complete! Check out index.html to see the output!');
          });
    }

    


const generateEngineer = engineerArr => {
    return `
     
        ${engineerArr
        .map(({ name, empID, email, github }) => {
          return `
            <div class="card bg-light mb-3 mx-3" style="max-width: 18rem;">
      <div class="card-header">Engineer</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${empID}</li>
          <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item"><a href="https://www.github.com/${github}" target="_blank">Github</a></li>
          
        </ul>
      </div>
    </div>
          `;
        })
        .join('')}
    `;
  };
  
  // create the Intern cards
  const generateIntern = InternArr => {
    return `
     
        ${InternArr
        .map(({ name, empID, email, school }) => {
          return `
            <div class="card bg-light mb-3 mx-3" style="max-width: 18rem;">
      <div class="card-header">Engineer</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${empID}</li>
          <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">${school}</li>
          
        </ul>
      </div>
    </div>
          `;
        })
        .join('')}
    `;
  };

  const generateManager = managerArr => {
    return `
     
        ${managerArr
        .map(({ name, empID, email, office }) => {
          return `
            <div class="card bg-light mb-3 mx-3" style="max-width: 18rem;">
      <div class="card-header">Manager</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${empID}</li>
          <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">${office}</li>
          
        </ul>
      </div>
    </div>
          `;
        })
        .join('')}
    `;
  };



  const fileCreate = function( managers, engineers, interns) {

    return `
    <!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Portfolio Demo</title>
</head>

<body>

  <h1> My Team </h1>
  <main style = "display:flex"> 
  ${generateManager(managers)}

  ${generateEngineer(engineers)}
  ${generateIntern(interns)}
</main>
</body>
</html>
    `;

  
  }
