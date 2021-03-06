
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



//function getandcompileTemplte gets the template from url, compiles it with data, and adds it to target html

//use function to load lectures
getandcompileTemplate('/source/templates/lecturesHTML.html',lectures ,  document.querySelector('.lectureItemsWrapper'));
//use function to load useful items
getandcompileTemplate('/source/templates/usefulItem.html',usefulData,document.querySelector('.usefulItemsWrapper'))


function getandcompileTemplate(myTemplateURL,myData,myTarget){
    console.log(myData);
    var myReq=new XMLHttpRequest;
   
    myReq.open('GET',myTemplateURL);
 console.log(myReq)
    myReq.onreadystatechange=function(){
        console.log('in readystatechange')
        if(myReq.readyState===4){
            if(myReq.status===200){
               myTemplate=Handlebars.compile(myReq.responseText);
               
                for(i in myData){
                    console.log(myTarget);
                    myTarget.innerHTML+=myTemplate(myData[i]);

                }
            }
        }
    }
    myReq.send();
}

//ONLY AFTER PAGE LOADS - need to add a function for that


window.onload=function(){
    console.log('onload on')
    //check window size and hide useful/lectures if needed
    var screenSize='';
    if(window.innerWidth<700){
        screenSize='small';
        (hide());
    }
    else{
        screenSize='big';
    }

    //eventlistener on window size
    window.addEventListener('resize', showHide);


    function hide(){
      
        myLecs=document.querySelectorAll('.lectureItem');
        console.log(myLecs)
        for(i=3;i<myLecs.length;i++){
            console.log('in hide lec loop')
            myLecs[i].classList.add('hide');
        }
        //hide 6 useful
        myItems=document.querySelectorAll('.usefulInfoItem');
        for(i=4;i<myItems.length;i++){
            myItems[i].classList.add('hide');
        }
    
    }
    function show(v,i,arr){
        console.log('in the show')
        console(arr[i])
        arr[i].classList.remove('hide')
    }
    function showHide(){
        console.log('resize working')
        if(window.innerWidth<700 && screenSize==='big'){
            screenSize='small';
            hide();
        }
        else if(window.innerWidth>=700 && screenSize==='small'){
            screenSize='big';
            lecArr=Array.from(document.querySelectorAll('.lectureItem'))
            lecArr.forEach(item=>item.classList.remove('hide'))
           itemsArr=Array.from(document.querySelectorAll('.usefulInfoItem')) 
           itemsArr.forEach(item=>item.classList.remove('hide'))
           console.log(lecArr)
           console.log(itemsArr)
        }
    }

};


