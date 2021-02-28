// gallery 

var productImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("small-img");


    smallImg[0].addEventListener("click", function(event){
        event.preventDefault();

        productImg.src = smallImg[0].src;
    });
    smallImg[1].addEventListener("click", function(event){
        event.preventDefault();

        productImg.src = smallImg[1].src;
    });
    smallImg[2].addEventListener("click", function(event){
        event.preventDefault();

        productImg.src = smallImg[2].src;
    });

const small = document.querySelectorAll(".small-img");

small.forEach(function(img){

    img.addEventListener("click", function(){
      
        small.forEach(function(item){
            item.classList.remove("active");
        })
        img.classList.add("active");
    })
})
     
// info about product

function openInformation(informationName) {
  var x = document.getElementsByClassName("information");
  var i;
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(informationName).style.display = "block";  
}

// select color

const colors = document.querySelectorAll(".product__color");

colors.forEach(function(color){

    color.addEventListener("click", function(){
      
        colors.forEach(function(item){
            item.classList.remove("active");
        })
        color.classList.add("active");
    })
})


// get Data from product

function handleFormSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target);
  
  const value = Object.fromEntries(data.entries());

  
  console.log(value);
}

const form = document.querySelector('#productInfo');
form.addEventListener('submit', handleFormSubmit);
