const fs = require("fs")
const showdown = require("showdown")
var converter = new showdown.Converter()
const path = require('path');

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

        if (x == "index")
        {
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
            var html = converter.makeHtml(String(fs.readFileSync(rootDirX)))
            html += `\n<script src="loadIndex.js"></script>`
            fs.writeFileSync(`${rootPath}/${parsed.name}.html`, html)
            allPages.push(parsed.name)
        }
    })
}



module.exports = { rootPath, createTemplate, pagesFrom }