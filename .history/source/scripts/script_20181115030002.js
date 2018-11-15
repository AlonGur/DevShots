
//add event listener to navbar
var navbar = document.querySelector('.navbar');
navbar.addEventListener("click", open);
//navbar click function
function open() {
    var navbarItems = document.querySelectorAll('.navbar li');
    navbarItems.forEach(item => item.classList.toggle('unhide'));
}



//getting arriving info from arrivingList.JSon with AJAX and adding arrving details to the DOM
var arriveReq = new XMLHttpRequest;
arriveReq.open('GET', '/source/templates/arrivingLists.JSon');
arriveReq.onreadystatechange = function () {
    if (arriveReq.readyState === 4) {
        if (arriveReq.status === 200) {
            arriveJSon = arriveReq.responseText;
            arriveInfo = JSON.parse(arriveJSon);
            if (arriveInfo) {
                //plant the parking list in the DOM
                parkingTarget = document.querySelector('.parkingList')
                parkTemp2 = Handlebars.compile(arriveInfo.template);
                parkingTarget.innerHTML += parkTemp2(arriveInfo);

                //plant bus info in DOM
                busTarget = document.querySelector('.busList');
                busInfo = Handlebars.compile(arriveInfo.busTemp);
                busTarget.innerHTML = busInfo(arriveInfo);
            }



        }
    }
}
arriveReq.send(null);

// -------------------- //

// function that loads all lectures

//get template from script tag in index.html

var lectureWrapper = document.querySelector('.lectureItemsWrapper');
var lecTemp = document.getElementById("lectureTemplate").innerHTML;

//get info from [lectures] from lectures.js
//(index.html links to lectures.js so that variable is recognized here)

//compile them togther with handlebars and add to DOM

compileTemplate(lecTemp,lectures,lectureWrapper)
// var someLec = Handlebars.compile(lecTemp);
// for (i = 0; i < lectures.length; i++) {
//     var aLec = someLec(lectures[i]);
//     lectureWrapper.innerHTML += aLec
// }


// function that loads all useful item
//get template from usefulitem.html

//get data from 

var usefulTitle = ['קורס כזה', 'קורס אחר', 'לא קורס בכלל', 'טיסה לבאטומי', 'נסיעה בזמן', 'רחת לקום', 'עכשיו או', 'לעולם לא', 'עוד קורס', 'אחד ודי']

var usefulTemplateforHandlebars=getTemplate('/source/templates/usefulItem.html');

console.log('this:'+usefulTemplateforHandlebars);
//compile and add to dom
// for(i in usefulTitle){
//     compileTemplate(usefulTemplateforHandlebars,{title: usefulTitle[i]},document.querySelector('.usefulItemsWrapper'))
// }
//compileTemplate(usefulTemplateforHandlebars, usefulTitle,document.querySelector('.usefulItemsWrapper'))

getandcompileTemplate('source/templates/usefulItem',usefulData,document.querySelector('.useful'))


function getandcompileTemplate(myTemplateURL,myData,myTarget){
    
    var myReq=new XMLHttpRequest;
   
    myReq.open('GET',myTemplateURL);
 console.log(myReq)
    myReq.onreadystatechange=function(){
        console.log('in readystatechange')
        if(myReq.readyState===4){
            console.log(myReq.status,myURL)
            if(myReq.status===200){
               myTemplate=Handlebars.compile(myReq.responseText);
                for(i in myData){
                    myTarget.innerHTML+=thisTemplate(myData[i]);

                }
            }
        }
    }
    myReq.send();
}




// function compileTemplate(template,data,target){
//     console.log(data);
//     var thisTemplate=Handlebars.compile(template);
//     for(i in data){
//         target.innerHTML+=thisTemplate(data[i]);
//     }
  
// }
// var someLec = Handlebars.compile(lecTemp);
//     for (i = 0; i < numOfLecs; i++) {
//         var aLec = someLec(lectures[i]);
//         lectureWrapper.innerHTML += aLec
//     }


//function that checks size and hides lecs and useful items as needed

//resize function that hides/shows lecs and items for big/small window.innerwidth








//------------------//


//checking window size to determine how many items to load in lectures and usefulinfo

// //mySize will be 'big' or 'small' and will load items according to screen size.
// var mySize = '';

// if (window.innerWidth <= 700) {
//     mySize = 'small'
//     loadLecs(3)
//     loadUseful(4);
// }
// else {
//     mySize = 'big'
//     loadLecs(6);
//     loadUseful(10);
// }


// //this resize func will reload items if screen size passes the big/small cutoff
// window.addEventListener('resize', resizeTest);
// function resizeTest() {
//     var lecsNow = document.querySelectorAll('.lectureItem');
//     var usefulNow = document.querySelectorAll('.usefulInfoItem');
//     if (window.innerWidth > 690 && mySize === 'small') {
//         mySize = 'big';
//         lecsNow.forEach(item => item.remove());
//         usefulNow.forEach(item => item.remove());
//         loadLecs(6);
//         loadUseful(10)
//     }
//     if (window.innerWidth <= 690 && mySize === 'big') {
//         mySize = 'small';
//         lecsNow.forEach(item => item.remove());
//         usefulNow.forEach(item => item.remove());
//         loadLecs(3);
//         loadUseful(4);
//     }
// }

// //this func gets the lecture template in the script tag in index.html, and compiles it with the info in [lectures] from /lectures.js (numOfLec) times
// // function loadLecs(numOfLecs) {
// //     var lectureWrapper = document.querySelector('.lectureItemsWrapper');
// //     var lecTemp = document.getElementById("lectureTemplate").innerHTML;
// //     var someLec = Handlebars.compile(lecTemp);
// //     for (i = 0; i < numOfLecs; i++) {
// //         var aLec = someLec(lectures[i]);
// //         lectureWrapper.innerHTML += aLec
// //     }

// // }


// //this var stores the titles for the useful items
// var usefulTitle = ['קורס כזה', 'קורס אחר', 'לא קורס בכלל', 'טיסה לבאטומי', 'נסיעה בזמן', 'רחת לקום', 'עכשיו או', 'לעולם לא', 'עוד קורס', 'אחד ודי']
// //this function gets the useful template with ajax, then compily with handlebars the num of items in the func param
// function loadUseful(numToLoad) {
//     var target = document.querySelector('.usefulItemsWrapper')
//     var usefulReq = new XMLHttpRequest;
//     usefulReq.open('GET', '/source/templates/usefulItem.html');
//     usefulReq.onreadystatechange = function () {
//         if (usefulReq.readyState === 4) {
//             if (usefulReq.status === 200) {
//                 usefulItemTemplate = usefulReq.responseText;
//                 //send it to handlebar compyling and plant it in the dom
//                 var myTemplate = Handlebars.compile(usefulItemTemplate);
//                 for (i = 0; i < numToLoad; i++) {
//                     var title = { title: usefulTitle[i] }
//                     anItem = myTemplate(title);
//                     target.innerHTML += anItem;

//                 }
//             }
//         }
//     }
//     usefulReq.send();

// }