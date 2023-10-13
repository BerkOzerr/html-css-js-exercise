const cards  = document.querySelectorAll('.memory-card');
const gameMemory = document.querySelector('.memory-game');
const clicker = document.querySelector('.click-number');
let hasFlippedCard = false;
let firstCard , secondCard;
let lockBoard =  false;
let click = 0;
let winner = 0;

function flipCard(){
  if(lockBoard) return;
  if (this === firstCard ) return;
  this.classList.add('flip');
  if(!hasFlippedCard){
    hasFlippedCard =true;
    firstCard = this;
    click++;
    clicker.innerHTML = `Tiklama sayiniz :  <span class="click-count"> ${click}<span> `;
    return;
  }
    secondCard = this;
    click++;
    clicker.innerHTML = `Tiklama sayiniz :  <span class="click-count"> ${click}<span> `;
    matchCards();
}
function matchCards(){
  let match= firstCard.dataset.framework === secondCard.dataset.framework
  match ? disableCard() : unFlipCard() ;
}

function disableCard(){
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click',flipCard);
  winner++;
  gameOver();
  resetBoard();
}
function unFlipCard(){
  lockBoard=true;
  setTimeout(() => {
    lockBoard = false;
    firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  resetBoard();
  gameOver();
  }, 1500);
  
}

function resetBoard(){
  [hasFlippedCard , lockBoard] = [false,false];
  [firstCard ,secondCard] =[null,null];
}

(function shuffle(){
  cards.forEach(card =>{
      let randomPos =Math.floor(Math.random()*12);
    card.style.order=randomPos;
  });
})();

function gameOver(){
  
  if(winner === cards.length/2){
    gameMemory.innerHTML =`<div class="game-result"><div class="winner-result">${click} tiklama ile kazandiniz tebrikler.</div>
    <button onclick = 'location.reload()' class="try-again">Try Again</button></div>`;
    clicker.innerHTML = "";
  }
}

cards.forEach(card => card.addEventListener('click' , flipCard));