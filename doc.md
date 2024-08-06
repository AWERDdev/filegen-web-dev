# how file gen works
 This is the documentation of the filegen it makes files using node and javaScript there are too types of this one for web devolpment and for node the content and files can be changed there are all made in there own folders one for Each files one for the HTML and one for the Java Script and one for the CSS it makes in the html folder three files index.html and signup.html and login.html the basic html structer with a few divs and links to all the css and to the index.js file in the js folder there are four files npm package and three js files index.js
 and server.js and test.js  the file content is basic and finaly the styles folder has body.css and title.css and main.css and end.css and responsive.css the names are the same as the div classes the body.css is for the css body and main elements title.css is for the title div and all of it's elements and the main.css is for the full application and the end.css is for the 
 bottom div and all of it's elements and lastly responsive.css is for craeting and making the css responsive.these differ from the web dev and node dev version as in the node dev there is no html or css files and just npm package and the file data instead of being in the server.js is in the index.js 
 # How to run app
 To call the app depending on which one you downloaded if you downloaded the web dev type in the command line 
```
filegen-web-dev
```

if the node version then type 
```
filegen-node-dev
```
# app structure explaned

  # first the required processes for the project
```
 const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');

# file content

1- codenode for the java script files
2- codeweb for the html files
3- css content one for each file

# running commandline 
```
function runcommands(commands, callback) {
        commands = [`npm init -y`,`npm i date-fns --D` , `npm i uuid --D`]
    function executecommands(index) {
        if (index >= commands.length) {
            return callback();
        }
        exec(commands[index], (err, stdout, stderr) => {
            if (err) {
                console.error("Failed running command: " + commands[index] + " Error: " + err);
                return;
            }
            console.log(`Output: ${stdout}`);
            executecommands(index + 1);
        });
    }
    executecommands(0);
}

this runs the commands for the npm file you can add more  lines of code in the commands array
# file dir
``` 
function createDirectories(dirs, callback) {
    let index = 0;

    function createDir() {
        if (index >= dirs.length) {
            return callback();
        }
        fs.mkdir(dirs[index], { recursive: true }, (err) => {
            if (err) {
                console.error("Failed creating directory: " + dirs[index] + " Error: " + err);
                return;
            }
            console.log("Directory created: " + dirs[index]);
            index++;
            createDir();
        });
    }
    createDir();
}
```
this function creates the needed folders to store the files the code uses the dir and callback pramters first you have the index that >= dirs then you return the call back and then use the mk dir to make the needed folders and you will see this function being called in the end of the code 
# genrating js files

```
function genfilenode() {
    // Create JavaScript files
    const nodefiles = [
        { path: path.join(process.cwd(), "js", "index.js"), content: "// main js file" },
        { path: path.join(process.cwd(), "js", "server.js"), content: "// server js file\n" + codenode },
        { path: path.join(process.cwd(), "js", "test.js"), content: "// test js file" },
    ];
    nodefiles.forEach(file => {
        fs.writeFile(file.path, file.content, (err) => {
            if (err) {
                console.error("Failed creating the node/js files: " + err);
                return;
            }
            console.log("Node files created successfully");
        });
    });
}
```
this is the code for creating the files for the js folder first section we have an array with all the needed files with a path that leads to the js folder and the content for them and the seconde section is the function that acually makes the files using the for each it makes an js file by using the file path and content and a call back for when the function fails at creating the file or creates it correctly

# genrating html files
``` 
function genwebfiles() {
    // Create HTML files
    const htmlFiles = [
        { path: path.join(process.cwd(), "html", "index.html"), content: "<!-- main HTML page -->" + codeweb },
        { path: path.join(process.cwd(), "html", "signup.html"), content: "<!-- main HTML page -->" + codeweb },
        { path: path.join(process.cwd(), "html", "login.html"), content: "<!-- main HTML page -->" + codeweb },
    ];
    htmlFiles.forEach(file => {
        fs.writeFile(file.path, file.content, (err) => {
            if (err) {
                console.error("Failed creating HTML file: " + err);
            } else {
                console.log("HTML files created successfully");
            }
        });
    });
}
```
here is the same as the js functions but for the html files the arrays can be changed to add and remove the files and make suitable for you make sure to add a path and content or it will not work and this is for the js,html,css


# genrating css files
``` 
function gencssfiles() {
    const cssFiles = [
        { path: path.join(process.cwd(), "styles", "body.css"), content: `/* CSS body */\n${cssbody}` },
        { path: path.join(process.cwd(), "styles", "title.css"), content: `/* CSS title/top */\n${csstitle}` },
        { path: path.join(process.cwd(), "styles", "main.css"), content: `/* Main CSS page */\n${cssmain}` },
        { path: path.join(process.cwd(), "styles", "end.css"), content: `/* End/bottom CSS */\n${cssend}` },
        { path: path.join(process.cwd(), "styles", "responsive.css"), content: `/* Responsive CSS */\n${cssres}` }
    ];

    cssFiles.forEach(file => {
        fs.writeFile(file.path, file.content, (err) => {
            if (err) {
                console.error("Failed creating CSS file: " + file.path + " Error: " + err);
            } else {
                console.log("CSS files created successfully");
            }
        });
    });
}
the same as the rest and can be changed to the breferd amount of files

# excuting all the code 

```
// Execute functions
createDirectories([path.join(process.cwd(), "js"), path.join(process.cwd(), "styles"), path.join(process.cwd(), "html")], () => {
    const jsDir = path.join(process.cwd(), "js");
    process.chdir(jsDir);
    runcommands(['npm init -y'], () => {
        process.chdir("..");  // Go back to the root directory after npm init
        genfilenode();
        genwebfiles();
        gencssfiles();
    });
});
```
of course excuting the functions but it can only be done in a sertain order because of the folders it is best not to mess with this as it can breake every thing but here how it works you have the createDirectories function running and mking all the folders for all the files and you have the jsDir that is used to run the command lines in the js file instead of outside the folder and then exiting the folder and running the rest of the functions



