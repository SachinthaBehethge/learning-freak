const sum = require('./sum');


// test('should first', () => { second })// first description, and then text function


// test('Add 1 + 2 to equals 3 ', ()=>{
//     expect(sum.sum(1,2)).toBe(3);
// });

//toBe
// test('two plus two is four', ()=>{
//     expect(2+2).toBe(4);
// });

//toEqueal
// test('object assignment',()=>{
//     const data = {'one':1};
//     data['two'] = 2;

//     expect(data).toEqual({'one': 1, 'two':2})
// });


//toBeFalsy - to check NAN,undefined,0 or Null

// test('null is falsy', ()=>{
//     const n = null;//null ,NAN, undefined,0

//     expect(n).toBeFalsy();
// });



//toBeTruthy

// test('One is truthy',()=>{
//     const n = 1;
//     expect(n).toBeTruthy()
// });


//toThrow

test('throws on invalid input', () => {
    expect(() => {
        sum.myFunc("hello");
    }).toThrow();
});


test('invalid Input', () => {
    expect(() => {
        sum.fun2("5");
    }).toThrow();
});


//callback

test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
        }

        try {
            expect(data).toBe('Peanut Butter');
            done();
        } catch (error) {
            done(error);
        }
    };
    sum.fetchData(callback);
});


//promises

test('data is apple cake', ()=>{
    return expect(sum.fetchPromise(false)).resolves.toBe('apple cake');
});

test('fetch promise rejects with an error', ()=>{
    return expect(sum.fetchPromise(true)).rejects.toThrow('error');
});


//async await

test('data is apple cake async', async ()=>{
    const fetch = await sum.fetchPromise(false);
    expect(fetch).toBe('apple cake');
});

test('async fetchpromise faail with an error', async ()=>{

    await expect(sum.fetchPromise(true)).rejects.toThrow('error');
 
    // try {
    //     await sum.fetchPromise(true);
    // } catch (error) {
    //     expect(error).toEqual(new Error('error'));
    // }
    
});



//mok function

test('mock implementation of a basic fn ', ()=>{
    const mock = jest.fn(x => 40 + x);
    expect(mock(1)).toBe(41);
    expect(mock).toHaveBeenCalledWith(1);
});

test('mock function  implementation', () => { 
    const mock = jest.fn(x=> x+10);
    expect(mock(1)).toBe(11);
    expect(mock).toHaveBeenCalledWith(1);
 });


//spies

test('spy on a function in an object', ()=>{
    const video = {
        play(){
            return true;
        }


    };

    const spy = jest.spyOn(video,'play');
    video.play();

    expect(spy).toHaveBeenCalledWith();

    spy.mockRestore();
});