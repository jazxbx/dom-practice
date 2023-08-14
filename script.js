// Look for body using querySelector
const body = document.querySelector("body");

// create section and adding it to body
const section = document.createElement("section");
body.appendChild(section);

// create num and div elements
const num = document.createElement("h1");
num.textContent = "1";
num.setAttribute("class", "number");
// Hr below num element
num.style.borderBottom = "1px solid grey";
num.style.paddingBottom = "21.40px";

const div = document.createElement("div");
console.log();
// Add div and num into section element
section.appendChild(div);
section.appendChild(num);

// section 2 clone
const section2Clone = section.cloneNode(true);
body.appendChild(section2Clone);
// look for div and number and assign to variable
const div2Clone = section2Clone.querySelector("div");
const num2Clone = section2Clone.querySelector(".number");

num2Clone.textContent = "2";
div2Clone.setAttribute("class", "square");
div2Clone.style.width = "50px";
div2Clone.style.height = "50px";
div2Clone.style.backgroundColor = "blue";

//section 3 clone

const section3Clone = section.cloneNode(true);
body.appendChild(section3Clone);

const num3Clone = section3Clone.querySelector(".number");
const div3Clone = section3Clone.querySelector("div");
const memeImage = document.createElement("img");
memeImage.src = "./img/meme.jpg";
// add image to div3clone
div3Clone.appendChild(memeImage);

//css to div3Clone
div3Clone.style.width = "300px";
//contain image to div
memeImage.style.width = "100%";
memeImage.style.objectFit = "contain";

num3Clone.textContent = "3";

//section 4 clone

const section4Clone = section.cloneNode(true);
body.appendChild(section4Clone);

const num4Clone = section4Clone.querySelector(".number");
const div4Clone = section4Clone.querySelector(`div`);
//add class = "flex" to div4
div4Clone.setAttribute("class", "flex");
//flex item
const smallBox = document.createElement("div");
div4Clone.appendChild(smallBox);

num4Clone.textContent = "4";
