const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const animal = "cat";

function complain(loud){
    console.log(loud)
}

complain("meow");

// Question 2

const heading = document.querySelector("h3");

console.log(heading.innerText);

heading.innerText = "Updated heading";


// Question 3

const heading3 = document.querySelector("h3");

console.dir(heading3.style);
heading3.style.fontSize = "2em";



// Question 4

const subheading = document.querySelector("h3");

console.log(subheading.className);

subheading.className = "subheading";

console.log(subheading.className);


// Question 5
const paragraphs = document.querySelectorAll("p");

for( let i = 0; i < paragraphs.length; i++){
    console.dir(paragraphs[i].style);
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

console.dir(resultsContainer.innerHTML)
resultsContainer.innerHTML = "<p>New paragraph</p>";

console.log(resultsContainer.style);
resultsContainer.style.backgroundColor = "yellow";


// Question 7

function list() {
    const name = 
}






// Question 8