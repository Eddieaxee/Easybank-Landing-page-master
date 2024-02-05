

function openNav() {
  var x = document.getElementById("myNav")
  if(x.style.display == "block") {
      x.style.display = "none";
  }
  else {
    x.style.display="block";
  }
  document.getElementById("myNav").style.boxShadow = "0 4px 40px 50px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  document.getElementById("myNav").style.transition = "transform 0.5s ease-in-out"
  
}

function myFunction(x) {
  x.classList.toggle("change");
}