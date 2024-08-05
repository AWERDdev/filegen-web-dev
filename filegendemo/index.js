//veribles
const fs = require("fs");
const path = require("path");
const readline= require("readline");
const {exec} = require('child_process')
const { ChildProcess } = require("child_process");
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

const commands = [`npm inint -y`]

let codeweb = codewebstr.replace(``);

let deafultnodeCode = codenode.replace(``);

console.log(deafultnodeCode);
console.log(codeweb);

//functions


function genfilenode(){

    //create javascript files
    
    
    fs.writeFile(path.join(__dirname,"test1","index.js"),deafultnodeCode,(err)=>{
if(err){
    throw new Error("failed creating the file at \n near line 22 index.js");
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

            fs.writeFile(path.join(__dirname,"test1","test.js"),"//test1",(err)=>{
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

function runcommandline(command){
    //run command lines

    exec (path.join(__dirname,"test1",command, (error,sdtout,sdterr =>{
        if(error){
            throw new Error("error failed running command lines  \n near line 79");
        }if(sdterr){
            console.log(sdterr);
        }else{
        console.log("output" + sdtout)
        console.log("npm inint complete")
        }
    })))
    
}
commands.forEach(comandline => {
    comandline.runcommandline()
    });

function genwebfiles(){
// create html file
    fs.writeFile(path.join(__dirname,"test1","index.html"),codeweb,(err)=>{
                    
        if(err){
            throw new Error("failed creating the file at \n near line 46 index.html");
        }
        else{
            console.log("html file created succesfuly");
        }
            })

}
genwebfiles()
