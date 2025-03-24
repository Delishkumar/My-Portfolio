const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

 // slidemenu//
 document.getElementById("cut").addEventListener("click",function(){
  document.querySelector(".slidelists").style.display="none"
})

document.getElementById("menubutn").addEventListener("click",function(){
  document.querySelector(".slidelists").style.transform= "translateX(-10px)";
})