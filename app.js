const path = require('path');
const env = require('dotenv').config({path:path.resolve(__dirname+"/.env")})

//dot env does not work
// const dotenv = require('dotenv');
// dotenv.config()

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const spam = require("./fakeDb");

const PORT = process.env.PORT || 5000;


//populate fakeDB at outset
async function populateTickets() {

    try {
        const spamTix = await axios.get("https://raw.githubusercontent.com/morkro/coding-challenge/master/data/reports.json")       
        for (let sub of spamTix.data.elements) {
            spam[sub.id] = sub;
        }        
    }
    catch (e) {
            throw new Error('Unable to get tickets');
        }
    
}

populateTickets()

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}))

// Have Node serve the files for our built React app
console.log('process env is', process.env.NODE_ENV);
console.log('env is', env);

if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static('client/build'));

    // All other GET requests not handled before will return our React app
    // const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post("/block", (req,res, next) => {
    
    try {
        spam[req.body.id].state = 'BLOCKED'
        return res.status(200).send();
    }
    catch(e){
        next(e)
    }
    
})

app.put("/reports/:reportId", (req,res, next) => {
    try {
        let id = req.params.reportId;
        spam[id].state = 'RESOLVED'
        return res.status(200).send();
    }
    catch(e){
        next(e)
    }
    
})




// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  // set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});


app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});

