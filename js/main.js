const menutoggle = document.querySelector(".spccetoggle");
const navmenu = document.querySelector(".navicon");

menutoggle.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});

let launchDate = new Date("Dec 25, 2024 11:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();

  let t = launchDate - now;

  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }

    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) {
      mins = "0" + mins;
    }

    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) {
      secs = "0" + secs;
    }

    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    document.querySelector(".countdown").innerText = time;
    document.querySelector(".countdown1").innerText = time;
    document.querySelector(".countdown2").innerText = time;
    document.querySelector(".countdown3").innerText = time;
    document.querySelector(".countdown4").innerText = time;
    document.querySelector(".countdown5").innerText = time;
    document.querySelector(".countdown6").innerText = time;
    document.querySelector(".countdown7").innerText = time;
    document.querySelector(".countdown8").innerText = time;
    document.querySelector(".countdown9").innerText = time;
    document.querySelector(".countdown10").innerText = time;
    document.querySelector(".countdown11").innerText = time;
  }
}
