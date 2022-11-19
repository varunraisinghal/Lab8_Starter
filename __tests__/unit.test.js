// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('isPhoneNumber', () => 
{
    expect(functions.isPhoneNumber('8584440091')).toBe(false);
    expect(functions.isPhoneNumber('858444009')).toBe(false);
    expect(functions.isPhoneNumber('(858)444-0091')).toBe(true);
    expect(functions.isPhoneNumber('(858)472-6587')).toBe(true);
})

test('isEmail', () => 
{
    expect(functions.isEmail('vsinghal@ucsd')).toBe(false);
    expect(functions.isEmail('vsinghal.com')).toBe(false);
    expect(functions.isEmail('vsinghal@ucsd.edu')).toBe(true);
    expect(functions.isEmail('varunraisinghal12@gmail.com')).toBe(true);
})

test('isStrongPassword', () => 
{
    expect(functions.isStrongPassword('abc')).toBe(false);
    expect(functions.isStrongPassword('123')).toBe(false);
    expect(functions.isStrongPassword('ABC_123_abc')).toBe(true);
    expect(functions.isStrongPassword('abc_123_ABC')).toBe(true);
})

test('isDate', () => 
{
    expect(functions.isDate('010522')).toBe(false);
    expect(functions.isDate('January 5th, 2022')).toBe(false);
    expect(functions.isDate('01/05/2002')).toBe(true);
    expect(functions.isDate('1/5/2002')).toBe(true);
})

test('isHexColor', () => 
{
    expect(functions.isHexColor('#thisaintacolor')).toBe(false);
    expect(functions.isHexColor('#notacolor')).toBe(false);
    expect(functions.isHexColor('#FFF')).toBe(true);
    expect(functions.isHexColor('#FADADD')).toBe(true);
})

// TODO - Part 2