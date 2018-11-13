
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


//create lectures array
var lectures=[];

var speakers=['שימי תבורי','אלונזו מוזלי','רפיק חלבי','רפיק בשרי','רפיקי הקוף','משה בתיבה'];
var lectureTitles=['שירים ושערים','מה אני מה אני','לא הולך לשם','טעים אך לא נעים','סימבה המלך','עולם המים זה כאן'];
var lectureSummary=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare. Aliquet sagittis id consectetur
purus ut. Nisi quis eleifend quam adipiscing. Nulla aliquet enim tortor at auctor urna nunc id.
Lacus luctus accumsan tortor posuere ac ut consequat se`;
var lecturePic=`/source/images/michaelScott.png`
function getLecture(speaker, title, summary, imgSrc){
    return({speaker: speaker  ,
    title:  title,
    summary: summary,
    pic: imgSrc})

}
for(i=0;i<speakers.length;i++){
    lectures.push(getLecture(speakers[i],lectureTitles[i],lectureSummary,lecturePic))
}

//get html template from lecturesHTML.html

var lecTempReq=new XMLHttpRequest();
lecTempReq.open('GET','/source/templates/lecturesHTML.html');
var lecHtmlTemplate;
lecTempReq.onreadystatechange=function(){
    if(lecTempReq.readyState===4){
        if(lecTempReq.status===200){
            lecHtmlTemplate=lecTempReq.responseText
        }
    }
}
lecTempReq.send(null);

//then with ejs create the html that will be each levture item then plant it in the page






//ejs.render(str, data, options);
// => Rendered HTML string


var lectureWrapper=document.querySelector('.lectureItemsWrapper');
var speakers=['שימי תבורי','אלונזו מוזלי','רפיק חלבי','רפיק בשרי','רפיקי הקוף','משה בתיבה'];

var myLec={speaker: 'ALLLLON'}



var lecTemp   = document.getElementById("lectureTemplate").innerHTML;
var someLec = Handlebars.compile(lecTemp);
//var context=lectures[0];
for(i in lectures){
    var aLec    = someLec(lectures[i]);
    lectureWrapper.innerHTML+=aLec
}


//useful item array with items' info
var usefulTitle=['קורס כזה','קורס אחר','לא קורס בכלל','טיסה לבאטומי','נסיעה בזמן','רחת לקום','עכשיו או','לעולם לא','','','','','','']
//get template
var usefulTemplate=document.getElementById('')