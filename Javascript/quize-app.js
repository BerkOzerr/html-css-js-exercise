const quizList=[{
  question : 'Quantum bilgisayarlar, klasik bilgisayarlara göre hangi tür hesaplamaları daha hızlı yapabilir?',
  answer : {
    A : {text : 'İşlemsel hesaplamalar', correct : 0},
    B : {text : 'Grafik işlemler', correct : 0},
    C : {text : 'Kriptografik hesaplamalar', correct : 1},
    D : {text : 'Veri depolama', correct : 0}
  }
},{
  question : 'Hangi terim, bir bilgisayar programının, verileri işlemek için birden fazla işlemci veya çekirdek kullanma yeteneğini ifade eder?',
  answer : {
    A : {text : 'Multi-threading', correct : 1},
    B : {text : 'Overclocking', correct : 0},
    C : {text : 'Virtualization', correct : 0},
    D : {text : 'Encryption', correct : 0}
  }
},{
  question : 'Bir bilgisayar ağının, dışarıdan gelebilecek tehditlere karşı korunmasını sağlayan yazılım veya donanım bileşeni nedir?',
  answer : {
    A : {text : 'Switch', correct : 0},
    B : {text : 'Modem', correct : 0},
    C : {text : 'Router', correct : 0},
    D : {text : 'Firewall', correct : 1}
  }
},{
  question : '"www" terimi, bir web sitesinin adresinde kullanılır. Peki "WWW" neyi temsil eder?',
  answer : {
    A : {text : 'Web Widget Wizard', correct : 0},
    B : {text : 'World Wide Web', correct : 1},
    C : {text : 'Wireless Web Work', correct : 0},
    D : {text : 'Webpage Working Wonders', correct : 0}
  }
},{
  question : 'Aşağıdaki programlama dillerinden hangisi yapay zeka ve makine öğrenme uygulamaları geliştirmek için sıkça kullanılmaktadır?',
  answer : {
    A : {text : 'Java', correct : 0},
    B : {text : 'C++', correct : 0},
    C : {text : 'Pyhton', correct : 1},
    D : {text : 'Ruby', correct : 0}
  }
},{
  question : 'Mobil cihazlarda kablosuz şarjın mümkün olmasını sağlayan teknolojinin adı nedir?',
  answer : {
    A : {text : 'GPS', correct : 0},
    B : {text : 'NFC', correct : 0},
    C : {text : 'RFID', correct : 0},
    D : {text : 'Qi', correct : 1}
  }
},{
  question : ' Hangi terim, bir bilgisayarın işlem yapma yeteneğini ölçmek için kullanılan hız birimidir?',
  answer : {
    A : {text : 'Byte', correct : 0},
    B : {text : 'Watt', correct : 0},
    C : {text : 'Hertz', correct : 1},
    D : {text : 'Ohm', correct : 0}
  }
},{
  question : ' Bilgisayarlar arası iletişimi kolaylaştıran ve veri alışverişi için kullanılan protokol ne ile ifade edilir?',
  answer : {
    A : {text : 'TCP/IP', correct : 1},
    B : {text : 'Backbone', correct : 0},
    C : {text : 'Defrag', correct : 0},
    D : {text : 'Hyperlink', correct : 0}
  }
},{
  question : ' Hangisi bir bilgisayarın veya ağın güvenliğini test etmek için izin verilen bir sızma testinin adıdır?',
  answer : {
    A : {text : 'Hacking', correct : 0},
    B : {text : 'Phishing', correct : 0},
    C : {text : 'Penetration', correct : 1},
    D : {text : 'Malware', correct : 0}
  }
},{
  question : ' Bilgisayarın işletim sistemi tarafından kullanılabilen fiziksel belleği yöneten birimlere ne ad verilir?',
  answer : {
    A : {text : 'GPU', correct : 0},
    B : {text : 'CPU', correct : 0},
    C : {text : 'HDD', correct : 0},
    D : {text : 'RAM', correct : 1}
  }
}

];

 
const questionElement =  document.querySelector('.question');
const nextBtnElement  = document.querySelector('.next-btn');
const answerBtn  = document.querySelector('.button-container');

let i  = 1 ;
let score =0 ;
let html = '';
let selectButton ='';
let trueAnswer ='';
renderScreen();
buttonSelect();

nextBtnElement.addEventListener('click',()=>{
  i++;
 
  renderScreen();
  buttonSelect();
});

function buttonSelect(){
  let buttonSelect=  document.querySelectorAll('.btn');
    selectButton ='';
    trueAnswer ='';
  
   if(selectButton===''){
    buttonSelect.forEach((button)=>{
      button.addEventListener('click',()=>{
       if( button.classList.contains('btn-a')){
        selectButton = 'a';
        
       }
       else if (button.classList.contains('btn-b')){
        selectButton = 'b';
       }
       else if (button.classList.contains('btn-c')){
        selectButton = 'c';
       }
       else if (button.classList.contains('btn-d')){
        selectButton = 'd';
       }
       if(selectButton){
          
        quizList.forEach((item ,index)=>{
          if(index ===i-1){
          if(item.answer.A.correct){
            trueAnswer ='a';
          }else  if(item.answer.B.correct){
            trueAnswer ='b';
          }else  if(item.answer.C.correct){
            trueAnswer ='c';
          }else  if(item.answer.D.correct){
            trueAnswer ='d';
          }
        } 
        });
        }
        
        let btntrue = document.querySelector(`.btn-${selectButton}`);
        let btnCorrect  = document.querySelector(`.btn-${trueAnswer}`);
  
        if(selectButton === trueAnswer){
          score++;
          btntrue.classList.add('btn-active-true');
          let button = buttonSelect.forEach((button)=>{
            button.disabled=true;
          });
          nextBtnElement.style.display='block';
        }else{
          btntrue.classList.add('btn-active-false');
          btnCorrect.classList.add('btn-active-true');
          let button = buttonSelect.forEach((button)=>{
            button.disabled=true;
          });
          nextBtnElement.style.display='block';
        }
        
      });
     });
   }
    
    }

function renderScreen(){
  nextBtnElement.style.display ='none';
  quizList.forEach((item,index)=>{
    html = `
          <button class= "btn btn-a">${item.answer.A.text}</button>
          <button class= "btn btn-b">${item.answer.B.text}</button>
          <button class= "btn btn-c">${item.answer.C.text}</button>
          <button class= "btn btn-d">${item.answer.D.text}</button>
          `;
     
     if(i===index+1){
        questionElement.innerHTML = `${index+1}. ${item.question}`;
        answerBtn.innerHTML = html ;
      }
     else if (i === quizList.length +1){
        let htmlend = `${score}/${i-1} Score <br> <button class="try-again" onclick =window.location.reload();>Try Again<button>`
        questionElement.innerHTML = '';
        answerBtn.innerHTML =htmlend;
     }
   });
   
}

  





