var navbar=document.querySelector('.navbar');
var navbarItems=document.querySelectorAll('.navbar li');
navbar.addEventListener("click",open);
function open(){
    for(i=0;i<navbarItems.length;i++){
        navbarItems[i].classList.toggle('hide2');
    }
};

function addLecture(){
    var lecItems=document.querySelector('.lectureItemsWrapper')
    lecItems.appendChild((lecItems.firstElementChild).cloneNode(true));
}
for(i=0;i<5;i++){
addLecture();


}
usefulInfoItems=document.querySelectorAll('.usefulInfoItem');
function addUsefulInfoItem(){
    var content= `
    <img src="https://via.placeholder.com/100x100">
    <span class="usefulInfoTitle">קורס HTML 5</span>
    <span class="usefulInfoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
    `;
    for(i=0;i<=9;i++){
        usefulInfoItems[i].innerHTML=content;
    }
}
addUsefulInfoItem();

function getFib(n){
    if (n===1 || n===2){
        return(1) }
    else{
        return(getFib(n-1)+getFib(n-2))
    };
}
