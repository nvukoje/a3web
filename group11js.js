/* Navbar for smaller screens*/
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("showblock") == -1) {
      x.className += "showblock";
    } else { 
      x.className = x.className.replace("showblock", "");
    }
  }