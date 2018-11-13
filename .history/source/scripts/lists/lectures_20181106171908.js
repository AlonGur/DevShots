var lectures=[];

var speakers=['שימי תבורי','אלונזו מוזלי','רפיק חלבי','רפיק בשרי','רפיקי הקוף','משה בתיבה'];
var lectureTitles=['שירים ושערים','מה אני מה אני','לא הולך לשם','טעים אך לא נעים','סימבה המלך','עולם המים זה כאן'];
var lectureSummary=""
 function getLecture(speaker, title, summary imgSrc){
    return({speaker: speaker  ,
    title:  title,
    summary: summary,
    pic: imgSrc})

}