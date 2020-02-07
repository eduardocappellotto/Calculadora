const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){ 
    res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+num2;

    res.send("Result is: "+ result );
    res.send("Thanks for posting");

})

app.listen(3000, function(){
    console.log("example app listening on port 3000!")
});

app.get("/bmicalculator", function(req,res){ 
    res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight/(Math.pow(height,2));
    bmi = bmi.toFixed(2);

    res.send("Your BMI is : "+ bmi);
    res.send("Thanks for posting");
});