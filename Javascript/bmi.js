const buttonElement = document.querySelector('.js-button-calculate');
const result =  document.getElementById('result');

buttonElement.addEventListener('click',()=>{
  
  const boy = parseInt(document.querySelector('.boy').value);
  const kilo = Number(document.querySelector('.kilo').value);
  
  if(!boy || !kilo || boy <=0 || kilo <=0){
    alert('Lütfen Boyunuzu ve kilonuzu doğru girdiğinizden emin olunuz.(cm/kg)');
  }else{
    const bmiValue = Number(((kilo / (boy*boy))*10000).toFixed(2));
    
    bmiCalculator(bmiValue);
  }
 
});

function bmiCalculator(bmiValue){
  let timeOutClear = false;
  if (bmiValue<18.5) {
    result.innerHTML = 'İdeal kilonuzun altindasiniz.';
    result.classList.add('result-none-ideal');
    let x = setTimeout(()=>{
      result.classList.remove('result-none-ideal');
      timeOutClear = true;
    },3000);
  }else if(bmiValue>18.5 && bmiValue<24.9){
    result.innerHTML = 'İdeal kilo araliğindasiniz.';
   
  } else if (bmiValue>25 && bmiValue<29.9){
    result.innerHTML = 'İdeal kilonuzun üstündesiniz.';
    result.classList.add('result-none-ideal');
    let x = setTimeout(()=>{
      result.classList.remove('result-none-ideal');
      timeOutClear = true;
    },3000);
  }else if (bmiValue>30 && bmiValue<34.9){
    result.innerHTML = 'Obezsin.';
    result.classList.add('result-none-ideal');
    let x = setTimeout(()=>{
      result.classList.remove('result-none-ideal');
      timeOutClear = true;
    },3000);
  }else if(bmiValue>35){
    result.innerHTML = 'Morbid Obezsin.';
    result.classList.add('result-none-ideal');
    let x = setTimeout(()=>{
      result.classList.remove('result-none-ideal');
      timeOutClear = true;
    },3000);
  }
    if (timeOutClear) {
      result.innerHTML='';
      clearTimeout(x);
    }
  
}