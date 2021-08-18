
const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Jon');

    expect(engineer.name).toBe('Jon');
    expect(engineer.empID).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.git).toEqual(expect.any(String));
   
})


