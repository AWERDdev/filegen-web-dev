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
const stylingjs = `
const optionsULTop = document.querySelectorAll(".options-ul-top a")
const accountsigninul = document.querySelectorAll(".account-signin-ul a")
const optionsULBottom = document.querySelectorAll(".options-ul-bottom a")
optionsULTop.forEach(a =>{
    a.style.color = "white";
})
console.log(optionsULTop)
optionsULBottom.forEach(a =>{
    a.style.color = "white";
});
console.log(optionsULBottom)
accountsigninul.forEach(a =>{
    a.style.color = "white";
});
console.log(accountsigninul)`
// Website content
const codeweb = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--css files-->
    <link rel="stylesheet" href="/styles/body.css">
    <link rel="stylesheet" href="/styles/title.css">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="stylesheet" href="/styles/end.css">
    <link rel="stylesheet" href="/styles/responsive.css">
    <!--change to your linking-->
    <title>app</title>
</head>
<body>
    <div class="title-start">
        <ul class="title-ul">
            <li><h1><!--change to your liking-->WebDev</h1></li>
        </ul>
        <ul class="options-ul-top">
            <!--add and remove as much as needed-->
            <li><button class="option" id="option">option</button></li>
            <li><button class="option" id="option">option</button></li>
            <li><button class="option" id="option">option</button></li>
            <li><button class="option" id="option">option</button></li>
            <li><button class="option" id="option">option</button></li>
            <li><button class="option" id="option">option</button></li>
        </ul>
        <ul class="account-signin-ul">
            <li><a href="/html/signup.html" class="a1">Signup</a></li>
            <li><a href="/html/login.html" class="a2">Login</a></li>
        </ul>
    </div>
    <!--main content-->
    <div class="main-content">
        <div class="section-countainer">
      </div>
    </div>
    <!--bottom content-->
    <div class="end-bottom">
        <div class="section1-left">
            <ul class="options-ul-bottom">
                <!--add and remove as much as needed-->
                <li><a href="#" class="option">option</a></li>
                <li><a href="#" class="option">option</a></li>
                <li><a href="#" class="option">option</a></li>
                <li><a href="#" class="option">option</a></li>
                <li><a href="#" class="option">option</a></li>
                <li><a href="#" class="option">option</a></li>
            </ul>
        </div>
        <div class="section2-right">
            <!--change when needed-->
            <p class="p1-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo asperiores nihil officiis quaerat est dignissimos ea, soluta ex voluptatum deserunt nam odio aperiam illo. Enim possimus culpa numquam neque!</p>
        </div>
    </div>
    <!--javaScript files-->
    <script src="/js/index.js"></script>
    <script src="/js/test.js"></script>
    <script src="/js/styling.js"></script>
</body>
</html>

`;
const codewebsign = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--css files-->
    <link rel="stylesheet" href="/styles/body.css">
    <link rel="stylesheet" href="/styles/title.css">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="stylesheet" href="/styles/end.css">
    <link rel="stylesheet" href="/styles/responsive.css">
    <!--change to your linking-->
    <title>app</title>
</head>
<body>
    <div class="title-start">
        <ul class="title-ul">
            <li><h1><!--change to your liking-->WebDev</h1></li>
        </ul>
    </div>
    <!--main content-->
    <div class="main-content">
        <div class="section-countainer">
     
    </div>
    </div>
    <!--bottom content-->
    <div class="end-bottom"></div>
    <!--javaScript files-->
    <script src="/js/index.js"></script>
    <script src="/js/test.js"></script>
    <script src="/js/server.js"></script>
</body>
</html>
`
const codeweblog = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--css files-->
    <link rel="stylesheet" href="/styles/body.css">
    <link rel="stylesheet" href="/styles/title.css">
    <link rel="stylesheet" href="/styles/main.css">
    <link rel="stylesheet" href="/styles/end.css">
    <link rel="stylesheet" href="/styles/responsive.css">
    <!--change to your linking-->
    <title>app</title>
</head>
<body>
    <div class="title-start">
        <ul class="title-ul">
            <li><h1><!--change to your liking-->WebDev</h1></li>
        </ul>
    </div>
    <!--main content-->
    <div class="main-content">
        <div class="section-countainer">
        
    </div>
    </div>
    <!--bottom content-->
    <div class="end-bottom"></div>
    <!--javaScript files-->
    <script src="/js/index.js"></script>
    <script src="/js/test.js"></script>
    <script src="/js/server.js"></script>
