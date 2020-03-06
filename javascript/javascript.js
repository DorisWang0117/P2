function displayMenu(){
    var x=document.getElementById("nav-bar");
    if(x.style.display==""){
      x.style.display="block"
    }else{
      x.style.display=""
    }
  }

 window.onscroll = function() { myFunction() };

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function displayMenu(){
      var x=document.getElementById("nav-bar");
      if(x.style.display==""){
        x.style.display="block"
      }else{
        x.style.display=""
      }
    }

      function changePic(fileName){
        document.querySelector("#item-image").src="images/" + fileName
      }

function addCart(){
  document.querySelector('.alert').style.display='block';
  document.querySelector('.alert').className += ' animation';
}