
//add event listener to navbar
var navbar=document.querySelector('.navbar');
navbar.addEventListener("click",open);

//navbar click function
function open(){
    var navbarItems=document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => item.classList.toggle('hide2'));
    }

//adding lecture items
function addLecture(numLec){
    for(i=1;i<numLec;i++){
    var lecItems=document.querySelector('.lectureItemsWrapper')
    lecItems.appendChild((lecItems.firstElementChild).cloneNode(true));
    }

    
}
{
addLecture(6);

//adding useful info items
}
usefulInfoItems=document.querySelectorAll('.usefulInfoItem');
function addUsefulInfoItem(){
    var content= `
    <div class="usefulPicWrapper">
    <img src="/images/ricknmorty.jpeg">
    </div>
    <span class="usefulInfoTitle">קורס HTML 5</span>
    <span class="usefulInfoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
    `;
    for(i=0;i<=9;i++){
        usefulInfoItems[i].innerHTML=content;
    }
   
}
addUsefulInfoItem()

//adding event listeners to useful items
for(i=0;i<usefulInfoItems.length;i++){
    usefulInfoItems[i].addEventListener("click",opengoogle)

}
function opengoogle(){
    window.open(www.google.com)
}