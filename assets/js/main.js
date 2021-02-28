 // HEADER


// search

const search = document.getElementById("showSearch");
const searchTab = document.getElementById("searchTab");
const overlaySearch = document.getElementById("overlaySearch");

search.addEventListener("click", function(event){
    event.preventDefault();
    

    searchTab.classList.add("active")
    overlaySearch.classList.add("active")
});

const closeSearch = document.getElementById("closeSearch");

closeSearch.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();

    searchTab.classList.remove("active")
    overlaySearch.classList.remove("active")
});

// shopping cart 

const cart = document.getElementById("showCart");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

cart.addEventListener("click", function(event){
    event.preventDefault();
    
    
    modal.classList.add("active")
    overlay.classList.add("active")
});

const closeCart = document.getElementById("closeCart");
closeCart.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    
    if(modal.classList.contains("active")) {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
});

// navigation menu 

const nav = document.getElementById("showNav");
const navMenu = document.getElementById("navMenu");

nav.addEventListener("click", function(event){
    event.preventDefault();

    navMenu.classList.add("active")
});

const closeNav = document.getElementById("closeNav");

closeNav.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    
    if(navMenu.classList.contains("active")){
        navMenu.classList.remove("active");
    }
});


const navMenuTitle = document.querySelectorAll(".navigation__inner-title");

for(var i = 0; i < navMenuTitle.length; i++){

    navMenuTitle[i].addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
       
        var x = event.target;
        var title = x.getAttribute("data-view");

        if(title === "frisbees" ){
            if(!document.querySelector("." + title).classList.contains("active")){
                document.querySelector("." + title).classList.add("active");
            }else {
                document.querySelector("." + title).classList.remove("active");
            }
        }else if (title === "clothing") {
            if(!document.querySelector("." + title).classList.contains("active")){
                document.querySelector("." + title).classList.add("active");
            }else {
                document.querySelector("." + title).classList.remove("active");
            }
        }else {
            console.log("none")
        }

    });
}

//FOOTER

const showCategories = document.getElementById("showCategories");
const footerCategories = document.getElementById("footerCategories");


showCategories.addEventListener("click", function(event){
    event.preventDefault();

   if(!footerCategories.classList.contains("active")){
    footerCategories.classList.add("active")
    
   }else {
    footerCategories.classList.remove("active")
   }
   
});

const showContact = document.getElementById("showContact");
const footerContact = document.getElementById("footerContact");

showContact.addEventListener("click", function(event){
    event.preventDefault();

   if(!footerContact.classList.contains("active")){
    footerContact.classList.add("active")
  
    
   }else {
    footerContact.classList.remove("active")
    
   }
   
});