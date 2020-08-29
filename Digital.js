setInterval(function() {
  var currentTime = new Date();

  var hrs = currentTime.getHours();
  var min = currentTime.getMinutes();
  var sec = currentTime.getSeconds();
  var ampm = "AM";
  if (hrs >= 12) {
    ampm = "PM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  } 
  var clockTime = hrs + ":" + min + ":" + sec + " " + ampm;

  var clock = document.getElementById('clock');
  clock.innerText = clockTime;
},1000);
