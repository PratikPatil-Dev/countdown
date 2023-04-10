
let hdg1 = document.createElement("h1");
let hdgText = document.createTextNode(
  "Your 10 seconds timer will start now..."
);

hdg1.appendChild(hdgText);
document.body.appendChild(hdg1)


let counter = document.getElementById("counter");
let cnt = 10;

setTimeout(function () {
  let countdown = setInterval(function () {
    counter.innerText = cnt;
    switch (cnt) {
      case 0:
        counter.style.backgroundColor = "blue";
        break;
      case 1:
        counter.style.backgroundColor = "red";
        break;
      case 2:
        counter.style.backgroundColor = "yellow";
        break;
      case 3:
        counter.style.backgroundColor = "cyan";
        break;
      case 4:
        counter.style.backgroundColor = "pink";
        break;
      case 5:
        counter.style.backgroundColor = "green";
        break;
      case 6:
        counter.style.backgroundColor = "orange";
        break;
      case 7:
        counter.style.backgroundColor = "purple";
        break;
      case 8:
        counter.style.backgroundColor = "magenta";
        break;
      case 9:
        counter.style.backgroundColor = "gray";
        break;
      case 10:
        counter.style.backgroundColor = "crimson";
        break;
    }
    cnt--;
    if (cnt < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}, 1000);
