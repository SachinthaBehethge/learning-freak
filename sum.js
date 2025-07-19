
const sum = (a, b) => {
    return a + b;
}





const myFunc = (input) => {
    if (typeof input !== 'number') {
        throw new Error('invalid Number')
    }
}


const fun2 = (input) => {
    if (typeof input === 'number') {

    } else {
        throw new Error("Invalid");

    }
}


const fetchData = (callback) => {
    setTimeout(() => {
        callback(null, 'Peanut Butter');
    }, 1000)
}


const fetchPromise = (isFale = false)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (isFale) {
                reject(new Error('error'));
            } else {
                resolve("apple cake");
            }
        }, 1000);
    });
}





module.exports = { myFunc, sum, fun2, fetchData , fetchPromise};