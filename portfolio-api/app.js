const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var nodemailer = require('nodemailer');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});



app.post('/api/email', (req, res, next) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dslayer192@gmail.com',
          pass: ''
        }
      });
    if(req.body.message && req.body.message === ""){
        req.body.message= "Thanks for subscripton we will send new upadates on this from now on"
    }
    //todo write the email in file and send them mail when you upload the content
    const msg = {
        to: req.body.email,
        from: 'dslayer192@gmail.com',
        subject: 'Website Contact',
        text: req.body.message
    }
    console.log({msg});
    transporter.sendMail(msg, function(error, info){
        if (error) {
            console.log('error: ', error);
            res.status(401).json({
                success: false
            });
        } else {
            console.log("info :"+{info});
            res.status(200).json({
                success: true
            });
        }
      });

});


app.listen(3030, '0.0.0.0');