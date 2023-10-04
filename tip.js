const tipCustom = document.querySelector('.tip-custom');
document.querySelectorAll('.tip-percent').forEach((tip)=>{
  tip.addEventListener('click',()=>{
      let billValue = Number(getBill());
      let personValue  = Number(getPerson());
      let tipC=false;
      let personC = false;
      if(billValue<1  ||!billValue){
        undifinedValue(); tipC=true;
      }else {undifinedValueClear(); tipC=false}
      if(personValue<1  ||!personValue){
        undifinedValue();personC=true;
      }else {undifinedValueClear();personC=false}
      tip.classList.add('active-tip');
      if(tip.classList.contains('tip-5')){
        
        classRemover(tip);
        const tips=  tipCalculater(billValue,0.05,personValue);
        const total  = ((billValue+Number(tips))/personValue).toFixed(2);
        loadFromTip(tips,tipC,personC);
        loadTotal(total,tipC,personC);
      }
      if(tip.classList.contains('tip-10')){
        
        classRemover(tip);
        const tips=  tipCalculater(billValue,0.1,personValue);
        const total  = ((billValue+Number(tips))/personValue).toFixed(2);
        loadFromTip(tips,tipC,personC);
        loadTotal(total,tipC,personC);
      }
      if(tip.classList.contains('tip-15')){
        classRemover(tip);
        const tips=  tipCalculater(billValue,0.15,personValue);
        const total  = ((billValue+Number(tips))/personValue).toFixed(2);
        loadFromTip(tips,tipC,personC);
        loadTotal(total,tipC,personC);
      }
      if(tip.classList.contains('tip-25')){
        classRemover(tip);
        const tips=  tipCalculater(billValue,0.25,personValue);
        const total  = ((billValue+Number(tips))/personValue).toFixed(2);
        loadFromTip(tips,tipC,personC);
        loadTotal(total,tipC,personC);
      }
      if(tip.classList.contains('tip-50')){
        classRemover(tip);
        const tips=  tipCalculater(billValue,0.50,personValue);
        const total  = ((billValue+Number(tips))/personValue).toFixed(2);
        loadFromTip(tips,tipC,personC);
        loadTotal(total,tipC,personC);
      }

     
  });
});


  tipCustom.addEventListener('click',()=>{
      tipCustom.classList.add('active-tip');
      classRemover('ctm');
      let billValue = Number(getBill());
      let personValue  = Number(getPerson());
      let tipC=false;
      let personC = false;
      if(billValue<0  ||!billValue){
        undifinedValue(); tipC=true;
      }else {undifinedValueClear(); tipC=false}
      if(personValue<0  ||!personValue){
        undifinedValue();personC=true;
      }else {undifinedValueClear();personC=false}
    if(tipCustom.value<0 || !tipCustom.value){
      console.log(tipC);
    }else{
      const tipCustomValue  = (Number(tipCustom.value)/100);
      const tip =  tipCalculater(billValue,tipCustomValue,personValue);
      const total  = ((billValue+Number(tip))/personValue).toFixed(2);
      loadFromTip(tip,tipC,personC);
      loadTotal(total,tipC,personC);
    }
  });
 

document.querySelector('.reset-button').addEventListener('click',()=>{
  resetAmount();
});

function getBill(){
  const bill = document.querySelector('.bill');
  return bill.value;
}
function getPerson(){
  const person = document.querySelector('.person');
  return person.value;
}

function undifinedValue(){
  document.querySelectorAll('.span-error').forEach((error)=>{
     error.innerHTML=  'Tanimsiz değer girdiniz.';
  });
  
}
function undifinedValueClear(){
  document.querySelectorAll('.span-error').forEach((error)=>{
    error.innerHTML=  '';
  });
}

function tipCalculater(tips, bill ,person){
  const tip = ((bill*tips)/person).toFixed(2);
  return tip;
}
function loadFromTip(tips,tipC,personC){
  const tip = document.querySelector('.tip-amount');
  if(!tipC && !personC){
    tip.innerHTML = `$${tips}`;
  }else tip.innerHTML= '$0.00';

}
function loadTotal(totals,tipC,personC){
let total = document.querySelector('.total-amount');
    if(!tipC && !personC){
      total.innerHTML = `$${totals}`;
    }else total.innerHTML= '$0.00';

}
function resetAmount(){
  const tip = document.querySelector('.tip-amount');
  let total = document.querySelector('.total-amount');
  tip.innerHTML= '$0.00';
  total.innerHTML= '$0.00';
}

function classRemover(number){
   document.querySelectorAll('.tip-percent').forEach((tip)=>{
    if(tip.classList !==number.classList && number!=='ctm'){
      tip.classList.remove('active-tip');
      document.querySelector(`.tip-custom`).classList.remove('active-tip');
    }
   });
  if (number ==='ctm') {
    document.querySelectorAll('.tip-percent').forEach((tip)=>{
      tip.classList.remove('active-tip');
    });
  }

}