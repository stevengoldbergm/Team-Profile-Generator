// Import the parent class
const Employee = require('./Employee')

// Start new SubClass
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name
        this. id = id
        this.email = email

        // The Intern has a value for their school and a different role
        this.school = school
        this.role = 'Intern'
    }

    getRole() {
        return 'Intern';
    };
}

module.exports = Intern;