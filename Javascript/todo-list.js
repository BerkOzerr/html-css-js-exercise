const inputElement =  document.getElementById('input');
const listContainer = document.querySelector('.list-container');
const error = document.getElementById('error');
const buttonElement =document.getElementById('button');
showData();
inputController(inputElement);
let currentTime = new Date();


buttonElement.addEventListener('click',addTask);


listContainer.addEventListener('click',(e)=>{
  if(e.target.tagName ==='LI'){
    e.target.classList.toggle('active');saveData();
  }else if(e.target.tagName ==='SPAN'){
    e.target.parentElement.remove(); saveData();
  }
 
},false);



function addTask(){
  if(!inputElement.value){
    error.innerHTML = 'Boş birakmayiniz.';
  }else{
    let li = document.createElement('li');
    li.innerHTML = inputElement.value;
    listContainer.appendChild(li);
    let span  =document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    let h6 = document.createElement('h6');
    h6.innerHTML = currentTime;
    li.appendChild(h6);
  }
  inputElement.value = '';
  saveData();

}



function inputController(inputElement){
    inputElement.addEventListener("input",(e)=>{
      if(e.target.value){
        error.innerHTML='';
      }
      });
}

function saveData(){
  localStorage.setItem('data',listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem('data');
}

