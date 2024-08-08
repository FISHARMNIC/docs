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

const pagesFrom = function (directory, template, useLinks = true) {
    //var allInDir = fs.readdirSync(directory)
    fse.emptyDirSync(rootPath + "/website")

    //console.log(rootPath + "/" + directory + 'pages/**/*')
    glob(rootPath + "/" + directory + '/**/*', function (err, res) {
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
                var lclPath = parsed.dir.slice(parsed.dir.indexOf(directory) + directory.length)
                var timesNested = `${lclPath}/${parsed.name}.html`.split("/").length - 2

                var html = converter.makeHtml(String(fs.readFileSync(x)))
                html += `\n</body>\n<script src="${"../".repeat(timesNested)}loadIndex.js"></script>`
                fse.outputFileSync(`${rootPath}/website/${lclPath}/${parsed.name}.html`, html, { recursive: true })
                allPages.push(lclPath + "/" + parsed.name)
                //allPages.push("hi")
                //console.log("bob")
            }
        })

        var read = String(fs.readFileSync(template))

        var parent = "/"

        if (useLinks) {
            var insertLinks = read.indexOf("<!-- !IN_NAV -->")
            if (insertLinks == -1) {
                console.log('In your template, you must insert the phrase "<!-- !IN_NAV -->" inside of the sidenav')
                process.exit(0)
            }

            var insertRead = function(x) {
                read = read.slice(0, insertLinks) + x + read.slice(insertLinks);
            }
    
            allPages.sort((a, b) => a.split("/").length - b.split("/").length)
    
            var outBuffer = []
            var lastParentDir = ""
            allPages.forEach(x => {
    
                if (x == "index") {
                    return
                }

                var parentDir = x.slice(1, x.slice(1).indexOf("/") + 1)
                var _name = x.slice(x.indexOf(parentDir) + parentDir.length + 1)

                if(lastParentDir != parentDir) {
                    console.log("SWAP")
                    outBuffer.push(`</details><details><summary>${parentDir}</summary>`)
                }
                console.log("name", _name, "...parent...", parentDir)

                outBuffer.push(`<a href="/website${x}.html">• ${_name}</a>\n`)
                //read = read.slice(0, insertLinks) + `<a href="${x}.html">${x}</a>\n` + read.slice(insertLinks);
                lastParentDir = parentDir
            })

            console.log(outBuffer)
            read = read.slice(0, insertLinks) + outBuffer.join("") + read.slice(insertLinks);
        }
    

        fse.outputFileSync(`${rootPath}/website/template.html`, read)
        fse.outputFileSync(rootPath + "/website/loadIndex.js",
            `
    window.addEventListener('load', function () {
    
    var template = \`${read}\`
    var oldBody = document.body.innerHTML
    document.write(template)
    document.getElementById("__main__").innerHTML = oldBody
    var _path = window.location.pathname.slice(1).split("/")
    var build = ""
    document.getElementById("__link_train__").innerHTML = _path.map(x => {return \`<a href=\${build += "/" + x}>\${x}</a> >\`}).join(" ").slice(0, -1)
    })
    `
        )

    });
}



module.exports = { rootPath, pagesFrom }