function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const timeDisplay = document.getElementById('time');
    timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateClock, 1000);
  
  let alarmHours = 0;
  let alarmMinutes = 0;
  let isAlarmOn = false;
  
  function setAlarm() {
    alarmHours = document.getElementById('hours').value;
    alarmMinutes = document.getElementById('minutes').value;
  }
  
  function toggleAlarm() {
    isAlarmOn = !isAlarmOn;
  }
  
  function checkAlarm() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    if (hours === alarmHours && minutes === alarmMinutes && isAlarmOn) {
      alert('Wake up!');
    }
  }
  
  setInterval(checkAlarm, 1000);
  