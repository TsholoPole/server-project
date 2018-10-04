const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs'),
path = require('path'),    
filePath = path.join('file:///C:/Users/Tpe/Documents/GazeRecorderResults/Result1/ScreenRecorderPath.dat');

const app = express();
app.use(bodyParser.json());

function fileread(filename)
{
    var contents = fs.readFileSync(filename);
    return contents;
}

data = fileread('C:/Users/Tpe/Documents/GazeRecorderResults/Result1/ScreenRecorderPath.dat');
console.log(data.toString());

//handle CORS: web app and server are on different ports
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
   
//create rest-api endpoint
app.route('/api/gaze-data').get((req, res) => {

});
// fs.readFile('file:///C:/Users/Tpe/Documents/GazeRecorderResults/Result1/ScreenRecorderPath.dat', {encoding: 'utf-8'},
//       function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Asynchronous read: " + data);
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
//     });

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
