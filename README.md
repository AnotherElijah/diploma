<h1>Documentation</h1>

<h2>Step 1</h2>
<p>Make sure, that your project contains recommended by Bootstrap documentation classes. Especially be sure, that your navigations contain "nav" and "navbar-nav" classes. See example 1:</p>
<code>
&#60;nav class="navbar navbar-expand-lg navbar-light bg-light">
...
&#60;/nav>"
</code>

<p>Your carousel inner container should contain "carousel-inner" class:</p>
<code>
&#60;div class="carousel-inner">
            slides
&#60;/div>

</code>

<h2>Step 2</h2>
<a href="https://anotherelijah.github.io/ctrl-lib.zip">Download the library</a>

<h2>Step 3</h2>
Place the library in the root folder of your project (or next to your index.html file).

<h2>Step 4</h2>
Append library before body closing tag as follows:
<br>
<code>
&#60;script src="library/index.js" type="module">&#60;/script><br>
&#60;/body>
</code>

<h2>Step 5</h2>
Run <code>npm install</code> to install all the library dependencies

<h2>Step 6 (optional)</h2>
In case you have problems with automatic implementation of library ctrllib-index.css file,
just include it manually in the head tag as follows:
<code>
&#60;link rel="stylesheet" href="library/ctrllib-index.css"/>
</code>
<h2>Step 7 (optional)</h2>
<p>All the hints styles are available in the /library/ctrllib-index.css</p>
Highly recommended to adapt hints styles to your design to avoid any accessibility problems
