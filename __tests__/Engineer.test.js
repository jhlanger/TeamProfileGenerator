const { expect } = require('@jest/globals');
const Engineer = require('../lib/Manager');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.name).toBe('Dave');
    expect(engineer.empID).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})