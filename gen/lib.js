/*
This is a quick library that takes a directory of .md and converts it to a website
    - Meant to work like "Read the Docs" but I hated how it used Python and Sphinx
    - Requires a "template.html", which is loaded into each link
        - Must have these 2 elements in body:

        1 | <div class="sidenav">
          |     <a href="index.html">Home</a>
          |     <!-- !IN_NAV -->
          | </div>
          * The "!IN_NAV" comment is crucial since it tells this lib where to insert the navbar elements
      
        2 | <div id="__main__"></div>
          * This is where the main area is loaded
*/

const fs = require("fs")
const showdown = require("showdown")
const path = require('path');

var converter = new showdown.Converter()
showdown.setFlavor('github');
showdown.setOption('ghCodeBlocks', true)

const r = converter.getOption('extensions') || {};
r.code = function (code, language) {
    // forces pre, no idea why it didn't show up in the first place?
    return `<pre><code class="language-${language}">${code}</code></pre>`
};

const rootPath = __dirname + "/.."
var allPages = []

const createTemplate = function (directory) {
    var read = String(fs.readFileSync(directory))
    var insertLinks = read.indexOf("<!-- !IN_NAV -->")
    if (insertLinks == -1) {
        console.log('In your template, you must insert the phrase "<!-- !IN_NAV -->" inside of the sidenav')
        process.exit(0)
    }

    allPages.forEach(x => {

        if (x == "index") {
            return
        }
        read = read.slice(0, insertLinks) + `<a href="${x}.html">${x}</a>\n` + read.slice(insertLinks);
    })



    fs.writeFileSync(`${rootPath}/template.html`, read)
    fs.writeFileSync(rootPath + "/loadIndex.js",
        `
window.addEventListener('load', function () {

var template = \`${read}\`
var oldBody = document.body.innerHTML
document.write(template)
document.getElementById("__main__").innerHTML = oldBody

})
`
    )
}

const pagesFrom = function (directory) {
    var allInDir = fs.readdirSync(directory)

    allInDir.forEach(x => {
        var parsed = path.parse(x)
        if (path.extname(x) != ".md") {
            console.log(`Skipping "${x}" because it is not of type ".md"`)
        } else if (allPages.includes(parsed.name)) {
            console.log(`Error: File "${x}" has already been created`)
            process.exit(0)
        }
        else {
            var rootDirX = x = directory + "/" + x
            var html = `<link rel="stylesheet" href="resources/stylesheet.css">\n` + converter.makeHtml(String(fs.readFileSync(rootDirX)))
            html += `\n<script src="loadIndex.js"></script>`
            fs.writeFileSync(`${rootPath}/${parsed.name}.html`, html)
            allPages.push(parsed.name)
        }
    })
}



module.exports = { rootPath, createTemplate, pagesFrom }