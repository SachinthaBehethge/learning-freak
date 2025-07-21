// const _ = require('lodash');


// let ex = _.fill([1,2,3,4,5,6,7,8,9], "D",4,5);

// console.log(ex);



//app.use([path],midlewarefn)

const express = require('express');
const path = require('path');
const Joi = require('joi');

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: false }));




app.use('/public', express.static(path.join(__dirname, 'static')));

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
});


app.post('/', (req, res) => {
    // console.log(req.body);

   const schema = Joi.object().keys({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().email().required()
   });
    

   const {error,  value} = schema.validate(req.body);

 

   if (error) {
    console.log(error);
    
   }

   console.table(value);
   res.status(200).json({message: "Data Submitted!", data: value});
   

   
    // res.json({ success: true })
    
});