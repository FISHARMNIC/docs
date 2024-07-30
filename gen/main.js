var build = require("./lib.js")

build.pagesFrom(build.rootPath + "/resources/pages")

// has to be at end
build.createTemplate(build.rootPath + "/resources/mandatory/template.html")
