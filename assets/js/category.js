//Grid or list

const links = document.querySelectorAll(".links ul li button");
const viewWraps = document.querySelectorAll(".view-wrap");
const butt = document.getElementById("icon-grid");

links.forEach(function(link){

    link.addEventListener("click", function(){
     
        links.forEach(function(item){
            item.classList.remove("active");
        })

        link.classList.add("active");
        

        var view = link.getAttribute("data-view");

        viewWraps.forEach(function(view){
            view.style.display = "none";
        })
        
        if(view === "grid-view"){
            document.querySelector("." + view).style.display = "grid";
        }else {
            document.querySelector("." + view).style.display = "grid";
        } 
    })
});

//Sidebar

const showSidebar = document.getElementById("showSidebar");
const sidebar = document.getElementById("sidebar");

showSidebar.addEventListener("click", function(event){
    event.preventDefault();

    sidebar.classList.add("active");
});

const closeSidebar = document.getElementById("closeSidebar");

closeSidebar.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();

    if(sidebar.classList.contains("active")){
        sidebar.classList.remove("active");
    }
});



const sidebarOptions = document.querySelectorAll(".layered-nav__list-title");

    for(var i = 0; i < sidebarOptions.length; i++){
        sidebarOptions[i].addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();

              var title = event.target;
              var x = title.getAttribute("data-view");
             
              if(x === "color"){
                if(!document.querySelector("." + x).classList.contains("active")){
                    document.querySelector("." + x).classList.add("active");
                }else {
                    document.querySelector("." + x).classList.remove("active");
                }
            } else if (x === "size") {
                if(!document.querySelector("." + x).classList.contains("active")){
                    document.querySelector("." + x).classList.add("active");
                }else {
                    document.querySelector("." + x).classList.remove("active");
                }
            } else if (x === "material"){
                if(!document.querySelector("." + x).classList.contains("active")){
                    document.querySelector("." + x).classList.add("active");
                }else {
                    document.querySelector("." + x).classList.remove("active");
                }
            }else if (x === "price"){
                if(!document.querySelector("." + x).classList.contains("active")){
                    document.querySelector("." + x).classList.add("active");
                }else {
                    document.querySelector("." + x).classList.remove("active");
                }
            }else {
                console.log("none");
            }
        });
    }   
    
    