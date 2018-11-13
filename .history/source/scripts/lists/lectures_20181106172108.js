var lectures=[];

var speakers=['שימי תבורי','אלונזו מוזלי','רפיק חלבי','רפיק בשרי','רפיקי הקוף','משה בתיבה'];
var lectureTitles=['שירים ושערים','מה אני מה אני','לא הולך לשם','טעים אך לא נעים','סימבה המלך','עולם המים זה כאן'];
var lectureSummary=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare. Aliquet sagittis id consectetur
purus ut. Nisi quis eleifend quam adipiscing. Nulla aliquet enim tortor at auctor urna nunc id.
Lacus luctus accumsan tortor posuere ac ut consequat se`;
var lecturePic=`/source/images/michaelScott`
 function getLecture(speaker, title, summary imgSrc){
    return({speaker: speaker  ,
    title:  title,
    summary: summary,
    pic: imgSrc})

}