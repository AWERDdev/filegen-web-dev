//veribles
const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');


//file content

// js and node file content
const codenode =`
const fs = require("fs")
const path = require("path")
const readline= require("readline")
const { stdin, stdout } = require("process")
const rl = readline.createInterface({input:stdin,output:stdout})`
// website content


const codewebstr = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!--change me when needed-->app</title>
</head>
<body>
    <div class="title-start"></div>
    <div class="main-content"></div>
    <div class="end-bottom"></div>
    
</body>
</html>
`
//command line codes



let codeweb = codewebstr
let deafultnodeCode = codenode

console.log(deafultnodeCode);
console.log(codeweb);

//functions


function genfilenode(){

    //create javascript files
    
    
    fs.writeFile(path.join(__dirname,"test1","index.js"),"//main js file"+deafultnodeCode,(err,undefined)=>{
if(err){
    throw new Error("failed creating the file at \n near line 22 index.js");
}
if(undefined){
    console.log("something is worng")
}
else{
    console.log("index.js file created succesfuly");
}
    })

    fs.writeFile(path.join(__dirname,"test1","server.js"),"//server",(err)=>{
        if(err){
            throw new Error("failed creating the file at \n near line 29 server.js");
        }
        else{
            console.log("server.js file created succesfuly");
        }

            })

            fs.writeFile(path.join(__dirname,"test1","test.js"),"//test",(err)=>{
                if(err){
                    throw new Error("failed creating the file at \n near line 37 test.js");
                }

                else{
                    console.log("test.js file created succesfuly");
                }
                    }
                )
                    




                        
    
}
genfilenode()
function runcommandline() {
    //run command lines
    const commands = ['npm init -y'];

    commands.forEach(command => {
        exec(command, { cwd: path.join(__dirname, 'test1') }, (err, stdout, stderr) => {
            if (err) {
                console.error('Failed at running the command:', err);
            } else {
                console.log('output:', stdout);
                console.log('npm init complete');
            }
        });
    });
}
runcommandline()

function genwebfiles(){
// create html file
    fs.writeFile(path.join(__dirname,"test1","index.html"),"<!-- main html page-->"+codeweb,(err)=>{
                    
        if(err){
            throw new Error("failed creating the file at \n near line 46 index.html");
        }
        else{
            console.log("html file created succesfuly");
        }
            })

}
genwebfiles()
