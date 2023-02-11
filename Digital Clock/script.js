const getHourEl = document.getElementById("hour");
const getMinutesEl = document.getElementById("minutes");
const getSecondsEl = document.getElementById("seconds");
const getAmPmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h -= 12;
    ampm = "PM";
    getAmPmEl.style.background = "#DC143C";
  }

  // add 0 when number less than 10, 1,2,3, ..., 9 -> 01,02,03,..,09
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  getHourEl.innerText = h;
  getMinutesEl.innerText = m;
  getSecondsEl.innerText = s;

  // ! getAmPmEl = ampm; Error
  getAmPmEl, (innerText = ampm);
  // getAmPmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 100);
}

updateClock();

