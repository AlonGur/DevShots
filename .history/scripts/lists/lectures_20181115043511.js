var lectures=[];

var speakers=['שימי תבורי','אלונזו מוזלי','רפיק חלבי','רפיק בשרי','רפיקי הקוף','משה בתיבה'];
var lectureTitles=['שירים ושערים','מוזלי והעתיד','לא הולך לשם','טעים אך לא נעים','סימבה המלך','עולם המים זה כאן'];
var lectureSummary=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare. Aliquet sagittis id consectetur
purus ut. Nisi quis eleifend quam adipiscing. Nulla aliquet enim tortor at auctor urna nunc id.
Lacus luctus accumsan tortor posuere ac ut consequat se`;
var lecturePic=`/images/michaelScott.png`
function getLecture(speaker, title, summary, imgSrc){
    return({speaker: speaker  ,
    title:  title,
    summary: summary,
    pic: imgSrc})

}
for(i=0;i<speakers.length;i++){
    lectures.push(getLecture(speakers[i],lectureTitles[i],lectureSummary,lecturePic))
}
