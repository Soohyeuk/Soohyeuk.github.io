const home = document.getElementById("home")
const about = document.getElementById("about")
const menu = document.getElementById('menu')
const service = document.getElementById("service")
const contact = document.getElementById("contact")

function scrollToY(scrollY) {
    window.scrollTo({
      top: scrollY,
      behavior: 'smooth'
    });
  }

function clicker(var_name, pixels) {
    var_name.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToY(pixels)
    });
};

clicker(home,0);
clicker(about,600);
clicker(service,1250);
clicker(menu,2250);
clicker(contact, 5000);


// const searchBar = document.getElementById("search")

// searchBar.addEventListener('click', function() {
    //comment 
// });


// about page will have three things: purpura definition, address and its clipboard button, and idk


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  var bool = true

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

  }



