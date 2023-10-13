let dropList =  document.querySelectorAll('.selection-container select');
let fromCurrency =  document.querySelector('.fromcurrency-container select');
let toCurrency =  document.querySelector('.tocurrency-container select');
const getButton  = document.querySelector('.exchange-button');
const exchangeIcon  = document.querySelector('.reverse-change');

exchangeIcon.addEventListener('click',()=>{
  let tempCode  =toCurrency.value;
  toCurrency.value=fromCurrency.value;
  fromCurrency.value=tempCode;
  loadFlag(toCurrency);
  loadFlag(fromCurrency);
  getExchangeRate();

});


for(let i = 0 ; i<dropList.length ; i++){
  for(currency_code in countryCode ){
    let selected;
    if(i===0){  
        selected =  currency_code =="EUR" ? "selected": "";
    }else if(i===1){
      selected = currency_code == "TRY" ? "selected":"";
    }
   let optionTag  = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
   dropList[i].insertAdjacentHTML('beforeend',optionTag);
  }
  dropList[i].addEventListener('change',e=>{
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for(code in countryCode){
    if(code ==element.value){
      let imgTag = element.parentElement.querySelector('img');
      imgTag.src = `https://flagsapi.com/${countryCode[code]}/flat/64.png`;
    }
  }
}

window.addEventListener('load',()=>{
  getExchangeRate();
});


getButton.addEventListener('click',e=>{
  e.preventDefault();
  getExchangeRate();
});


function getExchangeRate(){
  const amount =  document.querySelector('.amount-input');
  let exchangeRateTxt = document.querySelector('.display-change');
  let amountVal = amount.value ;
  if(amountVal =="" || amountVal =="0"){
    amount.value = '1';
    amountVal = 1;
  }
  exchangeRateTxt.innerHTML = `Getting Exchange Rate...`;
  let url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
  fetch(url).then(response => response.json()).then(result =>{
    let exchangeRate =result.conversion_rates[toCurrency.value];
    let totalExchangeRate = (amountVal*exchangeRate).toFixed(2);
    
    exchangeRateTxt.innerHTML = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;

  }).catch(()=>{
    exchangeRateTxt.innerHTML ='Something went wrong.';
  });
}