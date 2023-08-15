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

for (let i = 0; i < 100; i++) {
  const smallBox = document.createElement("div");
  div4Clone.appendChild(smallBox);
}

// section 5 clone
const section5Clone = section.cloneNode(true);
body.appendChild(section5Clone);

const num5Clone = section5Clone.querySelector(".number");
const div5Clone = section5Clone.querySelector("div");
num5Clone.textContent = "5";
div5Clone.textContent = "";

div5Clone.style.minHeight = "1.5em";

let isGhostVisible = false;

setInterval(function () {
  if (isGhostVisible) {
    div5Clone.textContent = "";
  } else {
    div5Clone.textContent = "👻";
  }

  isGhostVisible = !isGhostVisible;
}, 1000);

//section 6

const section6Clone = section.cloneNode(true);
body.appendChild(section6Clone);

const paragraph = document.createElement("p");
section6Clone.prepend(paragraph);

const rabbitContainer = section6Clone.querySelector("div");
const num6Clone = section6Clone.querySelector(".number");

rabbitContainer.setAttribute("class", "flex");

for (let i = 0; i < 20; i++) {
  const rabbitImage = document.createElement("img");
  rabbitContainer.appendChild(rabbitImage);
  rabbitImage.src = "./img/rabbit.png";
  rabbitImage.setAttribute("class", "rabbit");
  rabbitImage.style.width = "70px";
}

const h1 = document.createElement("h1");
rabbitContainer.after(h1);

num6Clone.textContent = "6";

//LAST PAGE

const lastSection = document.createElement("div");
body.appendChild(lastSection);
lastSection.setAttribute("class", "last");
lastSection.style.backgroundColor = "black";
lastSection.style.padding = "10px";

const lastWords = document.createElement("p");
lastSection.appendChild(lastWords);

let p = document.createElement("p");
let count = 180;
p.textContent = count;
let seconds = document.createElement("p");
seconds.textContent = "seconds.";

lastWords.textContent = `This page will self-destruct in`;

lastWords.appendChild(p);
lastWords.appendChild(seconds);

lastWords.style.fontSize = "100px";
lastWords.style.color = "red";
p.style.display = "inline";
p.style.paddingLeft = "15px;";
seconds.style.display = "inline";
seconds.style.paddingLeft = "15px";
// p.style.fontSize = "100px";
// p.style.color = "red";

const countDown = setInterval(() => {
  count--;
  p.textContent = count;

  if (count <= 0) {
    clearInterval(count);
    lastWords.textContent = "BOOM!";
  }
}, 1000);
