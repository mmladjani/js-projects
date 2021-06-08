window.onload = function(){

    let minutes = '00';
    let seconds = '00';
    let tens = '00';

    const buttonStart = document.querySelector('#button-start');
    const buttonStop = document.querySelector('#button-stop');
    const buttonReset = document.querySelector('#button-reset');

    const appendTens = document.querySelector('#tens');
    const appendSeconds = document.querySelector('#seconds');
    const appendMinutes = document.querySelector('#minutes');
    console.log(appendMinutes, 'minutes')

    let Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        console.log(Interval);
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00'
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        appendMinutes.innerHTML = minutes;
    }

    function startTimer(){
        tens++;
        if (tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        
        if (tens > 99){
            tens = 0;
            appendTens.innerHTML = '0' + tens;
            seconds++;

            if(seconds <= 9){
                appendSeconds.innerHTML = '0' + seconds;
            }
            else{
                appendSeconds.innerHTML = seconds;
            }

            if(seconds > 59){
                seconds = 0;
                minutes++;
                appendSeconds.innerHTML = '0' + seconds;
                appendMinutes.removeAttribute('class');
                document.querySelector('#minutes-separator').removeAttribute('class');
                appendMinutes.innerHTML = '0' + minutes;
            }
        }

    }

}