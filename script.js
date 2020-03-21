//Главное меню///////////////////////////////////////////////////////
let nav__items = document.querySelectorAll(".nav__item");

for(let i = 0; i < nav__items.length; i++){
    nav__items[i].addEventListener('click', currentNavItem);
}

function currentNavItem(){
    let current = document.querySelector(".current-nav");
    current.className = "nav__item";
    this.className = "nav__item current-nav";    
}
//////////////////////////////////////////////////////////////////////

//Экраны//////////////////////////////////////////////////////////////
let bright1 = 0.9;
let interval1 = 0;
let lButton = document.querySelector(".left__button");
let left__display = document.querySelector("#left__display__pic");
lButton.addEventListener('click', function(e){
    
    if( bright1 > 0){
        interval1 = setInterval(function(){
            bright1 -= 0.3;
            left__display.style.filter = `brightness(${bright1})`;
        }, 40);
    }
    else {
        clearInterval(interval1);
        left__display.style.filter = "";
        bright1 = 0.9;
    }
    
});

let bright2 = 0.9;
let interval2 = 0;
let rButton = document.querySelector(".right__button");
let right__display = document.querySelector("#right__display__pic");
rButton.addEventListener('click', function(e){
    if(bright2 > 0){
        interval2 = setInterval(function(){
            bright2 -= 0.3;
            right__display.style.filter = `brightness(${bright2})`;
        }, 40);
    }
    else {
        clearInterval(interval2);
        right__display.style.filter = "";
        bright2 = 0.9;
    }
});
//////////////////////////////////////////////////////////////////////

//Модальное окно//////////////////////////////////////////////////////
let name = document.querySelector("#nameQuote");  
let email = document.querySelector("#emailQuote"); 

let modal = document.querySelector("#myModal");
let modalContent = document.querySelector(".modal__content");
let btnOk = document.querySelector("#okBtn");
let submit = document.querySelector("#submit");
let subj = document.querySelector("#subjQuote");
let text = document.querySelector("#textAreaQuote");
let msg = document.createElement('div');

submit.addEventListener('click', function(e){
    if(name.value != "" && email.value != ""){
        modal.style.display = "block";
    if(subj.value == "" && text.value !=""){
        msg.innerHTML = `<p>Письмо отправлено</p><p>Без темы</p><p>Описание: ${text.value}</p>`;
    }

    else if(subj.value != "" && text.value ==""){
        msg.innerHTML = `<p>Письмо отправлено</p><p>Тема: ${subj.value}</p><p>Без описания</p>`;
    }

    else if(subj.value == "" && text.value ==""){
        msg.innerHTML = `<p>Письмо отправлено</p><p>Без темы</p><p>Без описания</p>`;
    }
    
    else{
        msg.innerHTML = `<p>Письмо отправлено</p><p>Тема: ${subj.value}</p><p>Описание: ${text.value}</p>`;
    }
    
    modalContent.prepend(msg);
    }
    
});

btnOk.addEventListener('click', function(e){
    modal.style.display = "none";
    msg.remove();
});

window.addEventListener('click', function(e){
    if(e.target == modal){
        modal.style.display = "none";
        msg.remove();
    }
})
//////////////////////////////////////////////////////////////////////

//Меню галереи////////////////////////////////////////////////////////
let nav__gallery__items = document.querySelectorAll(".gallery__menu__list__item ");
let gallery = document.querySelector(".gallery");
let portfolio = document.querySelector(".portfolio");
let row4 = document.querySelectorAll(".gl-str-4");
let res = [];
let idArr = [];

let newRow1 = document.createElement('div');
newRow1.className = "gl-str-4";
let newRow2 = document.createElement('div');
newRow2.className = "gl-str-4";
let newRow3 = document.createElement('div');
newRow3.className = "gl-str-4";
let newRow4 = document.createElement('div');
newRow4.className = "gl-str-4";

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


for(let i = 0; i < nav__gallery__items.length; i++){
    nav__gallery__items[i].addEventListener('click', currentNavGlItem);
}

function currentNavGlItem(){
    let current = document.querySelector(".current");
    current.className = "gallery__menu__list__item";
    this.className = "gallery__menu__list__item  current"; 
    idArr = [];
    for(let i = 9; i < 13; i++){
        idArr.push(i);
    }
    shuffle(idArr);
    newRow1.innerHTML = `<img class='gallery__item' src='assets/Project${idArr[0]}.png' alt=''></img>`;
    newRow2.innerHTML = `<img class='gallery__item' src='assets/Project${idArr[1]}.png' alt=''></img>`;
    newRow3.innerHTML = `<img class='gallery__item' src='assets/Project${idArr[2]}.png' alt=''></img>`;
    newRow4.innerHTML = `<img class='gallery__item' src='assets/Project${idArr[3]}.png' alt=''></img>`;
    for(let j = 0; j < row4.length; j++){
        row4[j].remove();
        gallery.append(newRow1);
        gallery.append(newRow2);
        gallery.append(newRow3);
        gallery.append(newRow4);
    }
    
    
}
//////////////////////////////////////////////////////////////////////

//Элементы галереи///////////////////////////////////////////////////
let gallery__item = document.querySelectorAll(".gallery__item");
for(let i = 0; i < gallery__item.length; i++){
    gallery__item[i].addEventListener('click', currentGlItem);
    }
        function currentGlItem(){
        if(document.querySelector(".current-border") == null){
            this.className = "gallery__item current-border";
            
        }
        else{
            let current = document.querySelector(".current-border");
            current.className = "gallery__item";
            this.className = "gallery__item current-border";
        }
    }   
//////////////////////////////////////////////////////////////////////

//Слайдер/////////////////////////////////////////////////////////////
let left__phone = document.querySelector(".left__phone");
let right__phone = document.querySelector(".right__phone");
let left__arrow = document.querySelector(".left__arrow");
let right__arrow = document.querySelector(".right__arrow");
let slide__2 = document.querySelector("#slide-2");
let slider = document.querySelector(".slider__block");
let sliderIn = document.querySelector(".slider__block__inner");

left__arrow.addEventListener('click', function(e){
    if(slide__2.style.display == ""){
        left__phone.style.display = "none";
        right__phone.style.display = "none";
        slide__2.style.display = "block";
        slider.style.backgroundColor = "#648bf0";
    }
    else{
        left__phone.style.display = "block";
        right__phone.style.display = "flex";
        slide__2.style.display = "";
        slider.style.backgroundColor = "#f06c64";
    }
});

right__arrow.addEventListener('click', function(e){
    if(slide__2.style.display == ""){
        left__phone.style.display = "none";
        right__phone.style.display = "none";
        slide__2.style.display = "block";
        slider.style.backgroundColor = "#648bf0";
    }
    else{
        left__phone.style.display = "block";
        right__phone.style.display = "flex";
        slide__2.style.display = "";
        slider.style.backgroundColor = "#f06c64";
    }
});
//////////////////////////////////////////////////////////////////////
