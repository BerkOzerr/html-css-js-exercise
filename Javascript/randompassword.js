const buttonElement = document.querySelector('.password-load');
const passwordInput = document.getElementById('password-input');
const coppyImg = document.getElementById('copy');

const lenght =12;
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialChar = '{}/\\+-*_@!><#$=%&|~[]()^';
const number =  '0123456789';
const allChar = lowerCase+upperCase+specialChar+number;

buttonElement.addEventListener('click',()=>{
createPass();
});

coppyImg.addEventListener('click',()=>{
  coppyPass();
});

function createPass(){
  let password ='';
  while(lenght>password.length)
  {
  let random = Math.floor(Math.random()*5);
  if(random === 0 ){
    password+=specialChar[Math.floor(Math.random()*specialChar.length)];
  }
  else if (random === 1){
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
  }else if(random === 2) {
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
  }else if (random === 3 ) {
    password+=number[Math.floor(Math.random()*number.length)];
  }
  else {
    password += allChar[Math.floor(Math.random()*allChar.length)];
  }
  }
  passwordInput.value =  password;
}

function coppyPass(){
  passwordInput.select();
  document.execCommand("copy");
}