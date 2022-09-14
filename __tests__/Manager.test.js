const Manager = require('../lib/Manager')

const testEngi = new Manager('Steve', 1, 'Steve@fakemail.com', '101')
// Test the class variables and methods
it('should return the expected values', () => {
    expect(testEngi.name).toBe('Steve');
    expect(testEngi.id).toBe(1);
    expect(testEngi.email).toBe('Steve@fakemail.com');
    expect(testEngi.office).toBe('101');

});

// Test the methods of the class
it('should return the same values via method', () => {
    expect(testEngi.getName()).toBe('Steve');
    expect(testEngi.getId()).toBe(1);
    expect(testEngi.getEmail()).toBe('Steve@fakemail.com');
    expect(testEngi.getOffice()).toBe('101');
});


// Ensure that the getRole() method returns 'Manager'
it('should return "Manager" if I ask for the role', () => {
    expect(testEngi.role).toBe('Manager');
    expect(testEngi.getRole()).toBe('Manager');
})