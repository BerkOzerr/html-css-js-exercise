const api_url = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');
qetQuote(api_url);

async function qetQuote(url){
  const response =await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML =data.content;
  author.innerHTML = data.author;
}

function newQuote(){
  qetQuote(api_url);
}
function newTweet(){
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} from by ${author.innerHTML}`,"Tweet Window","width=600 ,height=300");
}
date();

function date(){
  var dateToday = '2/19/2022, 12:00:00 AM';
var date = new Date().toLocaleDateString()+'  '+new Date().toLocaleTimeString();
console.log(date);
}