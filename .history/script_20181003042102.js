hiddenSpans= document.querySelectorAll('span.hide');

if(screen.width > 768){
  for(i=0;i<hiddenSpans.length;i++){
         hiddenSpans[1].classList.toggle('hide');
    }
}