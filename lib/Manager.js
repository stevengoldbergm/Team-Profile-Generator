// Import the parent class
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

    getOffice() {
        return this.office;
    }
}

module.exports = Manager;

// This is a test
    // const emp = new Manager(); 
