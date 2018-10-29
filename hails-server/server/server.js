const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs'),
path = require('path'),    
filePath = path.join('file:///C:/Users/Tpe/Documents/GazeRecorderResults/Result1/ScreenRecorderPath.dat');
var data;
const app = express();
app.use(bodyParser.json());

var a2d = new Array();

//chapter 1 sections
var chapterOneSectionOne = 0, chapterOneSectionTwo = 0, chapterOneSectionThree = 0;

//chapter 2 sections
var chapterTwoSectionOne = 0, chapterTwoSectionTwo = 0, chapterTwoSectionThree = 0;

//chapter 3 sections
var chapterThreeSectionOne = 0, chapterThreeSectionTwo = 0, chapterThreeSectionThree = 0;

//shortcuts
var basics = 0, dataTypes = 0, arithMeticOps = 0;
var unmapped = 0;

function Content(name, value) {
   this. name =name;
    this.value = value;
}

var mappedData = new Array(3);

function fileread()
{
    textFileLength = 0;

    console.log("Staring the function to read the file!!!");
    var remaining ="";
    lineFeed = "\n";
    lineNr = 1;
    fileInstance = 1;

    // filename = 'C:/Users/Tpe/Documents/theTest.txt';
    // haythamTest
    fs.createReadStream('C:/Users/Tpe/Documents/theTest.txt', {encoding: 'utf8'})
    .on('data', function(chunk){
        remaining = remaining.concat(chunk);
        textFileLength = chunk.split('\n').length;
        //get file length
        console.log("File length: ", textFileLength);

        var lastLineFeed = remaining.lastIndexOf(lineFeed);
        if(lastLineFeed === -1) return;

        var current = remaining.substring(0, lastLineFeed),
        lines = current.split(lineFeed);
        
        console.log("List length: ", lines.length);
        for(var i =0, length = lines.length; i< length; i++){
            a2d[i] = new Array();
            a2d[i] = lines[i].split(',');//works
            // _processLine(lines[i], lineNr++);
        }
        
        // console.log(a2d);
        for(var i = 0; i < textFileLength-1; i++)
        {
            // console.log("Current data: ", a2d[i][1]);
            if(a2d[i][1] > 1 && a2d[i][1] < 381)//x-value within the side panel
            {
                console.log("Data: ", a2d[i][1]);
                //check the y gaze value, within the side pannel
                if(a2d[i][2] > 170 && a2d[i][2] < 200)//chapter 1 section  1 plot
                {
                    console.log("Chap1Sec1");
                    chapterOneSectionOne += 1;
                }
                else if(a2d[i][2] > 200 && a2d[i][2] < 231)//chapter 1 section  2 plot
                {
                    console.log("Chap1Sec2");
                    chapterOneSectionTwo += 1;
                }
                else if(a2d[i][2] > 231 && a2d[i][2] < 263)//chapter 1 section  3 plot
                {
                    console.log("Chap1Sec3");
                    chapterOneSectionThree += 1;
                }
                else if(a2d[i][2] > 323 && a2d[i][2] < 351)//chapter 2 section  1 plot
                {
                    console.log("Chap2Sec1");
                    chapterTwoSectionOne += 1;
                }
                else if(a2d[i][2] > 351 && a2d[i][2] < 384)//chapter 2 section  2 plot
                {
                    console.log("Chap2Sec2");
                    chapterTwoSectionTwo += 1;
                }
                else if(a2d[i][2] > 385 && a2d[i][2] < 416)//chapter 2 section  3 plot
                {
                    console.log("Chap2Sec3");
                    chapterTwoSectionThree += 1;
                }
                else if(a2d[i][2] > 539 && a2d[i][2] < 568)//chapter 3 section  1 plot
                {
                    console.log("Chap3Sec1");
                    chapterThreeSectionOne += 1;
                }
                else if(a2d[i][2] > 568 && a2d[i][2] < 599)//chapter 3 section  2 plot
                {
                    console.log("Chap3Sec2");
                    chapterThreeSectionTwo += 1;
                }
                else if(a2d[i][2] > 600 && a2d[i][2] < 632)//chapter 3 section  3 plot
                {
                    console.log("Chap3Sec3");
                    chapterThreeSectionThree += 1;
                }       
    
            }
            else if(a2d[i][2] > 522 && a2d[i][2] < 698 )//User looking at basics shortcut- focus not on side panel: y-value analysed first as is constant for all shortcuts
            {
                console.log("Data: ", a2d[i][2])
                if(a2d[i][1] > 753 && a2d[i][1] < 1000)//looking at basics shortcut
                {
                    console.log("Basics");
                    basics += 1;
                }
                else if(a2d[i][1] > 1000 && a2d[i][1] < 1261)//looking at data types shortcut
                {
                    console.log("Data types");
                    dataTypes += 1;
                }
                else  if(a2d[i][1] > 1262 && a2d[i][1] < 1520)//looking at arithmenic ops shortcut
                {
                    console.log("Arithmetic");
                    arithMeticOps += 1;
                }
    
            }
            else{
                unmapped += 1;
                // console.log("\n\nData coould not compare!")
            }
        }
        console.log("Data after reading the data in the file: ", chapterOneSectionOne, chapterOneSectionTwo, chapterOneSectionThree,
        '\n Chapter 2 sections : ', chapterTwoSectionOne, chapterTwoSectionTwo, chapterTwoSectionThree,
        '\n Chapter 3 sections : ', chapterThreeSectionOne, chapterThreeSectionTwo, chapterThreeSectionThree,
        '\n Shortcuts : ', basics, dataTypes, arithMeticOps,
        '\n UnMapped Data:', unmapped);

        //map data: compare the sections and data and create suggestions

        //map chapter 1 gaze data
        if(chapterOneSectionOne > 0)
        {
            var content = new Content("A basic C++ Program", chapterOneSectionOne);
            putInArray(content);
        }
        if(chapterOneSectionTwo > 0)
        {
            var content = new Content("The basics of C++", chapterOneSectionTwo);
            putInArray(content);
        }
        if(chapterOneSectionThree > 0)
        {
            var content = new Content("What Are Identifiers", chapterOneSectionThree);
            putInArray(content);
        }
        //map chpater two gaze data
        if(chapterTwoSectionOne > 0)
        {
            var content = new Content("Data types in C++", chapterTwoSectionOne);
            putInArray(content);
        }
        if(chapterTwoSectionTwo > 0)
        {
            var content = new Content("Simple Data Types", chapterTwoSectionTwo);
            putInArray(content);
        }
        if(chapterThreeSectionThree > 0)
        {
            var content = new Content("Floating Data types", chapterOneSectionTwo);
            putInArray(content);
        }
        //map chapter 3 gaze data
        if(chapterThreeSectionOne > 0)
        {
            var content = new Content("Arigthmetic Operations in C++", chapterThreeSectionOne);
            putInArray(content);
        }
        if(chapterThreeSectionTwo > 0)
        {
            var content = new Content("Examples of Arithmetic oprerations", chapterThreeSectionTwo);
            putInArray(content);
        }
        if(chapterThreeSectionThree > 0)
        {
            var content = new Content("Precedence in C++", chapterThreeSectionThree);
            putInArray(content);
        }
        //map shortcut gaze data
        if(basics > 0)
        {
            var content = new Content("Learn the basics first", basics);
            putInArray(content);
        }
        if(dataTypes > 0)
        {
            var content = new Content("C++ Data Types", dataTypes);
            putInArray(content);
        }
        if(arithMeticOps > 0)
        {
            var content = new Content("Arithmetic Operators: More", arithMeticOps);
            putInArray(content);
        }
        


    })
    .on('end', function(close){
        return;
        // if(remaining.length > 0) _processLine(remaining, lineNr);
    })
    .on('error', function(error) {
        console.log(error.json);
    });
    
    
}

function mapData()
{
    console.log("In mapa data function");
    console.log('\n Shortcuts : ', basics, dataTypes, arithMeticOps);

}

function putInArray(content)
{
    for(var index = 0; index < 3; index++){
        if(mappedData[index] == null || mappedData[index] == undefined)
        {
            mappedData[index] = content;
            break;   
        }
        else{
            if(mappedData[index].value < content.value)
            {
                tempVal = mappedData[index];
                putInArray(tempVal);
                mappedData[index] = content;
                break;
            }
        }
    }
    console.log("In put in array!!!", mappedData);
}


//Handle CORS: share resources accross domains
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Origin", "http://localhost:2100");
    res.header( 'Content-Type', 'application/json');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
   
//create rest-api endpoint
app.get('/api/gaze-data', (req, res) => {
    // res.json(["test", "test", "test"]);
    res.json(mappedData);
  
});

app.get('/api/check-data', (req, res) => {
    if(textFileLength > 0){
        res.json(true);
    }
    else{
        res.json(false);
    }
});

app.listen(3000, () => {

    console.log("Listening on port 3000");
    fileread();
    mapData();
    // mapGazeData();
});
