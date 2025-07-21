// const Event = require('events');

// const eventEmitter = new Event.EventEmitter();


// eventEmitter.on('Hello', ()=>{
//     console.log("hello World");

// })


// eventEmitter.emit('Hello');


// class Person extends Event.EventEmitter{
//     constructor(name){
//         super();

//         this._name = name;
//     }


//     get name(){
//         return this._name;
//     }
// }


// let p1 = new Person("Saman");
// let p2 = new Person("Kasun");

// p1.on("p1",()=>{
//     console.log("my name is", p1.name );

// });

// p2.on("p2",()=>{
//     console.log("my name is", p2.name );

// });
// p2.emit("p2");
// p1.emit("p1");



// readline


// const ReadLine = require('readline');

// const rl = ReadLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let n1 = Math.floor((Math.random()*10) + 1);
// let n2 = Math.floor((Math.random()*10) + 1);
// let ans = n1+n2;


// rl.question(`What is ${n1} + ${n2} ?\n`, (userInput)=>{
//     if (userInput.trim() == ans) {
//         rl.close();
//     }else{
//         rl.setPrompt("Your answer is wrong, Try again \n");
//         rl.prompt();

//         rl.on('line',(userInput)=>{
//             if (userInput.trim() == ans) {
//                 rl.close();
//             } else {
//                 rl.setPrompt(`Answer ${userInput} is wrong, Please try again...\n`);
//                 rl.prompt();
//             }
//         });


//     }
// });



// rl.on('close', ()=>{
//     console.log("CORRECT !!!!!");
    
// });



 //const fs = require('fs'); 


// fs.writeFile("example.txt", "This is an example", (err)=>{
//     if (err) 
//         console.log("error - ", err);
//     else
//         console.log("file Succesfully created");
            
    
// });


// fs.unlink('example.txt', (err)=>{
//     if (err) {
//         console.log(err);
        
//     }else{
//         console.log("File deleted successfully..!");
        
//     }
// });


//const zlib =require('zlib');
// const gzip = zlib.createGzip();
//const gunzip = zlib.createGunzip();

// const readStream = fs.createReadStream('./example.txt','utf-8' );//forzip

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
    
// });

//const readStream = fs.createReadStream('./ex2.txt.gz')//unzip

// const writeStream = fs.createWriteStream('./ex2.txt.gz' );

 //const writeStream = fs.createWriteStream('./uncompressed.txt' );//unzip
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
    
// }); //instead of this better use pipe() to combine streams


// readStream.pipe(writeStream);

//readStream.pipe(gunzip).pipe(writeStream); //with gzip

//zip to unzip



//HTTTP MODULE

// const http = require('http');
// const fs = require('fs');


// const server = http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./example.json');
//     res.writeHead(200,{'content-type':'application/json'});
//     readStream.pipe(res);
// }).listen("3000");
 