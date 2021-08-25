




// create the engineer cards
const generateEngineer = engineerArr => {
  return `
   
      ${engineerArr
      .map(({ name, empID, email, github }) => {
        return `
          <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Engineer</div>
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${empID}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${github}</li>
        
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
          <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Engineer</div>
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${empID}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${school}</li>
        
      </ul>
    </div>
  </div>
        `;
      })
      .join('')}
  `;
};


module.exports = templateData => {
  const { managers, engineers, interns } = templateData;
console.log(templateData);


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

  <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${title}</div>
    <div class="card-body">
      <h5 class="card-title">${managers.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${managers.email}</li>
        <li class="list-group-item">${managers.idnumber}</li>
        <li class="list-group-item">${managers.office}</li>
        
      </ul>
    </div>
  </div>

  ${generateEngineer(engineers)}
  ${generateIntern(interns)}

</body>
</html>
    `;
};

