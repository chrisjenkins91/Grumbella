

//? This will grab the entire element by the ID name
//* ex. <h3 id="serviceAmazing"></h3>
let serviceHeading = document.getElementById("serviceAmazing");

console.log(serviceHeading);


//? Grabbing the id by multiple elements by className
//* Makes an array with all the elments with the specified classname
let serviceElements = document.getElementsByClassName("serviceIcons");

console.log(serviceElements);

let serviceSupport = document.querySelector(".amazingIcon h4");

console.log(serviceSupport);

//? Grabbing all the elements by css selection
//* Makes an array with all the elements with the specified classname
let serviceColumns = document.querySelectorAll(".serviceIcons h4");

console.log(serviceColumns);

//? Modify Elements section

//* if we want to add text .innerHTML
serviceHeading.innerHTML = "TextJS";

//? changing the text for a specific index in a NODECollection
serviceColumns[2].innerHTML = "Pizza";

//? Styling Elements
serviceSupport.style.color = "green";
serviceSupport.style.fontSize = "60px";



//! DOM Problems

//! 1. If mobile image is clicked, change navText color to 
//?Blue

let mobileImg = document.querySelector(".mobileImg");

console.log(mobileImg);

mobileImg.addEventListener("click", () => {
    //? THIS IS A ARRAY  LIST OF all the "a" tags
    let navText = document.querySelectorAll(".navbar a")
    console.log(navText);
    // navText[0].style.color = "blue";
    // navText[1].style.color = "blue";

    for (let i = 0; i < navText.length; i++) {
        navText[i].style.color = "blue";
    }
} )

//! 2. If Pizza is still on the page. Find where to revert it to original word

serviceColumns[2].innerHTML = "Design";

//? Grabbing a elements text value; 
let webTitle = document.querySelector(".webIcon h4").innerText;

//? This way works too
//* webTitle.innerText


console.log(webTitle);

//! Console.log("I'ma Mr.Portfolio") if Hovered over portfolio word on website

let portfolioJSText = document.getElementById("portfolioText");
console.log(portfolioJSText);

function mrPortfolio() {
    console.log("I'ma Mr.Portfolio");
}

portfolioJSText.addEventListener("mouseover", mrPortfolio);

//!4.

let greenPortfolioTags = document.querySelectorAll(".greenBoxSpan span p");
console.log(greenPortfolioTags);


//? HOW TO CHANGE THE BACKGROUND FOR THESE ELEMENTS V
greenPortfolioTags[0].style.backgroundColor ="purple";

function purpleTags() {
    for (let i = 0; i < greenPortfolioTags.length; i++) {
        const element = greenPortfolioTags[i]

        greenPortfolioTags[i].style.backgroundColor = "purple"
    }
}

purpleTags();

//! 5.

let mooImage = document.querySelector(".whitebox img");
console.log(mooImage);

mooImage[1].addEventListener("click", () => {
    let portfolioHeaders = document.querySelectorAll(".greenBoxSpan h5");
    console.log(portfolioHeaders);

    for (let i = 0; i < portfolioHeaders.length; i++) {
        const element = portfolioHeaders[i];

        portfolioHeaders[i].style.fontSize = "60px";
    }
})