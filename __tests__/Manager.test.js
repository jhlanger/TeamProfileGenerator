

const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.empID).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
})