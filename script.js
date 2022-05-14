// Sidebar/toggle
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

document.getElementById("menubutton").addEventListener("click", showMenu);
let menu = document.querySelector("#menubutton div");

function showMenu(event){
    event.preventDefault();
    menu.classList.toggle("invisible");

}

const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Katso Amor-veikkoa, kun löysi kaksi heikkoa.";
});

// remove the child nodes from the list

function myFunction3() {
    const element = document.getElementById("myList");
    
    if (element.hasChildNodes()) {
      element.removeChild(element.childNodes[0]);
    }
  }
var x = document.getElementById("myDIV");


/*addEventListener() method to attach an "animationstart",
 "animationiteration" and "animationend" event*/
// Start the animation with JavaScript

var x = document.getElementById("myDIV");

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
  this.innerHTML = "Muista, että kovin vähän tarvitaan onnelliseen elämään.- Marcus Aurelius-";
  this.style.backgroundColor = "lightpink";
}

function myRepeatFunction() {
  this.innerHTML = "Onnellinen elämä rakentuu mielenrauhasta.-Marcus Tullius Cicero-";
  this.style.backgroundColor = "green";
}

function myEndFunction() {
  this.innerHTML = "Rakkaus on ainoa luonnonvara, joka lisääntyy kun sitä tuhlataan.-Tuntematon-";
  this.style.backgroundColor = "lightgray";
}
//JokeApi:

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


