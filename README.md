<h1>Simple jQuery Drills</h1>
<h2>Objective</h2>
<p>Practice using the fundamentals of jQuery that were explored in lecture.</p>
<h2>Setup</h2>
<ol>
<li>Create a new project folder and connect it to a GitHub repository. Initialize your project with a README.md that has a brief description of the purpose of this assignment, along with the title "jQuery Drills".</li>
<li>Create an index.html file and an app.js file and link the two together.</li>
<li>Create a script tag in the index.html and link to the jQuery CDN.</li>
</ol>
<h2>Tasks</h2>
<ol>
<li>In app.js, make sure all the HTML has loaded before using jQuery. (<a href="https://api.jquery.com/ready/" target="_blank">hint</a>)</li>
<li>Create an <code>&lt;input&gt;</code> with a <code>type="submit"</code>, <code>id="btnSubmit"</code>, and <code>value="Submit"</code> in the index.html. Open the <code>index.html</code> in a browser and verify that a button appears.</li>
<li>In app.js and use jQuery to select the <code>&lt;input&gt;</code> element you just created by the <code>id</code>.</li>
<li>Add a click event handler to the <code>&lt;input&gt;</code> button that will alert a message in the browser when the button is clicked. (<a href="http://api.jquery.com/on/" target="_blank">hint</a>)</li>
<li>In the index.html, create a <code>&lt;form&gt;</code> element with an <code>&lt;input type="text"&gt;</code> field and the <code>&lt;input type="submit"&gt;</code> you already created.</li>
<li>In app.js when the form is submitted, <a href="(https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)" target="_blank">alert</a> the value of the text input field. (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors" target="_blank">hint</a>) (<a href="http://api.jquery.com/val/" target="_blank">hint</a>)</li>
<li>If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled. (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled" target="_blank">hint</a>)</li>
<li>Create a <code>div</code> element and append it to the body.</li>
<li>When the user types in the input field and clicks submit, append the text in an h2 element to the div</li>
<li>When the user mouses over the h2 element, assign it a new background color and border radius. (<a href="http://api.jquery.com/css/" target="_blank">hint</a>)</li>
<li>Great job! Now, comment out the code for creating the h2 and we are going to work on creating a list instead</li>
<li>Use jQuery to create an unordered list and append it to the body</li>
<li>When the user submits the form, append the text as list item to the unordered list</li>
<li>When the user clicks on the li element, assign it a random color.</li>
<li>When the user double clicks on the list, remove the item that was clicked on. (<a href="https://api.jquery.com/remove/" target="_blank">hint</a>)</li>
</ol>
<h2>Hints</h2>
<ul>
<li>jQuery on method: <a href="http://api.jquery.com/on/" target="_blank">http://api.jquery.com/on/</a></li>
<li>jQuery click method: <a href="https://api.jquery.com/click/" target="_blank">https://api.jquery.com/click/</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank"><code>Math.random()</code></a> can be used to generate a random number
<ul>
<li>RGB colors range from <code>rgb(0, 0, 0)</code> for black to <code>rgb(255, 255, 255)</code> for white</li>
<li>You will want to generate 3 random numbers between 0 and 255 and set the RGB values using jQuery</li>
</ul></li>
</ul>
<h2>Submission</h2>
<ul>
<li>Commit your changes and push to your GitHub profile.</li>
</ul>