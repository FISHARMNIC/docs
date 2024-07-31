
window.addEventListener('load', function () {

var template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="resources/mandatory/template.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap">
    <link rel="stylesheet" href="resources/stylesheet.css">
</head>
<body style="background-color: rgb(72,72,72);">
    <div class="sidenav">
        <a href="index.html">Home</a>
        <a href="Variables.html">Variables</a>
<a href="Types.html">Types</a>
<a href="Notes.html">Notes</a>
<a href="Keywords.html">Keywords</a>
<a href="HowTo.html">HowTo</a>
<a href="Demo.html">Demo</a>
<!-- !IN_NAV -->
    </div>
      
    <div id="__main__"></div>

    <div id="__right__"></div>

      
</body>
</html>`
var oldBody = document.body.innerHTML
document.write(template)
document.getElementById("__main__").innerHTML = oldBody

})
