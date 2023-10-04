let countDownDate  = new Date('10 11 , 2023 00:00:00').getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance  = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('days').innerHTML=days;
  document.getElementById('hrs').innerHTML=hours;
  document.getElementById('mins').innerHTML=minutes;
  document.getElementById('sec').innerHTML=seconds;
  if (distance<0) {
    clearInterval(x);
    document.getElementById('days').innerHTML="00";
    document.getElementById('hrs').innerHTML="00";
    document.getElementById('mins').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
  }

}, 1000);

const buttonElement = document.querySelector('.js-start-button');
buttonElement.addEventListener('click', ()=>{
//let startSpan = document.getElementById('start');
// if(startSpan.classList.contains('new-font')){
//   startSpan.classList.remove('new-font');
// }else{startSpan.classList.add('new-font');}


let startSpan = document.querySelectorAll('.font-old').
forEach((item)=>{
  let y =  setInterval(() => {
    if(item.classList.contains('new-font')){
      item.classList.remove('new-font');
    }else item.classList.add('new-font');
    
  }, 2000);
  
});

  


});

