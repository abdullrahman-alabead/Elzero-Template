// Date Count Down
setInterval(() => {
    let now = new Date().getTime();
    let countDownDate = new Date("Jan 1, 2023 0:0:0");
    let timeLeft = countDownDate - now;
    // Remaining Days/Hours/Minuts/Seconds
    let days = Math.floor(timeLeft / (1000*60*60*24));
    let hours = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60));
    let minuts = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000*60));
    let seconds = Math.floor((timeLeft % (1000*60)) / 1000);
    if(days < 10)(
        days = `0${days}`
    )
    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minuts < 10){
        minuts = `0${minuts}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }
    // Update Html
    document.querySelector("span.days").innerHTML = days;
    document.querySelector("span.hours").innerHTML = hours;
    document.querySelector("span.minuts").innerHTML = minuts;
    document.querySelector("span.seconds").innerHTML = seconds;
},1000)

// Animate Skill Progress on scroll

let skillsSection = document.querySelector(".skills");
let progressBar = document.querySelectorAll(".apercent");

window.addEventListener("scroll", () => {
    if(window.scrollY >= skillsSection.offsetTop - 250){
        progressBar.forEach(bar => {
            bar.style.width= `${bar.getAttribute('pro')}`
        })
    }
})