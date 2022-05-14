
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
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
  this.innerHTML = "Sait rakkaimman ihmisen rinnallesi kulkemaan";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightgreen";
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