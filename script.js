let is24Hour = true; 

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour12: !is24Hour, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const date = now.toDateString();

  document.getElementById('clock').innerText = time;
  document.getElementById('date').innerText = date;
}

setInterval(updateClock, 1000);
updateClock();

const switchBtn = document.getElementById('formatSwitch');

switchBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;

  switchBtn.innerText = is24Hour
    ? 'Switch to 12-Hour Format'
    : 'Switch to 24-Hour Format';

  updateClock(); 
});
