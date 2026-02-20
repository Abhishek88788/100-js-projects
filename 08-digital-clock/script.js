const updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  //11%12=11
  //12%12=0
  //13%12=1
  //14%12=2

  hours = hours ? hours : 12;
  //if hours is zero make it 12

  hours = hours <= 10 ? "0" + hours : hours;
  minutes <= 10 ? "0" + minutes : minutes;
  seconds <= 10 ? "0" + seconds : seconds;

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
};
setInterval(updateTime, 1000);
updateTime();
