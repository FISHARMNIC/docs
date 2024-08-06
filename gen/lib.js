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
const glob = require("glob")
const fse = require('fs-extra')

const showdown = require("showdown")
const path = require('path')

var converter = new showdown.Converter()
showdown.setFlavor('github')
showdown.setOption('ghCodeBlocks', true)

const r = converter.getOption('extensions') || {};
r.code = function (code, language) {
    // forces pre, no idea why it didn't show up in the first place?
    return `<pre><code class="language-${language}">${code}</code></pre>`
};

const rootPath = __dirname + "/.."
var allPages = []

const createTemplate = function (directory, useLinks = true) {
    var read = String(fs.readFileSync(directory))

    if (useLinks) {
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
    }



    fse.outputFileSync(`${rootPath}/website/template.html`, read)
    fse.outputFileSync(rootPath + "/website/loadIndex.js",
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
    //var allInDir = fs.readdirSync(directory)
    fse.emptyDirSync(rootPath + "/website")

    //console.log(rootPath + "/" + directory + 'pages/**/*')
    glob(rootPath + "/" + directory + '/**/*', function(err,res) {
        allInDir = res

    allInDir.forEach(x => {
        var parsed = path.parse(x)
        if (path.extname(x) != ".md") {
            console.log(`Skipping "${x}" because it is not of type ".md"`)
        } else if (allPages.includes(parsed.name)) {
            console.log(`Error: File "${x}" has already been created`)
            process.exit(0)
        }
        else {
            var timesNested = `${parsed.dir.slice(parsed.dir.indexOf(directory) + directory.length)}/${parsed.name}.html`.split("/").length - 2
        
            var html = converter.makeHtml(String(fs.readFileSync(x)))
            html += `\n</body>\n<script src="${"../".repeat(timesNested)}loadIndex.js"></script>`
            fse.outputFileSync(`${rootPath}/website/${parsed.dir.slice(parsed.dir.indexOf(directory) + directory.length)}/${parsed.name}.html`, html, { recursive: true })
            allPages.push(parsed.name)
        }
    })
});
}



module.exports = { rootPath, createTemplate, pagesFrom }