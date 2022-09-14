const Engineer = require('../lib/Engineer')

const testEngi = new Engineer('Steve', 1, 'Steve@fakemail.com', 'stevhub')
// Test the class variables and methods
it('should return the expected values', () => {
    expect(testEngi.name).toBe('Steve');
    expect(testEngi.id).toBe(1);
    expect(testEngi.email).toBe('Steve@fakemail.com');
    expect(testEngi.github).toBe('stevhub');

});

// Test the methods of the class
it('should return the same values via method', () => {
    expect(testEngi.getName()).toBe('Steve');
    expect(testEngi.getId()).toBe(1);
    expect(testEngi.getEmail()).toBe('Steve@fakemail.com');
    expect(testEngi.getGithub()).toBe('stevhub');
});


// Ensure that the getRole() method returns 'Engineer'
it('should return "Engineer" if I ask for the role', () => {
    expect(testEngi.role).toBe('Engineer');
    expect(testEngi.getRole()).toBe('Engineer');
})