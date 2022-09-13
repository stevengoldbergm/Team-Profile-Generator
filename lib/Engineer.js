// Import the parent class
const Employee = require('./Employee')

// Start new SubClass
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.name = name
        this. id = id
        this.email = email

        // The Engineer has a value for their github username and a different role
        this.github = github
        this.role = 'Engineer'
    }

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;
