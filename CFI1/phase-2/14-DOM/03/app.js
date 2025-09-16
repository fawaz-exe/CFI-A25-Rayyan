// Very Bad way
function clickMe(){
    console.log('First Button!');
}


// Bad Way of Doing events
const secondBtn = document.querySelector('.second-btn');
secondBtn.onclick = ()=>{
    console.log('Hey!');
}

// Best Way
const best = document.querySelector('#best');

const greetings = ()=>{
    console.log('Salutations!');
}

best.addEventListener('click', greetings);

// --- Event (e) Object ------

const para = document.querySelector('.para');

para.addEventListener('click', (data)=>{
    console.log(data);
})


// FormData

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('this is form: ', event);
    console.log('Form Data: ', input.value);
})