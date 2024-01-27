// THE JS FUNCTIONS STARTS


// scrolling function begins here
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});

//scrolling function ends here

// menu toggle function begins here
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}
 // menu toggle function ends here


//text typer function begins here 
var i = 0,
text;
text = "Software Developer";

function typings() {
if (i < text.length) {
    document.getElementById("sayhi").innerHTML += text.charAt(i);
    i++;
}
setTimeout(typings, 200);
}
typings();

//text typer function ends here


//home div animation effect 
VanillaTilt.init(document.querySelector(".content"), {
max: 25,
speed: 400
});

var btn = document.getElementById("cv");
btn.addEventListener("click", function(){
  alert("file not uploaded");
});



//read more udsm

const box = document.querySelectorAll(".box");

box.forEach(function(item){

    const btn = item.querySelector(".btn");



    btn.addEventListener("click", function(){

        box.forEach(function(current){

            if (current !== item){

                current.classList.remove("show");
               
            }

        });

        item.classList.toggle("show");
        
      
    

    });
});


// dark-light theme
var icon = document.getElementById("icon");
var eduIcon = document.getElementById("eduIcon");
var expIcon = document.getElementById("expIcon");
var locIcon = document.getElementById("locIcon");
var top = document.getElementById("top");
var uiIcon = document.getElementById("uiIcon");
var phoneIcon = document.getElementById("phoneIcon");
var emailIcon = document.getElementById("emailIcon");


    icon.onclick = function() {

        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){

            icon.src = "images/sun.png";
            eduIcon.src = "images/graduate-2.png";
            expIcon.src = "images/explore-2.png";
            locIcon.src = "images/location-2.png";
            topIcon.src = "images/top-2.png";
            uiIcon.src = "images/ui-2.png";
            phoneIcon.src = "images/phone-2.png";
            emailIcon.src = "images/email-2.png";


        }else{
            icon.src = "images/moon.png";
            eduIcon.src = "images/graduate.png";
            expIcon.src = "images/explore.png";
            locIcon.src = "images/location.png";
            topIcon.src = "images/top.png";
            uiIcon.src = "images/ui.jpg";
            phoneIcon.src = "images/phone.png";
            emailIcon.src = "images/email.png";
        }


    }


//To top button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if(window.pageYOffset > 100){

        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }

})


//preloader 

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){

    loader.style.display = "none";
    
});



// THE JS FUNCTIONS ENDS
