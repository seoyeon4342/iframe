document.addEventListener("DOMContentLoaded", () => {


    const header = document.querySelector("#top header");
    const navBtn = document.querySelector("header button");
    const nav = document.querySelector("header nav");
    const iframe = window.parent.document.getElementById("header");



    let i = 0;
    const navSlide = () => {
        if(i == 0){
            iframe.classList.add("slide");
        navBtn.textContent = "close";
        i++;
        } else navHide();
        
    }

    const navHide = () => {
        iframe.classList.remove("slide");
        navBtn.textContent = "menu";
        i = 0;
    }


    navBtn.addEventListener("click", navSlide);
    header.addEventListener("click", navHide);



});///end