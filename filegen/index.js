const fs = require("fs");
const path = require("path");
const readline= require("readline");
const { stdin, stdout } = require("process");
const rl =readline.createInterface({
    input:stdin,
    output:stdout
});
const codenode =`
const fs = require("fs")
const path = require("path")
const readline= require("readline")
const { stdin, stdout } = require("process")
const rl = readline.createInterface({input:stdin,output:stdout})`
const codeweb = ``
let deafultnodeCode = codenode.replace(``)
console.log(deafultnodeCode)
function genfilenode(){
    fs.writeFile(path.join(__dirname,"test1","index.js"),deafultnodeCode,(err)=>{
if(err){
    throw new Error("failed creating the file at \n near line 22 index.js");
}
else{
    console.log("file created succesfuly");
}
    })
    fs.writeFile(path.join(__dirname,"test1","server.js"),"//server",(err)=>{
        if(err){
            throw new Error("failed creating the file at \n near line 29 server.js");
        }
        else{
            console.log("file created succesfuly");
        }
            })
            fs.writeFile(path.join(__dirname,"test1","test.js"),"//test1",(err)=>{
                if(err){
                    throw new Error("failed creating the file at \n near line 37 test.js");
                }
                else{
                    console.log("file created succesfuly");
                }
                    }
                )
                fs.writeFile(path.join(__dirname,"test1","index.html"),"<!--test1-->",(err)=>{
                    if(err){
                        throw new Error("failed creating the file at \n near line 46 index.html");
                    }
                    else{
                        console.log("file created succesfuly");
                    }
                        })
    
}
genfilenode()

function genhtmlfile(){

}
