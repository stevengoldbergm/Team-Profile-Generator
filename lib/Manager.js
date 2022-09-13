const inquirer = require("inquirer");
const Employee = require('./Employee')

// Start new SubClass
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.name = name
        this. id = id
        this.email = email

        // The manager gets an office number and different role
        this.office = office
        this.role = 'Manager'
    }

    getRole() {
        return 'Manager';
    };
}

// This is a questionnaire test
    const emp = new Manager(); 
