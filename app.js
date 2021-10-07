const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const spam = require("./fakeDb");
const PORT = process.env.PORT || 5000;


app.use(express.json());

async function populateFakeDB() {

    try {
        const spamTix = await axios.get("https://raw.githubusercontent.com/morkro/coding-challenge/master/data/reports.json");    
        for (let sub of spamTix.data.elements) {
            spam[sub.id] = sub;
        } 
    }

    catch(e) {
        next(e)
    }

}
populateFakeDB()
//below allows cross origin requests
app.use(cors({
    origin: "http://localhost:3000",
}))

app.get("/spam", (req, res, next) => {
    
    try {
        res.send(spam);

    }
    catch(e) {
        next(e)
    }
})

if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post("/spam", (req,res, next) => {
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