</body>
</html>
`
// CSS content
const cssbody = `
/* CSS body */

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
    scrollbar-width: thin;
    overflow-x: hidden;
}

ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
a{
        
    font-weight:500;
    font-size: 1.25rem;
    text-decoration:none;
}
h1{
    margin: 0;
    padding: 0;
}
button{
    background-color: black;
    border: none;
    border-radius: 5px;
    max-width: 20vh;
    min-height: 3vh;
    color: white;
    margin: 0;
    padding: 0;
        cursor: pointer;
}    
`;

const csstitle = `

/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}

/* Title start */
.title-start {
    max-width: 100%;
    min-height: 10vh;
    margin: 0;
    font-weight: 600;
    padding: 0;
    display: flex;
    background-color:black;
    color: white;
    justify-content: space-between;
}
h1{
    font-weight: 600;
    font-size: 2rem;
}

.options-ul-top{
    
    color: white;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2vh;
    margin: 0;
    padding: 0;
}
.account-signin-ul{
    display: flex;
    gap: 3vh;
}
.options-ul-top button{
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 15vh;
    min-height: 5vh;
    color: black;
    margin: 0;
    padding: 0;
       cursor: pointer;
}    
`;

const cssmain = `

/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}
/*main content*/
.main-content{
    max-width: 100%;
    min-height: 100%;

}
.section-countainer{
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    max-width: 100%;
    min-height: 100%;


}
.section1{
    max-width: 100%;
    min-height: 5vh;
    text-wrap: balance;
margin: 20px 0px;
}

.section2{
    max-width: 100%;
    min-height: 5vh;
    margin: 20px 0px;
    text-wrap: balance;
}
.section3{
    max-width: 100%;
    min-height: 5vh;
    margin: 20px 0px;
    text-wrap: balance;
}
.section4{
    max-width: 100%;
    min-height: 5vh;
    margin: 20px 0px;
    text-wrap: balance;
}
`
const endcss = `
/* Root for font sizes */
:root {
    --fs-600: 2rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
}
.end-bottom{
    max-width: 100%;
    min-height: 10vh;
    background-color: black;

}
/*.section1-left{}*/

.section2-right{

max-width: 100%;
min-height: 100%;
margin: 0;
padding: 0;
}
.p1-end{

    color: white;
    max-width: 100%;
    min-height: 20vh;
    margin: 0;
padding: 0;
}
.options-ul-bottom{
    display: none;
    gap: 3vh;
    margin: 0;
padding: 0;
}
`
const cssres = `

@media(max-width:600px) {
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
        scrollbar-width: thin;
    }
    /*grid placement*/
    .options-ul-top{
        display: none;
    }
    .options-ul-bottom{
    
        display: grid;
        justify-content: center;
        grid-template-columns:repeat(6, 5vh) ;
     gap: 2vh;
     margin: 0;
padding: 0;
    }
    .section-countainer{
        display: grid;
        grid-template-columns: repeat(1 , 1fr);
        max-width: 100%;
        min-height: 100%;
    
    
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
    /*grid placement*/
    .options-ul-top{
    
        color: white;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2vh;
        margin: 0;
        padding: 0;
        margin: 0;
padding: 0;
    }
}
@media(min-width: 700px) {
    /* Body */
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    /*grid placement*/
    .options-ul-top{
        margin: 0;
        padding: 0;
        color: white;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 3vh;
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
    /*grid placement*/
    .options-ul-top{
        margin: 0;
        padding: 0;
        color: white;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2vh;
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
    /*grid placement*/
    .options-ul-top{
        margin: 0;
        padding: 0;
        color: white;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2vh;
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
        { path: path.join(process.cwd(), "js", "styling.js"), content: "// styling js file" + stylingjs },
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
        { path: path.join(process.cwd(), "html", "signup.html"), content: "<!-- sign up -->" + codewebsign },
        { path: path.join(process.cwd(), "html", "login.html"), content: "<!-- log in -->" + codeweblog },
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
        { path: path.join(process.cwd(), "styles", "end.css"), content: `/* End/bottom CSS */\n${endcss}` },
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
