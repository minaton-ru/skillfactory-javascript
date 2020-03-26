const urlCats = new URL('https://sf-pyw.mosyag.in/sse/vote/cats');
const urlParrots = new URL('https://sf-pyw.mosyag.in/sse/vote/parrots');
const urlDogs = new URL('https://sf-pyw.mosyag.in/sse/vote/dogs');



document.querySelector('.button-vote-cats').onclick = function() {
	$.post(urlCats);
   	}
document.querySelector('.button-vote-parrots').onclick = function() {
	$.post(urlParrots);
   	}
document.querySelector('.button-vote-dogs').onclick = function() {
	$.post(urlDogs);
   	}
