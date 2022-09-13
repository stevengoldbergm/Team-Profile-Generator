// TODO:
    // Define Classes 

    // Set up Inquirer questionnaires
        // "Although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.

    // Create Object Literal template for HTML
        // Before the manager is created, run a new function to overwrite the HTML with a new template
        // Create additional functions to append new cards for Managers, Engineers, and Interns to the HTML
        // Whenever an Inquirer questionnaire finishes, append the new card to the HTML of the page
        // When the user closes the program, run a function that adds a footer to the HTML page
            // 'Made with blood, sweat, tears, and node.js

    // Create jest tests for the working site. 
        // Ensure that the tests all pass
    
        //--------------------------------
        
        // Try to make an inquirer with nested questions

const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

// Use inquirer to start making the team.
// Start with the Manager
addManager()
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
        },

        {
            type: 'list',
            name: 'type',
            message: "Good! Now, what about the other employees? Select who else will be on the team:",
            choices: ['Another Manager', 'An Engineer', 'An Intern']
        },

    ])
    .then((results) => {
    // Actually connect the classes you goob.
        // const manager = new Manager(results.name, results.id, results.email, results.office)
        // Try to append to the HTML and doing another .then afterwards.

        // Change this to a switch/case
        if (results.type === 'Another Manager') {
            console.log("Let's add another manager!")
            addManager()
        } else if (results.type === 'An Engineer') {
            console.log("Let's add an engineer!")
        } else {
            console.log("Let's add an intern!")
        }
    })
}



