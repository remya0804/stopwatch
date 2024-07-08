let [seconds,minutes,hours] = [0,0,0];

const displayElement = document.getElementById("display");

let timer = null;

const timeIncrement = () => {

    seconds++;

    if(seconds===60) {
        seconds=0;

        minutes++;

        if(minutes===60){

            minutes=0;
            hours++
        }
    }

    let h=(hours<10 ? "0" + hours : hours)
    let m=(minutes<10 ? "0" + minutes : minutes)
    let s=(seconds<10 ? "0" + seconds : seconds)        

    displayElement.innerHTML = h + ":" + m + ":"  + s;

}


const startFunction = () => {

    if(timer!==null){

        clearInterval(timer);
    }

    timer = setInterval(timeIncrement,1000)


}
    
const pauseFunction = () => {

        clearInterval(timer);
    }

    
const resetFunction = () => {

        clearInterval(timer);

        [seconds,minutes,hours] = [0,0,0];

        displayElement.innerHTML = "00:00:00";

    }
    