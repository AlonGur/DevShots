
//add event listener to navbar
var navbar=document.querySelector('.navbar');
navbar.addEventListener("click",open);

//navbar click function
function open(){
    var navbarItems=document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => item.classList.toggle('hide2'));
    }

//ajax request for 'what' to be planted 'where', 'howMuch' times

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

plant ('ajax/usefulItem.txt', '.usefulInfoContent',10);

//create lectureItem1html...lectureItem6.html in s
for(i=0;i<speakers.length;i++){
    plant(`lectureItem${[i]}.html`,'lectureItemsWrapper','')
}


console.log(html);