var navbar=document.querySelector('.navbar');
var navbarItems=document.querySelectorAll('.navbar li')
navbar.addEventListener("click",open);
function open(){
    for(i=0;i<navbarItems.length;i++){
        navbarItems[i].classList.toggle('hide2');
    }
    console.log('open activated');
}

var lectureItemContent= <img class="lectureItemPic" src="https://via.placeholder.com/100x100">

lecture=document.querySelector("lectureItem")

lecture.innerHTML=