// JavaScript Document

// dit is de code voor het eerste hartje bij recepten op de homepagina

var hartje1 = document.querySelector(".recepten > div:nth-of-type(1) svg");

function toggleHartje1() {
    hartje1.classList.toggle("hartjeAnimation")
}

hartje1.addEventListener("click",toggleHartje1);

// dit is de code voor het tweede hartje bij recepten op de homepagina

var hartje2 = document.querySelector(".recepten > div:nth-of-type(2) svg");

function toggleHartje2() {
    hartje2.classList.toggle("hartjeAnimation")
}

hartje2.addEventListener("click",toggleHartje2);

// dit is de code voor het derde hartje bij recepten op de homepagina

var hartje3 = document.querySelector(".recepten > div:nth-of-type(3) svg");

function toggleHartje3() {
    hartje3.classList.toggle("hartjeAnimation")
}

hartje3.addEventListener("click",toggleHartje3);
