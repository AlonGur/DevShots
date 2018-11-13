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
    var firstLec=document.querySelector('.lectureItem');
    var copy=firstLec.cloneNode(true);
    lecItems.appendChild(copy);
/*
    var lecContent= `
    <img class="lectureItemPic" src="https://via.placeholder.com/100x100">
    <div class="lectureItemTextWrapper">
        <div class="lectureTitleBox">
        <span class="lectureItemTitle">חומריות בעולם הדיגיטלי</span><br>
        <span class="lectureItemSpeaker">דן לירון</span><br>
        </div>
        <p class="lectureItemText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare. Aliquet sagittis id consectetur purus ut. Nisi quis eleifend quam adipiscing. Nulla aliquet enim tortor at auctor urna nunc id. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Facilisis gravida neque convallis a cras semper auctor neque. Quis blandit turpis cursus in. Ut consequat semper viverra nam libero justo laoreet sit amet. Fermentum odio eu feugiat pretium. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Aliquam malesuada bibendum arcu vitae elementum curabitur. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Ante in nibh mauris cursus mattis molestie a iaculis. Porttitor rhoncus dolor purus non. </p>
    </div>`;
*/

}
for(i=0;i<6;i++){
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
