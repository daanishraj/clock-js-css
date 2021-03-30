
const secondsHand = document.getElementById('seconds-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function setDate() {
    const date = new Date()
    const seconds = date.getSeconds()
    const secondsDegrees = (seconds / 60) * 360 + 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = date.getMinutes()
    const minsDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`

    const hours = date.getHours()
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);


setDate()