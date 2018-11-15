var usefulTitle = ['קורס כזה', 'קורס אחר', 'לא קורס בכלל', 'טיסה לבאטומי', 'נסיעה בזמן', 'רחת לקום', 'עכשיו או', 'לעולם לא', 'עוד קורס', 'אחד ודי']
var usefulData=[];
usefulData=usefulTitle.map(makeData(v,i,arr){return({title:v})});
console.log(usefulData);
