
//add event listener to navbar
var navbar = document.querySelector('.navbar');
navbar.addEventListener("click", open);
//navbar click function
function open() {
    var navbarItems = document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => item.classList.toggle('unhide'));
}


//create lectures array
var lectures = [];

var speakers = ['שימי תבורי', 'אלונזו מוזלי', 'רפיק חלבי', 'רפיק בשרי', 'רפיקי הקוף', 'משה בתיבה'];
var lectureTitles = ['שירים ושערים', 'מוזלי זה אחלה', 'לא הולך לשם', 'טעים אך לא נעים', 'סימבה המלך', 'עולם המים זה כאן'];
var lectureSummary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare. Aliquet sagittis id consectetur
purus ut. Nisi quis eleifend quam adipiscing. Nulla aliquet enim tortor at auctor urna nunc id.
Lacus luctus accumsan tortor posuere ac ut consequat se`;
var lecturePic = `/source/images/michaelScott.png`
function getLecture(speaker, title, summary, imgSrc) {
    return ({
        speaker: speaker,
        title: title,
        summary: summary,
        pic: imgSrc
    })

}
for (i = 0; i < speakers.length; i++) {
    lectures.push(getLecture(speakers[i], lectureTitles[i], lectureSummary, lecturePic))
}


//get lectures template from the script tag in the dom, then compile it with data from lectures object
//and plant it in the correct place in the dom.

 var lectureWrapper = document.querySelector('.lectureItemsWrapper');
// //var speakers = ['שימי תבורי', 'אלונזו מוזלי', 'רפיק חלבי', 'רפיק בשרי', 'רפיקי הקוף', 'משה בתיבה'];
// var lecTemp = document.getElementById("lectureTemplate").innerHTML;
// var someLec = Handlebars.compile(lecTemp);
// for (i in lectures) {
//     var aLec = someLec(lectures[i]);
//     lectureWrapper.innerHTML += aLec
// }


//useful item array with items' title
var usefulTitle = ['קורס כזה', 'קורס אחר', 'לא קורס בכלל', 'טיסה לבאטומי', 'נסיעה בזמן', 'רחת לקום', 'עכשיו או', 'לעולם לא', 'עוד קורס', 'אחד ודי']

//get usefulItem.html template with ajax, compile w/ handlebars
//and plant it in the DOM at target
var target = document.querySelector('.usefulItemsWrapper')
var usefulReq = new XMLHttpRequest;
usefulReq.open('GET', '/source/templates/usefulItem.html');
usefulReq.onreadystatechange = function () {
    if (usefulReq.readyState === 4) {
        if (usefulReq.status === 200) {
            usefulItemTemplate = usefulReq.responseText;
            //send it to handlebar compyling and plant it in the dom
            var myTemplate = Handlebars.compile(usefulItemTemplate);
            for (let i in usefulTitle) {
                var title = { title: usefulTitle[i] }
                anItem = myTemplate(title);
                target.innerHTML += anItem;

            }
        }
    }
}
usefulReq.send();

//arriveInfo = null;
//getting arriving info from arrivingList.JSon with AJAX
var arriveReq = new XMLHttpRequest;
arriveReq.open('GET', '/source/templates/arrivingLists.JSon');
arriveReq.onreadystatechange = function () {
    if (arriveReq.readyState === 4) {
        if (arriveReq.status === 200) {
            arriveJSon = arriveReq.responseText;

            arriveInfo = JSON.parse(arriveJSon);
            console.log(arriveInfo)


            if (arriveInfo) {
                //plant the parking list in the DOM
                parkingTarget = document.querySelector('.parkingList')
                parkTemp2 = Handlebars.compile(arriveInfo.template);
                parkingTarget.innerHTML+= parkTemp2(arriveInfo);

                //plant bus info in DOM
                busTarget=document.querySelector('.busList');
                busInfo=Handlebars.compile(arriveInfo.busTemp);
                busTarget.innerHTML= busInfo(arriveInfo);
            }



        }
    }
}
arriveReq.send(null);

///listener to screen width
// add text to arraiving text
// change section title in arriving text
if(window.innerWidth<=700){
        loadLecs(3)

}
else{
    loadLecs(6)
}
var lecShowingNow=document.querySelectorAll('.lectureItem');
window.addEventListener('resize', resizeTest);
function resizeTest(){
   if(window.innerWidth>700){
       console.log('in the if')
       lecsNow=document.querySelectorAll('.lectureItem');
       lecsNow.forEach(item=>item.remove())
       loadLecs(6);
   }
}

function loadLecs(numOfLecs){
    var lecTemp = document.getElementById("lectureTemplate").innerHTML;
//    currLecs=document.querySelectorAll('.lectureItems');

var someLec = Handlebars.compile(lecTemp);
for (i =0; i<numOfLecs;i++) {
    console.log('lec '+i)
    var aLec = someLec(lectures[i]);
    lectureWrapper.innerHTML += aLec
}

}