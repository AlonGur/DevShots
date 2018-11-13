
//add event listener to navbar
var navbar=document.querySelector('.navbar');
navbar.addEventListener("click",open);

//navbar click function
function open(){
    var navbarItems=document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => item.classList.toggle('hide2'));
    }
//var win=window.open('/images/ricknmorty','tab');
function opengoogle(){
    console.log('hi');
    mywin=window.open('http://www.google.com', 'tab');
  
    console.log('hi2')
    return(mywin);
}

//ajax request for content to be planted 'where'

function plant (what, where, howMuch){
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', what);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) { 
                var destination=document.querySelector(where)
                if (!howMuch){howMuch=1};
                for (i=0;i<howMuch;i++){
                     destination.innerHTML+=xhr.responseText;
                }
               
        } else {
        console.log('Error: ' + xhr.status);
        } }
        }
xhr.send(null);
}

plant ('/ajax/header.txt', '.titleContent');
plant('/ajax/lecturesHTML.txt', '.lectureItemsWrapper',6);
plant ('ajax/usefulItem.txt', '.usefulInfoContent',5);
