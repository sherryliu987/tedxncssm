const countDownDate = new Date("Jan 9, 2021 8:45:00").getTime();

const x = setInterval(function () {

    let now = new Date().getTime();
    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("countdown-message").innerHTML =
            "The event is now live! Check out the schedule to see today's speaker lineup - all speeches will be shown" +
            " in the auditorium. Enjoy!"
    }else{
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }
}, 1000);