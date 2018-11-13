var navbar=document.querySelector('.navbar');
var navbarItems=document.querySelectorAll('.navbar li')
navbar.addEventListener("click",open);
function open(){
    for(i=0;i<navbarItems.length;i++){
        navbarItems[i].classList.toggle('hide2');
    }
    console.log('open activated');
}
fullLec=document.querySelector('lectureItem');
lectures=document.querySelector('test');
var cont='<p>test</p>'
lectures.innerHTML=cont;
