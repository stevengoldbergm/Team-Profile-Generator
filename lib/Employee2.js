const inquirer = require("inquirer");

// Start New Class
class Employee {
    // Add constructors

    constructor() {
        // Set up questions for Questionnaire
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: "Enter the Employee's Name."
            },

            {
                type: 'input',
                name: 'id',
                message: "Enter the Employee's ID."
            },

            {
                type: 'input',
                name: 'email',
                message: "Enter the Employee's e-mail address."
            },
        ]

        // Run inquirer for questions
        new Promise(() => {
                console.log('ask question 1?');
                this.getName(questions[0]);
            })
            .then(() => {
                console.log('ask question 2?');
                this.getId(questions[1]);
            })
        // .then(this.getEmail())

    }

    // OK, you have to ask Manolis about this tomorrow. Why are these even here?
    // Maybe ensure that they provide a string?
    // Maybe have them write the HTML text for the card?
    
    getName(question) {
        inquirer.prompt(question)
            .then((response) => {
                console.log(response)
                console.log(response.name)
            })
        // console.log('Yeah')
        // return this.name
    }
    
    getId(question) {
        inquirer.prompt(question)
            .then((response) => {
                console.log(response)
                console.log(response.id)
            })
        // console.log('this')
        // return this.id
    }

    getEmail() {
        console.log('works')
        return this.email
    };
    
    getRole() {
        return this.role;
    };

    

}



// This is a questionnaire test
    const emp = new Employee(); 

// Export the parent
module.exports = Employee;


