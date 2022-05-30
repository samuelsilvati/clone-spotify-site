const mobileMenu = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".mobile-menu-list");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuList.classList.toggle("active");
  if (menuList.classList.contains("active")) {
    document.body.style.overflow = 'hidden';
  }else {
    document.body.style.overflow = 'auto';
  }
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  mobileMenu.classList.remove("active");
  menuList.classList.remove("active");
  document.body.style.overflow = 'auto';  
}))


ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 600})
  .reveal('.offer');

