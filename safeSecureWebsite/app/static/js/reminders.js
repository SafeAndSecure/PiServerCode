/**
 * Created by Joshua on 2/09/2017.
 */
var lastInput = 0;
function takeMedication() {
    console.log("Reminder to take medication");
    responsiveVoice.speak("Please Take Your Medication");
    setInterval(takeMedication, 10000);
}

function statusCheck() {

    console.log("Check if person is ok");
    if (lastInput > 1000) {
        setInterval(takeMedication, 20000);
    }
}


window.addEventListener('load', function(){ // on page load

    document.body.addEventListener('touchstart', function(e){
        lastInput = 0;
    }, false)

}, false)

requestAnimationFrame