let list =JSON.parse(localStorage.getItem('list')) || [];

function loadFromScreen(){
  let loadList = document.querySelector('.transactions-list');
  loadList.innerHTML = '';
  let html = '';
  let postiveN= '';
  if(list.length ===0){
    loadList.innerHTML = 'No transactions';
    return;
  }
  list.forEach((listValue)=>{
    if(listValue.transaction ===0){
     postiveN = '-';
    }
    else if(listValue.transaction ===1){ postiveN = '+'};
    
    html = `
    <div class ="load-container"> 
        <div class="name-load">${listValue.name}
        <div class="date-load">${listValue.date}
          </div>
        </div>
          <div class="amount-load">
       ${postiveN}${listValue.amount}$
          </div>
          <div class="action">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            onclick="deleteTransaction(${listValue.id})">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          </div>
    </div>      
      `;
      loadList.innerHTML +=html;
      let amountColor = document.querySelectorAll('.amount-load')
      .forEach((color)=>{
        if(postiveN==='+'){
          if(!color.classList.contains('expense')){
            color.classList.add('income');
          }
          
          
        }else if(postiveN ==='-'){
          if(!color.classList.contains('income')){
            color.classList.add('expense');
          }
        }
      });
      
  });
  loadFromTotalScreen();
  saveList();
}
loadFromScreen();
let inputTransaction = document.querySelectorAll('.transactions-chose')
.forEach((transaction)=>{
  transaction.addEventListener('click',()=>{
    if(transaction.classList.contains('transactions-expense')){
      transaction.classList.add('active-transactions');
      document.querySelector('.transactions-income')
      .classList.remove('active-transactions');
    }else if(transaction.classList.contains('transactions-income')){
      transaction.classList.add('active-transactions');
      document.querySelector('.transactions-expense')
      .classList.remove('active-transactions');
    }
  });
});

 let buttonElement= document.querySelector('.sumbit-button');
buttonElement.addEventListener('click',()=>{
  let inputName = document.querySelector('.input-name');
  let inputAmount = document.querySelector('.input-amount');
  let inputDate = document.querySelector('.input-date');
  let inputTransaction = document.querySelector('.active-transactions').innerHTML;
  
  let nameValue = inputName.value;
  let amountValue =Number(inputAmount.value);
  let dateValue = inputDate.value;
  let transactionValue;
  let errorMessage =  document.querySelector('.error-message');

  

  if(inputTransaction ==='EXPENSE'){
    transactionValue =0;
  }else transactionValue =1;
  let newList = [];
  if(!nameValue || !amountValue || amountValue<0 || !dateValue){
   errorMessage.innerHTML  ='Cannot be left blank';
  }
  else{
    errorMessage.innerHTML = '';
    let endId;
     list.forEach((item)=>{
        endId=item.id;
     });
     if(!endId){
      newList ={
        id : 1,
        name : nameValue,
        amount : amountValue,
        date : dateValue,
        transaction : transactionValue
      };
      list.push(newList);
     }else{
        newList ={
        id : endId+1,
        name : nameValue,
        amount : amountValue,
        date : dateValue,
        transaction : transactionValue
      };
      list.push(newList);
     }
   }
  loadFromScreen();
  saveList();
  inputName.value = '';
  inputAmount.value = '';
  inputDate.value='';
});

function loadFromTotalScreen(){
  let Total =0;
  let income = 0 ;
  let expense = 0;
  list.forEach((item)=>{
    // console.log(item.transaction);
    // console.log(item.amount);
    if(item.transaction === 0 ){
      expense+=item.amount;
    }else if(item.transaction ===1){
      income+=item.amount;
    }
  });
  total = income - expense;
  document.querySelector('.income-output').innerHTML=`+${income}$`;
  document.querySelector('.expense-output').innerHTML=`-${expense}$`;
  document.querySelector('.total').innerHTML=`${total}$`;
}
function deleteTransaction(id){
  const index = list.findIndex((item)=>item.id ===id);
  list.splice(index,1);
  loadFromScreen();
  saveList();
  loadFromTotalScreen();
}

function saveList(){
  list.sort((a,b)=>new Date(a.date)- new Date(b.date));
  localStorage.setItem("list", JSON.stringify(list));
}