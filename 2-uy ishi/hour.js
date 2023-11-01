let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let sekund = document.getElementById("sekund");
let week = document.getElementById("week");
let month = document.getElementById("month");
let day = document.getElementById("day");

setInterval(() => {
  let time = new Date();
  

  hour.innerHTML = time.getHours();
  minute.innerHTML = time.getMinutes();
  sekund.innerHTML= time.getSeconds();
  month.innerHTML = time.getMonth() + 1;
  day.innerHTML = time.getDate();
}, 1000);



switch (week) {
  case 0:
    week = "Sunday";
    break;

  case 1:
    week = "Monday";
    break;

  case 2:
    week = "Thuesday";
    break;

  case 3:
    week = "Wednesday";
    break;

  case 4:
    week = "Thursday";
    break;

  case 5:
    week = "Friday";
    break;

  case 6:
    week = "Saturday";
    break;
}

week.innerHTML = week ;
