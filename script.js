const header = document.querySelector("header");
window.addEventListener ("scroll",function() {
    header.classList.toggle("sticky",window.screenY >100);
});

let slideindex = 1;

function plussides(n) {
    showslides(slideindex += n );
}

function showslides(n) {
    let slide = document.getElementsByClassName("About-img")
    let slide1 = document.getElementsByClassName("ประสบการณ์ฝึกงาน-img")
    if(n > slide.length) {
        slideindex = 1;
    }

    if (n < 1) {
        slideindex =slide.length;
    }

    for(let i =0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slideindex-1].style.display = 'block';

}

showslides(slideindex);