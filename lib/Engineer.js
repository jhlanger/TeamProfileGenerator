

function Engineer(name , empID , email, github, title = 'engineer') {
    this.name = name;
    
    this.empID = empID;
    this.email = email;
    
    this.github = github;
    this.title=title;

    
}


module.exports = Engineer;