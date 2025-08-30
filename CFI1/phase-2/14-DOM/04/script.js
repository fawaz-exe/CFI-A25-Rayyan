let body = document.querySelector('#body');

let userRightCLick = 0;


body.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
    console.log(event);
    alert('right click is disabled')
    userRightCLick = userRightCLick + 1;
    console.log(userRightCLick);
    if (userRightCLick >= 3){
        document.body
    }
});