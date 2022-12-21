const ReverseWord = require('./task1')
const stringLength = require('./task1')
const capitalize = require('./task1')


test('length of josue equals to 5', () =>{

    expect(stringLength.stringLength('josue')).toEqual(5);
})

test('length of  equals to undefined ', () =>{

    expect( () => { 
        stringLength.stringLength('') })
    .toThrow('error');
})

test('length of iradukunda equals to undefined ', () =>{

    expect( () => { 
        stringLength.stringLength('iradukunda1')})
        .toThrow('error');
})

test('length of hello equals to olleh', () =>{

    expect(ReverseWord.ReverseWord('hello')).toEqual('olleh');
})

test('expect josue to be Josue', () =>{

    expect(capitalize.capitalize('josue')).toEqual('Josue');
})