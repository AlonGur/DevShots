//navbar click function
var navbar=document.querySelector('.navbar');
var navbarItems=document.querySelectorAll('.navbar li');
navbar.addEventListener("click",open);
function open(){
        navbarItems.forEach(hide(item){
           item.classList.toggle('hide2')
        });
    


//adding lecture items
function addLecture(){
    var lecItems=document.querySelector('.lectureItemsWrapper')
    lecItems.appendChild((lecItems.firstElementChild).cloneNode(true));
}
for(i=0;i<5;i++){
addLecture();

//adding useful info items
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

