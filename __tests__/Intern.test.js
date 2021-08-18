
const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern('Timmy');

    expect(intern.name).toBe('Timmy');
    expect(intern.empID).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
   
})
