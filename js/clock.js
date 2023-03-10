const digitalClock = () => {
    const dateNow = new Date();

    let sec = dateNow.getSeconds();
    let min = dateNow.getMinutes();
    let hours = dateNow.getHours();
    let date = dateNow.toDateString();
    let ampm = "am";

    if(hours > 12) {
        hours = hours - 12
        ampm = "pm";
    }
    if(sec < 10) {
        sec = `0${sec}`;
    }
    if(min < 10) {
        min = `0${min}`;
    }
    if(hours < 10) {
        hours = `0${hours}`;
    }
    if(hours == 0) {
        hours = "12";
    }


    const clock = `
    <div class="date">${date}</div>
    <div class="time">${hours} : ${min} : ${sec} pm</div>
    `;

    let clockContainer = document.getElementById("clockContainer");
    clockContainer.innerHTML = clock;
};
digitalClock();

setInterval(digitalClock, 1000);