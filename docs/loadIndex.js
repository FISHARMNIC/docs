
    window.addEventListener('load', function () {
    
    var template = `<!DOCTYPE html>
<html lang="en" style="background-color: rgb(72,72,72);">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HAM' Docs</title>
    <style>
        .body {
            --navbarw: 130px;
            background-color: rgb(72, 72, 72);
        }

        .sidenav {
            height: 100%;
            width: 10%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #323232;
            overflow-x: hidden;
            padding-top: 20px;
        }

        .sidenav a {
            padding: 6px 8px 6px 16px;
            text-decoration: none;
            font-size: 15px;
            /* color: #818181; */
            color: white;
            display: block;
        }

        .sidenav a:hover {
            color: #f1f1f1;
            background-color: rgb(150, 150, 150);
        }

        #__main__ {
            margin-left: 10% !important;
            background-color: rgb(72, 72, 72);
            padding-left: 1%;
            width: 78%;
        }

        #__link_train__ {
            background-color: rgb(72, 72, 72);
            color:white;
            margin-left: 10% !important;
            padding-left: 1%;
            width: 78%;
        }

        #__right__ {
            margin-left: 90%;
            height: 100%;
            width: 10%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #323232;
        }

        @media screen and (max-height: 450px) {
            .sidenav {
                padding-top: 15px;
            }

            .sidenav a {
                font-size: 18px;
            }
        }
    </style>

    <style>
        body {
            font-family: 'Lato';
            font-weight: normal;
            font-style: normal;
            color: rgb(255, 255, 255);
        }

        h1,
        h2,
        h3 {
            font-family: "Roboto Slab", serif !important;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;

        }

        a {
            color: rgb(184, 244, 255);
            text-decoration: none;
        }

        code {
            color: rgb(186, 242, 255);
            background-color: rgb(91, 91, 91);
        }

        pre>code,
        pre {
            background-color: rgb(106, 106, 106);
            color: rgb(255, 255, 255);
            border-radius: 10px;
        }

        pre {
            padding: 10px;
            width: 98%;
        }

        details>summary {
            list-style-type: none;
            padding: 0.5rem;
        }

        details>summary::-webkit-details-marker {
            display: none;
        }

        details>summary::before {
            content: '> ';
        }


        details[open]>summary::before {
            content: '< ';
        }

        details[open] {
            background-color: rgb(91, 91, 91);
        }

        details>summary:hover {
            background-color: rgb(150, 150, 150);
            cursor: pointer;
        }

        details[open]>summary {
            margin-bottom: 0.5rem;
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap">
</head>

<body style="background-color: rgb(72,72,72);">

    <div id="__link_train__"></div>
    <div class="sidenav">

        <a href="/docs/index.html">• index</a>
<a href="/docs/Notes.html">• Notes</a>
</details><details><summary>Arrays</summary><a href="/docs/Arrays/Usage.html">• Usage</a>
</details><details><summary>Dynamics</summary><a href="/docs/Dynamics/explanation.html">• explanation</a>
</details><details><summary>Examples</summary><a href="/docs/Examples/Demo.html">• Demo</a>
<a href="/docs/Examples/HowTo.html">• HowTo</a>
<a href="/docs/Examples/Structure.html">• Structure</a>
</details><details><summary>Formats</summary><a href="/docs/Formats/Class.html">• Class</a>
<a href="/docs/Formats/Usage.html">• Usage</a>
</details><details><summary>Functions</summary><a href="/docs/Functions/Builtins.html">• Builtins</a>
<a href="/docs/Functions/Calling.html">• Calling</a>
<a href="/docs/Functions/Declaring.html">• Declaring</a>
</details><details><summary>Keywords</summary><a href="/docs/Keywords/Borrow.html">• Borrow</a>
<a href="/docs/Keywords/Call.html">• Call</a>
<a href="/docs/Keywords/Ccalled.html">• Ccalled</a>
<a href="/docs/Keywords/Copy.html">• Copy</a>
<a href="/docs/Keywords/Define.html">• Define</a>
<a href="/docs/Keywords/Forward.html">• Forward</a>
<a href="/docs/Keywords/Import.html">• Import</a>
<a href="/docs/Keywords/Include.html">• Include</a>
<a href="/docs/Keywords/Own.html">• Own</a>
<a href="/docs/Keywords/Return_new.html">• Return_new</a>
<a href="/docs/Keywords/Rule.html">• Rule</a>
</details><details><summary>Libraries</summary><a href="/docs/Libraries/Bignums.html">• Bignums</a>
<a href="/docs/Libraries/Graphics.html">• Graphics</a>
</details><details><summary>Math</summary><a href="/docs/Math/Details.html">• Details</a>
<a href="/docs/Math/Math.html">• Math</a>
<a href="/docs/Math/Strings.html">• Strings</a>
</details><details><summary>Types</summary><a href="/docs/Types/Casting.html">• Casting</a>
<a href="/docs/Types/Floats.html">• Floats</a>
<a href="/docs/Types/Types.html">• Types</a>
</details><details><summary>Variables</summary><a href="/docs/Variables/Usage.html">• Usage</a>
<!-- !IN_NAV -->
    </div>

    <div id="__main__"></div>

    <div id="__right__"></div>


</body>

</html>`
    var oldBody = document.body.innerHTML
    document.write(template)
    document.getElementById("__main__").innerHTML = oldBody
    var _path = window.location.pathname.slice(1).split("/")
    var build = ""
    document.getElementById("__link_train__").innerHTML = _path.map(x => {return `<a href=${build += "/" + x}>${x}</a> >`}).join(" ").slice(0, -1)
    })
    