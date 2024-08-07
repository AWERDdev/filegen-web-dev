#!/usr/bin/env node

// Variables
const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');

// File content

// Node.js file content
const codenode = `
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { stdin, stdout } = require("process");
const rl = readline.createInterface({input: stdin, output: stdout});
`;

// Website content
const codeweb = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/body.css">
    <link rel="stylesheet" href="styles/title.css">
    <link rel="stylesheet" href="styles/end.css">
    <link rel="stylesheet" href="styles/responsive.css">
    <title><!--change me when needed-->app</title>
</head>
<body>
    <div class="title-start"></div>
    <div class="main-content"></div>
    <div class="end-bottom"></div>
    <script src="js/index.js"></script>
</body>
</html>
`;

// CSS content
const cssbody = `
/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}

/* Body */
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}`;

const csstitle = `
/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}

/* Title top */
.title {
    width: 100%;
    min-height: 10vh;
    margin: 0;
    padding: 0;
}`;

const cssmain = `
/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}`;

const cssend = `
/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}`;

const cssres = `
@media(max-width: 600px) {
    /* Root for font sizes */
    :root {
        --fs-600: 1rem;
        --fs-500: 1rem;
        --fs-400: 0.56rem;
    }

    /* Body */
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
}
@media(min-width: 601px) {
    /* Body */
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
}
@media(min-width: 768px) {
    /* Body */
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
}
@media(min-width: 992px) {
    /* Body */
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
}
@media(min-width: 1200px) {
    /* Body */
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
}`;

// Functions
function runcommands(commands, callback) {
    commands = [`npm init -y`,`npm i date-fns -D` , `npm i uuid -D`,`npm i bcrypt -D`]
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
