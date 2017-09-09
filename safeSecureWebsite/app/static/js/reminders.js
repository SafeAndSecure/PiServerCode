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
    responsiveVoice.speak("No input detected. Are you ok");
}


window.addEventListener('load', function(){ // on page load

    document.body.addEventListener('touchstart', function(e){
        lastInput = 0;
    }, false)

}, false)


function mainLoop() {
    if (lastInput > 60*60)
    {
        lastInput = 0;
        statusCheck();
    }
    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);
