'use strict';

const type = ['','info','success','warning','danger'];

class Node {
    constructor(room, ip) {
        this.roomId = room;
        this.ip = ip;
        this.di_state = [0, 0, 0, 0];
        this.do_state = [0, 0, 0, 0];
        this.do_str = ["&DO0=1", "&DO1=1", "&DO2=1", "&DO3=1"];
        this.ai_state = [0, 0, 0, 0];
        this.pwm1_colour = "";
        this.pwm2_colour = "";
        this.temperature = 0;
        this.humidity = 0;
    }
    get_ai_state(pin) {
        return this.ai_state[pin];
    }
    get_di_state(pin) {
        return this.di_state[pin];
    }

    get_do_state(pin) {
        return this.do_state[pin];
    }

    set_do_state(pin, state) {
        this.do_state[pin] = state;
        this.do_str[pin] = "&DO0" + pin + "=" + state;
        console.log(pin);
        console.log(state);
        this.GetArduinoIO();
    }
    set_di_state(pin, state) {
        this.di_state[pin] = state;
        console.log(pin);
        console.log(state);
    }

    set_ai_state(pin, value) {
        this.ai_state[pin] = value;
    }

    GetArduinoIO() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function()
        {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    if (this.response != null) {
                        // XML file received - contains analog values, switch values and LED states
                        var count;

                        console.log(this.response);
                        var parser = new DOMParser();
                        xmlResponse = parser.parseFromString(this.response, "application/xml");

                        // get analog inputs
                        var num_an = xmlResponse.getElementsByTagName('analog01').length;
                            //set_ai_state(1, xmlResponse.getElementsByTagName('analog01').childNodes[0].nodeValue);
                        // get switch inputs
                        var num_an = xmlResponse.getElementsByTagName('switch').length;
                        for (count = 0; count < num_an; count++) {
                          //  document.getElementsByClassName("switches")[count].innerHTML =
                          //      xmlResponse.getElementsByTagName('switch')[count].childNodes[0].nodeValue;
                        }
                        // LED 1
                        if (xmlResponse.getElementsByTagName('switch')[0].childNodes[0].nodeValue === "ON") {
                            console.log("Enter room DI01");
                            responsiveVoice.speak("Input 1 is on");
                            Bed1PersonEnterRoomFunc();
                            set_do_state(1,1);
                        }
                        else {
                            console.log("Leave room DI01");
                            responsiveVoice.speak("Input 1 is off");
                            Bed1PersonLeaveRoomFunc();
                            //set_do_state(1,0);
                        }
                        // LED 2
                        if (xmlResponse.getElementsByTagName('switch')[1].childNodes[0].nodeValue === "ON") {
                            console.log("Enter room DI02");
                            responsiveVoice.speak("Input 2 is on");
                            Bed1PersonEnterRoomFunc();
                            set_do_state(2, 1);
                        }
                        if (xmlResponse.getElementsByTagName('switch')[1].childNodes[0].nodeValue === "ON") {
                            D02_State = 1
                            set_do_state(2,1);
                        }
                        else {
                            set_do_state(2,0);
                        }
                        // LED 3
                        if (xmlResponse.getElementsByTagName('switch')[2].childNodes[0].nodeValue === "ON") {
                            D03_State = 1;
                        }
                        else {
                            document.getElementById("DI03").innerHTML = "LED 3 is OFF (D8)";
                            D03_State = 0;
                        }
                          alert(xmlResponse.getElementsByTagName("temperature")[0].nodeValue);
                        // LED 4
                        if (xmlResponse.getElementsByTagName('DI04')[3].childNodes[0].nodeValue === "ON") {
                            responsiveVoice.speak("Input 4 is on");
                            D04_State = 1;

                        }
                        else {
                            D04_State = 0;
                        }
                        console.log(xmlResponse.getElementsByTagName('temperature')[0]);
                        var humid = xmlResponse.getElementsByTagName('humidity')[0].childNodes[0].nodeValue;

                    }
                }
            }
            //alert(get_ai_state(1));
        }
        // send HTTP GET request with LEDs to switch on/off if any
        console.log(this.ip);
        var url = "http://" + this.ip + "/ajax_inputs" + this.do_str[0] + this.do_str[1] + this.do_str[2] + this.do_str[3] + this.pwm1_colour + this.pwm2_colour;
        console.log(url);
        request.open("GET", url, true);
        request.send(null);

    }
}
var Bedroom_1 = new Node("Bedroom_1", "192.168.0.98");

var nodes = {'Lounge Room':'192.168.0.55', 'Kitchen':'192.168.0.56'};
function checkNode(node)
{
    return GetArduinoIO(node.roomId)
}

var strDO01 = "";
var strDO02 = "";
var strDO03 = "";
var strDO04 = "";
var strPWM01 = "";
var strPWM02 = "";
var D01_State = 0;
var D02_State = 0;
var D03_State = 0;
var D04_State = 0;
var DO01_State = 0;
var DO02_State = 0;
var DO03_State = 0;
var DO04_State = 0;
var xmlResponse = "";
var num_an = 40;
var PWM01_RedState = 0;
var PWM01_GreenState = 0;
var PWM01_BlueState = 0;
var PWM01_WhiteState = 0;
var PWM01_RoomState = 0;
var PWM01_OrangeState = 0;
var PWM01_PurpleState = 0;

function GetButton1(node)
{
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