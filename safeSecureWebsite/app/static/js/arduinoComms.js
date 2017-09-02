   type = ['','info','success','warning','danger'];


var nodes = {'Lounge Room':'192.168.0.55', 'Kitchen':'192.168.0.56'};
function checkNode(roomID)
{
    return GetArduinoIO(nodeIP[room])
}

strDO01 = "";
strDO02 = "";
strDO03 = "";
strDO04 = "";
var DO01_State = 0;
var DO02_State = 0;
var DO03_State = 0;
var DO04_State = 0;

function GetArduinoIO(ip)
{
    var ip = 'http://192.168.0.98';
    nocache = "&nocache=" + Math.random() * 1000000;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (this.responseXML != null) {
                    // XML file received - contains analog values, switch values and LED states
                    var count;
                    // get analog inputs
                    var num_an = this.responseXML.getElementsByTagName('analog01').length;
                        document.getElementsByClassName("analog01").innerHTML =
                            this.responseXML.getElementsByTagName('analog01').childNodes[0].nodeValue;
                    // get switch inputs
                    var num_an = this.responseXML.getElementsByTagName('switch').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("switches")[count].innerHTML =
                            this.responseXML.getElementsByTagName('switch')[count].childNodes[0].nodeValue;
                    }
                    // LED 1
                    if (this.responseXML.getElementsByTagName('DI01')[0].childNodes[0].nodeValue === "checked") {
                        document.LED_form.LED1.checked = true;
                        console.log("Enter room DI01");
                        Bed1PersonEnterRoomFunc();
                    }
                    else {
                        document.LED_form.LED1.checked = false;
                        console.log("Leave room DI01");
                        Bed1PersonLeaveRoomFunc();
                    }
                    // LED 2
                    if (this.responseXML.getElementsByTagName('DI02')[1].childNodes[0].nodeValue === "checked") {
                        document.LED_form.LED2.checked = true;
                    }
                    else {
                        document.LED_form.LED2.checked = false;
                    }
                    // LED 3
                    if (this.responseXML.getElementsByTagName('DI03')[2].childNodes[0].nodeValue === "on") {
                        document.getElementById("DI03").innerHTML = "LED 3 is ON (D8)";
                        D03_State = 1;
                    }
                    else {
                        document.getElementById("DI03").innerHTML = "LED 3 is OFF (D8)";
                        D03_State = 0;
                    }
                    // LED 4
                    if (this.responseXML.getElementsByTagName('DI04')[3].childNodes[0].nodeValue === "on") {
                        document.getElementById("DI04").innerHTML = "LED 4 is ON (D9)";
                        D04_State = 1;
                    }
                    else {
                        document.getElementById("DI04").innerHTML = "LED 4 is OFF (D9)";
                        D04_State = 0;
                    }
                }
            }
        }
    }
    // send HTTP GET request with LEDs to switch on/off if any
    console.log(ip);
    request.open("GET", ip+"/ajax_inputs" + strDO01 + strDO02 + strDO03 + strDO04 + nocache, true);
    request.send(null);
    setTimeout('GetArduinoIO()', 1000);
    strDO01 = "";
    strDO02 = "";
    strDO03 = "";
    strDO04 = "";
}

function GetButton1(ip)
{
    if (DO01_State === 1) {
        responsiveVoice.speak("Turning light off");
        DO01_State = 0;
        strDO01 = "&DO01=0";
    }
    else {
        DO01_State = 1;
        responsiveVoice.speak("Turning light on");
        strDO01 = "&DO01=1";
    }
    GetArduinoIO(ip);
}
function GetButton2()
{
    if (DO02_State === 1) {
        DO02_State = 0;
        strDO02 = "&DO02=0";
    }
    else {
        DO02_State = 1;
        strDO02 = "&DO02=1";
    }
}
function GetButton3()
{
    if (DO03_State === 1) {
        DO03_State = 0;
        strDO03 = "&DO03=0";
    }
    else {
        DO03_State = 1;
        strDO03 = "&DO03=1";
    }
}
function GetButton4()
{
    if (DO04_State === 1) {
        DO04_State = 0;
        strDO04 = "&DO04=0";
    }
    else {
        DO04_State = 1;
        strDO04 = "&DO04=1";
    }
}