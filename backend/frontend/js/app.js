const menu = document.querySelector(".nav-items");
const menuBtn = document.querySelector(".header-icon");
const menuBtnIcon = document.querySelector(".header-icon i");

menuBtn.addEventListener("click" , function (){
    if (menuBtnIcon.classList.contains(`fa-bars`)){
        menu.style.left = "0"
        menuBtnIcon.classList.remove(`fa-bars`)
        menuBtnIcon.classList.add(`fa-times`)
    } else {
        menu.style.left = "-288px"
        menuBtnIcon.classList.remove(`fa-times`)
        menuBtnIcon.classList.add(`fa-bars`)
    }
})

// show home page
function homePage(params) {
    console.log('clicked');
    fetch('http://127.0.0.1:8000/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}