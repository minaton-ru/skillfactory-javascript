const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const inputminutes = document.querySelector('.inputminutes');
const stop = document.querySelector('.stop');


let countSec = 0;
let countMin = 0;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();


const countDown = () => {	
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>Завершено</p>'
  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  updateText();
}

inputminutes.onclick = () => { 
	countMin = document.getElementById("inputminutes").value;
	countSec = document.getElementById("inputseconds").value;
	if (countMin > 59) {
		countMin = 0;
		message.innerHTML = '<p>Минуты должны быть меньше 59</p>'
	}
	if (countSec > 59) {
		countSec = 0;
		message.innerHTML = '<p>Секунды должны быть меньше 59</p>'
	}
	else {
		updateText();
	}
}


plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText();
}

minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}

start.onclick = () => {
	  countDown();  
}

stop.onclick = () => {
	clearTimeout(countDown);
	updateText();
}
