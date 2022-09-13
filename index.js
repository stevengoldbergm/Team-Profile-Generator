// TODO:
    // Set up Inquirer questionnaires (DONE)
        // "Although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.


    // Create jest tests for the working site. 
        // Ensure that the tests all pass

// ---------------------------------------------------

// Call in Inquirer and fs
const inquirer = require("inquirer");
const fs = require('fs');


// Call in employee classes
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Use inquirer to start making the team.
// Manager will be invoked first

// Add Manager
function addManager() {
    inquirer
    .prompt([            
        {
            type: 'input',
            name: 'name',
            message: "So, what's the name of the new manager?"
        },

        {
            type: 'input',
            name: 'id',
            message: "And their Employee ID?"
        },

        {
            type: 'input',
            name: 'email',
            message: "And their e-mail address?"
        },

        {
            type: 'input',
            name: 'office',
            message: "What about their office number?"
        }

    ])
    .then((results) => {
        console.log('\nQuestions Complete\n')

        const empManager = new Manager(results.name, results.id, results.email, results.office)

        // Console log to test your data
            // console.log(empManager);
            // console.log("Variable value email:", empManager.email)
            // console.log("Role function:", empManager.getRole())

        //Run a script to add another employee
        addCards(empManager);
        newEmployee();
    })
}

// Add Engineer
function addEngineer() {
    inquirer
    .prompt([            
        {
            type: 'input',
            name: 'name',
            message: "So, what's the name of the new engineer?"
        },

        {
            type: 'input',
            name: 'id',
            message: "And their Employee ID?"
        },

        {
            type: 'input',
            name: 'email',
            message: "And their e-mail address?"
        },

        {
            type: 'input',
            name: 'github',
            message: "What about their github username?"
        }

    ])
    .then((results) => {
        console.log('\nQuestions Complete\n')

        const empEngineer = new Engineer(results.name, results.id, results.email, `github.com/${results.github}`)

        // Console log to check your data
            // console.log(empEngineer);
            // console.log("direct email:", empEngineer.email)
            // console.log("role function:", empEngineer.getRole())

        //Run a script to add another employee
        addCards(empEngineer);
        newEmployee();
    })
}

// Add Intern
function addIntern() {
    inquirer
    .prompt([            
        {
            type: 'input',
            name: 'name',
            message: "So, what's the name of the new intern?"
        },

        {
            type: 'input',
            name: 'id',
            message: "And their Employee ID?"
        },

        {
            type: 'input',
            name: 'email',
            message: "And their e-mail address?"
        },

        {
            type: 'input',
            name: 'school',
            message: "What about their school?"
        }

    ])
    .then((results) => {
        console.log('\nQuestions Complete\n')

        const empIntern = new Intern(results.name, results.id, results.email, results.school)

        // Console log to check your data
            // console.log(empIntern);
            // console.log("direct email:", empIntern.email)
            // console.log("role function:", empIntern.getRole())

        //Run a script to add another employee
        addCards(empIntern);
        newEmployee();
    })
}

function newEmployee() {
    inquirer
    .prompt([            
        {
            type: 'list',
            name: 'type',
            message: "OK! Now, what about the other employees? Select who else will be on the team:",
            choices: ['Another Manager', 'An Engineer', 'An Intern', 'No more employees!']
        },

    ])
    .then((results) => {
        if (results.type === 'Another Manager') {
            console.log("\nLet's add another manager!");
            addManager();
        } else if (results.type === 'An Engineer') {
            console.log("\nLet's add an engineer!");
            addEngineer();
        } else if (results.type === 'An Intern') {
            console.log("\nLet's add an intern!");
            addIntern();
        } else {
            htmlEnd();
            console.log("\nI guess we're done here. Open the index.html file for your new team's details!");
            return;
        }
    })
}

// Make a new index.html file in the dist folder
function htmlStart() {
    const htmlString = 
    `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<title>Your New Team</title>
</head>

<body>
    <header class="jumbotron jumbotron-fluid mb-3 text-center">
        <div class="container">
            <h1 class="display-4">Welcome to your new team!</h1>
            <p class="lead">Review your employee list below!</p>
        </div>
    </header>
    <main class="d-flex flex-wrap justify-content-center">
    `
    // Define filePath
    const filePath = './dist/index.html';

    // Write new index.html file
    fs.writeFile(filePath, htmlString, (err) =>
    err ? console.error(err) : err = false)

}
// Append cards to index base
function addCards(employee) {
    empType = employee.getRole();
    let htmlCard = ''

    // Create a switch for the various cards to append
    switch (empType) {
        case 'Employee':
            htmlCard = 
        `
        <article class="card m-2" style="width: 18rem;">
            <header class="card-header">
            <h3>
                ${employee.name}
            </h3>

            <h5>
                ${employee.role}
            </h5>
            </header>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id} </li>
                <li class="list-group-item">Email: 
                    <a href="mailto:${employee.email}">${employee.email}</a>
                </li>
            </ul>
        </article>
        `;
            break;

        case 'Manager':
            htmlCard = 
        `
        <article class="card m-2" style="width: 18rem;">
            <header class="card-header">
            <h3>
                ${employee.name}
            </h3>

            <h5>
                ${employee.role}
            </h5>
            </header>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id} </li>
                <li class="list-group-item">Email: 
                    <a href="mailto:${employee.email}">${employee.email}</a>
                </li>
                <li class="list-group-item">Office Number: ${employee.office}</li>
            </ul>
        </article>
        `;
            break;

        case 'Engineer':
            htmlCard = 
        `
        <article class="card m-2" style="width: 18rem;">
            <header class="card-header">
            <h3>
                ${employee.name}
            </h3>

            <h5>
                ${employee.role}
            </h5>
            </header>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id} </li>
                <li class="list-group-item">Email: 
                    <a href="mailto:${employee.email}">${employee.email}</a>
                </li>
                <li class="list-group-item">GitHub:
                    <a href="https://${employee.github}" target="_blank">${employee.github}</a>
                </li>
            </ul>
        </article>
        `;
            break;

        case 'Intern':
            htmlCard = 
        `
        <article class="card m-2" style="width: 18rem;">
            <header class="card-header">
            <h3>
                ${employee.name}
            </h3>

            <h5>
                ${employee.role}
            </h5>
            </header>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id} </li>
                <li class="list-group-item">Email: 
                    <a href="mailto:${employee.email}">${employee.email}</a>
                </li>
                <li class="list-group-item">School: ${employee.school}</li>
            </ul>
        </article>
        `;
            break;

        default:
            console.log('Something went wrong. No applicable role for this employee.')
    }
    // console.log(htmlCard) // This works

    // Define filePath
    const filePath = './dist/index.html';
    
    // Write code to append the card to the template literal src.html
    fs.appendFile(filePath, htmlCard, (err) =>
    err ? console.error(err) : err = false)
}

function htmlEnd() {
    htmlString = 
    `
    </main>

    <footer class="footer bg-light text-center p-2 mt-3">
        <div class="container">
            <span class="text-muted">
                Made with blood, sweat, tears, and node.js
            </span>
        </div>
    </footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>
    `
    // Write code to append the footer to the template literal index.html
    const filePath = './dist/index.html';
    
    fs.appendFile(filePath, htmlString, (err) =>
    err ? console.error(err) : err = false)
}

// Initialize the program
function init() {
    htmlStart();
    console.log("\nHey there, it's time to make a new team!\nLet's start with the manager. . .\n")
    addManager();
}
init();

