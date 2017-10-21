/**
 * Created by Joshua on 2/09/2017.
 */
var lastInput = 0;
function takeMedication() {
    console.log("Reminder to take medication");
    responsiveVoice.speak("Please Take Your Medication", "UK English Male");
    setInterval(takeMedication, 5000);
}

function statusCheck() {

    console.log("Check if person is ok");
    //responsiveVoice.speak("No input detected. Are you ok", "UK English Male");
}

window.addEventListener('load', function(){ // on page load

    document.addEventListener('touchstart', function(e){
        lastInput = 0;
    }, false);
    document.addEventListener('click', function(e){
        lastInput = 0;
    }, false);
    document.addEventListener('mousemove', function(e){
        lastInput = 0;
    }, false);

}, false)

//takeMedication();
function mainLoop() {
    //console.log(lastInput);

    if (lastInput > 1000)
    {
        lastInput = 0;
        //statusCheck();
    }
    lastInput++;
    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);
