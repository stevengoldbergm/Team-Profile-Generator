const Employee = require('../lib/Employee')

const testEmp = new Employee('Steve', 1, 'Steve@fakemail.com')
// Test the class variables and methods
it('should return the expected values', () => {
    expect(testEmp.name).toBe('Steve');
    expect(testEmp.id).toBe(1);
    expect(testEmp.email).toBe('Steve@fakemail.com');
});

// Test the methods of the class
it('should return the same values via method', () => {
    expect(testEmp.getName()).toBe('Steve');
    expect(testEmp.getId()).toBe(1);
    expect(testEmp.getEmail()).toBe('Steve@fakemail.com');
});

// Ensure that the getRole() method returns 'Employee'
it('should return "Employee" if I ask for the role', () => {
    expect(testEmp.role).toBe('Employee');
    expect(testEmp.getRole()).toBe('Employee');
})