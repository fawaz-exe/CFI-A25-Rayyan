setInterval(() => {
  const TIME = document.getElementById("time");
  TIME.innerText = new Date().toLocaleTimeString();
}, 1000);

var ALARM_BTN = document.getElementById("setAlarm");
ALARM_BTN.addEventListener("click", () => setAlarm());

function setAlarm() {
  console.log("Button Clicked");

  var inputAlarmTime = document.getElementById("alarm-input").value;
  var inputHour = inputAlarmTime.split(":")[0];
  var inputMins = inputAlarmTime.split(":")[1];

  // backDating => if input time is behind the current time it should give an error, time cannot be backdated.
  console.log(inputHour, inputMins);

  var currentHour = new Date().getHours();
  var currentMins = new Date().getMinutes();

  if (inputHour < currentHour) {
    // console.log('INvalid Input time');
    backDated();
  } else if (inputHour == currentHour && inputMins < currentMins) {
    // console.log('Minutes is backdated!');
    backDated();
  } else {
    let time = setInterval(() => {
      // var inputAlarmTime = document.getElementById("alarm-input").value;
      var inputHour = inputAlarmTime.split(":")[0];
      var inputMins = inputAlarmTime.split(":")[1];

      // backDating => if input time is behind the current time it should give an error, time cannot be backdated.
      //      console.log(inputHour, inputMins);

      var currentHour = new Date().getHours();
      var currentMins = new Date().getMinutes();

      ALARM_BTN.disabled = true;

      if (inputHour == currentHour && inputMins == currentMins) {
        console.log("Ring the Alarm");
        clearInterval(time);
        ALARM_BTN.disabled = false;

        return playSound();
      }
    }, 1000);
  }
}

function backDated() {
  document.getElementById("error").innerText = "Input is backdated";
  setTimeout(() => {
    document.getElementById("error").innerText = "";
  }, 3000);
}

let audio = new Audio("./audio.mp3");

function playSound() {
  return audio.play();
}

function stopSound(){
    return [audio.pause(), audio.currentTime = 0];
}