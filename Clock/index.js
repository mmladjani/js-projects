function displayTime (){

    const timeEl = document.querySelector('#display-time');
    const dateEl = document.querySelector('#display-date');

    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDay();

    if(h < 9){
        h = `0${h}`
    }
    if(m < 9){
        m = `0${m}`
    }
    if(s <= 9){
        s = `0${s}`
    }

    if(month < 9){
        month = `0${month}`
    }
    if(day <= 9){
        day = `0${day}`
    }

    let clockTime = `${h}:${m}:${s}`;
    let currentDate = `${day}/${month}/${year}`;

    timeEl.innerHTML = clockTime;
    dateEl.innerHTML = currentDate;

    setInterval(displayTime, 1000);
}

displayTime();