require('isomorphic-fetch');
require('dotenv').config();

//called segment but can be list or segment
const segment = "WKPB2U";
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
let count;
const cors = require("cors")
app.use(cors())
    //chron job
    /*const freqMinutes = .1,
        interval = freqMinutes * 60 * 1000;
    setInterval(function() {
        console.log(`running ${interval}`);
        //List or Segment


    https://a.klaviyo.com/api/v2/group/WKPB2U/members/all?api_key=



    }, interval)
    */
app.get('/', function(req, res) {
    fetch(`https://a.klaviyo.com/api/v2/group/${segment}/members/all?api_key=${process.env.KLAVIYOAPIKEY}`)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(stories) {
            console.log(`${stories.records.length} -- ${new Date()}`);
            res.send("" + stories.records.length);
        });

})

app.listen(3000, () => { console.log(`App listening on port: ${process.env.PORT}`) })