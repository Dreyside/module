// function toggleMobileMenu(menu) {
//   menu.classList.toggle('open');
// }
let mobileMenu = document.getElementById('mobile-menu');
let hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerIcon.addEventListener('click', function(){
  if(mobileMenu.style.display == "none"){
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }

})

