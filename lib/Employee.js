const inquirer = require("inquirer");

// Start New Class
class Employee {
    // Add constructors

    constructor(name, id, email) {
        this.name = name
        this. id = id
        this.email = email
        this.role = 'Employee'

    }

    // OK, you have to ask Manolis about this tomorrow. Why are these even here?
    // Maybe ensure that they provide a string?
    // Maybe have them write the HTML text for the card?
    getName() {
        
        return this.name
    }
    
    getId() {
        
        return this.id
    }

    getEmail() {
        
        return this.email
    };
    
    getRole() {

        return 'Employee';
    };

    

}

// Export the parent
module.exports = Employee;

// This is a questionnaire test
    // const emp = new Employee(); 

//


