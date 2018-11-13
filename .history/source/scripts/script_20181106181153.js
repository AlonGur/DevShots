
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

//send ajax request for lectures.json
var lecturesObj;
var lectureRequest=new XMLHttpRequest();
lectureRequest.open('GET', '/source/scripts/lists/lectures.JSon');
lectureRequest.onreadystatechange=function(){
    if(lectureRequest.readyState===4){
        if(lectureRequest.status===200){
            lecturesObj=JSON.parse(lectureRequest.responseText)
        }
    }
}


//then with ejs create the html that will be each levture item then plant it in the page




console.log(html);