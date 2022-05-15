// Sidebar/toggle
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


// remove the child nodes from the list (h-hetkenä.html)

function myFunction2() {
  const element = document.getElementById("myList2");
  
  if (element.hasChildNodes()) {
    element.removeChild(element.childNodes[0]);
  }
}

function myFunction3() {
    const element = document.getElementById("myList3");
    
    if (element.hasChildNodes()) {
      element.removeChild(element.childNodes[0]);
    }
  }

  function myFunction4() {
    const element = document.getElementById("myList4");
    
    if (element.hasChildNodes()) {
      element.removeChild(element.childNodes[0]);
    }
  }


 /*addEventListener() method to attach an "animationstart",
 "animationiteration" and "animationend" event*/
  
 
 var x = document.getElementById("myDIV1");

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
   this.innerHTML = "Hellät sanat ovat yhdysside kahden sydämen välillä.-Itämainen sananlasku-";
   this.style.backgroundColor = "pink";
 }
 
 function myRepeatFunction() {
   this.innerHTML = "Muista, että kovin vähän tarvitaan onnelliseen elämään.- Marcus Aurelius-";
   this.style.backgroundColor = "lightblue";
 }
 
 function myEndFunction() {
   this.innerHTML = "Rakkaus on ainoa luonnonvara, joka lisääntyy kun sitä tuhlataan.-Tuntematon-";
   this.style.backgroundColor = "lightgray";
 }

//onmouseenter Event
 function mouseEnter() {
  document.getElementById("demo3").style.color = "pink";
}

function mouseLeave() {
  document.getElementById("demo3").style.color = "black";
}

document.getElementById("teksti1").innerHTML = 
       "Tämä sivu sisältää pari linkkiä kuvauksiin liittyen";