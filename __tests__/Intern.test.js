const Intern = require('../lib/Intern')

const testEngi = new Intern('Steve', 1, 'Steve@fakemail.com', 'Steve U')
// Test the class variables and methods
it('should return the expected values', () => {
    expect(testEngi.name).toBe('Steve');
    expect(testEngi.id).toBe(1);
    expect(testEngi.email).toBe('Steve@fakemail.com');
    expect(testEngi.school).toBe('Steve U');

});

// Test the methods of the class
it('should return the same values via method', () => {
    expect(testEngi.getName()).toBe('Steve');
    expect(testEngi.getId()).toBe(1);
    expect(testEngi.getEmail()).toBe('Steve@fakemail.com');
    expect(testEngi.getSchool()).toBe('Steve U');
});


// Ensure that the getRole() method returns 'Intern'
it('should return "Intern" if I ask for the role', () => {
    expect(testEngi.role).toBe('Intern');
    expect(testEngi.getRole()).toBe('Intern');
})