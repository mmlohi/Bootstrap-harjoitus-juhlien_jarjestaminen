
  //CAT API (muuta.html)

  new Vue({ 
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        image: { url: ""}
    },
    created(){
        this.loadNextImage();
    } ,
    methods:{
        async loadNextImage()
        {
            try{
                axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key

                let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ) // Ask for 1 Image, at full resolution
                
                this.image = response.data[0] // the response is an Array, so just use the first item as the Image

                console.log("-- Image from TheCatAPI.com")
                console.log("id:", this.image.id)
                console.log("url:", this.image.url)

            }catch(err){
                console.log(err)
            }
        }
    }
})

// SIDEBAR/TOGGLE (all sides)

$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});


//EXECUTE A FUNCTION WHEN A USER CLICKS ON A BUTTON (muuta.html)

 // Selecting button element
 var btn1 = document.getElementById("myBtn1");
  
 // Defining custom functions
 function sayHello() {
     alert("Kiitos, kun klikkasit, toivottavasti olet pitänyt sivujeni sisällöstä, mukavaa päivää sinulle!");
 }
  
 function setHoverColor() {
     btn1.style.background = "green";
 }
  
 function setNormalColor() {
     btn1.style.background = "pink";
 }

//ATTACH A CLICK EVENT TO A BUTTON (muuta.html)

const element = document.getElementById("myBtn2");
element.addEventListener("click", function() {
  document.getElementById("demo1").innerHTML= "Katso Amor-veikkoa, kun löysi kaksi heikkoa.";
});


//CREATE EVENT: SIMULATE A MOUSEOVER EVENT (muuta.html)

function myFunction2(event) {
    const ev = document.createEvent("MouseEvent");
    ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  
    document.getElementById("myDiv").dispatchEvent(ev);
  }


// ASSINGNING EVENT LISTENERS TO THE BUTTON (muuta.html/alert)

btn1.addEventListener("click", sayHello);
btn1.addEventListener("mouseover", setHoverColor);
btn1.addEventListener("mouseout", setNormalColor);


//MOUSEENTER EVENT (muuta.html)

var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted pink';
  enterEventCount++;
  addListItem('Kiitos sinulle! ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('Nähdään taas! ' + leaveEventCount + '.');
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}

// CHANGE THE COLOR OF THE H3 AND ITS ALIGN THE PAGE (muuta.html)

const title = document.getElementsByTagName('h3')[1];
title.style.color = 'green'
title.style.textAlign = 'center';