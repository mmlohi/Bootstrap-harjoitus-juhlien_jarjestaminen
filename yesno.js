
  //Cat Api

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

// Sidebar/toggle
$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});



const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Katso Amor-veikkoa, kun löysi kaksi heikkoa.";
});

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

//Simulate a mouseover event:

function myFunction2(event) {
    const ev = document.createEvent("MouseEvent");
    ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  
    document.getElementById("myDiv").dispatchEvent(ev);
  }

