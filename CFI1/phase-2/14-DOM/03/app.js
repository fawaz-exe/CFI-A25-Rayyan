function clickMe(){
    console.log('first button');
}


const secondBtn = document.querySelector('.second-btn');
secondBtn.onclick = ()=>{
    console.log('Hey!')
}

const best = document.querySelector('#best');

const greetings = ()=>{
    console.log('salutations');
}

best.addEventListener('click', greetings)


const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log()
})
