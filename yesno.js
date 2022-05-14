// JokeAPI

console.log(Object.values(JokeAPI));

JokeAPI.getJokes({
  jokeType: "single"
})
  .then((r) => r.json())
  .then((data) => {
    updateUI(data);
  });

// To update the joke on the UI
function updateUI(jokeData) {
  const $ = (id) => document.getElementById(id);

  $("joke--text").innerHTML = jokeData.joke;
}


const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction1);

function myFunction1() {
  document.getElementById("demo").innerHTML = "Katso Amor-veikkoa, kun löysi kaksi heikkoa.";
}

var x = document.getElementById("myDIV");


/*addEventListener() method to attach an "animationstart",
 "animationiteration" and "animationend" event*/
// Start the animation with JavaScript
function myFunction() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "lightpink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "green";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}

document.getElementById("menubutton").addEventListener("click", showMenu);
let menu = document.querySelector("#menubutton div");

function showMenu(event){
    event.preventDefault();
    menu.classList.toggle("invisible");

}

function insertElement() {
    // Creating a new div element 
    var newDiv = document.createElement("div");
     
    // Creating a text node 
    var newContent = document.createTextNode("Hi, how are you doing?");
     
    // Adding the text node to the newly created div
    newDiv.appendChild(newContent);
     
    // Adding the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("main"); 
    document.body.appendChild(newDiv, currentDiv);
}	