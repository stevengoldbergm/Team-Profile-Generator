// Start New Class
class Employee {
    // Add constructors

    constructor(name, id, email) {
        this.name = name
        this. id = id
        this.email = email
        this.role = 'Employee'

    }

    // Add methods
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

// This is a test
    // const emp = new Employee(); 


