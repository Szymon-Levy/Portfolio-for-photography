const offcanvasToggler = document.querySelector(".offcanvas-toggler");
const navigation = document.querySelector(".nav");

offcanvasToggler.addEventListener("click", () =>{
    navigation.classList.toggle("active");
    offcanvasToggler.classList.toggle("active");
});