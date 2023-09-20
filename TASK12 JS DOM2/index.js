 p = document.getElementsByTagName("p")[0];
let div = document.querySelector('div')
console.log(div)
p.remove();

// Create the div element
let startElement = document.createElement("div");
startElement.className = "start";
startElement.title = "Start Element";
 startElement.dataset.value = "Start";
startElement.textContent = "Start";

// Append the div element to the document body
document.body.appendChild(startElement);

// Create the div element
let endElement = document.createElement("div");
endElement.className = "end";
endElement.title = "End Element";
 endElement.dataset.value = "End";
endElement.textContent = "End";

// Append the div element to the document body
document.body.appendChild(endElement);

div.before(startElement)
div.after(endElement)

// next4
let myDiv = document.getElementsByTagName("div"[3]);
console.log(myDiv.lastChild);


// next 5

document.addEventListener("click", function(e) {
    console.log(`This Is Element Type ${e.target.tagName}`);
})