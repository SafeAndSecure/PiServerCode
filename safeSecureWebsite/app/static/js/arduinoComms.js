'use strict';

class Node {
    constructor(room, ip) {
        this.roomId = room;
        this.ip = ip;
        this.di_state = [0, 0, 0, 0];
        this.do_state = [0, 0, 0, 0];
        this.pwm_state = [0, 0, 0];
        this.pwm_str = ["&PWM01=0", "&PWM02=0", "&PWM03=1"];
        this.do_str = ["&DO01=0", "&DO02=0", "&DO03=1", "&DO04=1"];
        this.ai_state = [0, 0, 0, 0];
        /*this.pwm1 = "1";
        this.pwm2 = "1";
        this.pwm3 = "1";*/
        this.temperature = 22;
        this.humidity = 0;
        this.url = "";
        console.log(this.roomId);
    }
    get pwm_state1() {
        return this.pwm_state[0];
    }
    get pwm_state2() {
        return this.pwm_state[1];
    }
    get pwm_state3() {
        return this.pwm_state[2];
    }
    set pwm_state1(state) {
        console.log("Setting PWM 1");
        this.pwm_state[0] = state;
        this.pwm_str[0] = "&PWM01" + "=" + state;
    }
    set pwm_state2(state) {
        this.pwm_state[1] = state;
        this.pwm_str[1] = "&PWM02"  + "=" + state;
    }
    set pwm_state3(state) {
        this.pwm_state[2] = state;
        this.pwm_str[2] = "&PWM03" + "=" + state;
    }
    get do_state1() {
        return this.do_state[0];
    }
    get do_state2() {
        return this.do_state[1];
    }
    get do_state3() {
        return this.do_state[2];
    }
    get do_state4() {
        return this.do_state[3];
    }
    set do_state1(state) {
        this.do_state[0] = state;
        this.do_str[0] = "&DO01" + "=" + state;
    }
    set do_state2(state) {
        this.do_state[1] = state;
        this.do_str[1] = "&DO02"  + "=" + state;
    }
    set do_state3(state) {
        this.do_state[2] = state;
        this.do_str[2] = "&DO03" + "=" + state;
    }
    set do_state4(state) {
        this.do_state[3] = state;
        this.do_str[3] = "&DO04" + "=" + state;
    }
    get di_state1() {
        return this.di_state[0];
    }
    get di_state2() {
        return this.di_state[1];
    }
    get di_state3() {
        return this.di_state[2];
    }
    get di_state4() {
        return this.di_state[3];
    }
    set di_state1(state) {
        this.di_state[0] = state;
    }
    set di_state2(state) {
        this.di_state[1] = state;
    }
    set di_state3(state) {
        this.di_state[2] = state;
    }
    set di_state4(state) {
        this.di_state[3] = state;
    }
    get ai_state1() {
        return this.ai_state[0];
    }
    get ai_state2() {
        return this.ai_state[1];
    }
    get ai_state3() {
        return this.ai_state[2];
    }
    get ai_state4() {
        return this.ai_state[3];
    }
    set ai_state1(state) {
        this.ai_state[0] = state;
    }
    set ai_state2(state) {
        this.ai_state[1] = state;
    }
    set ai_state3(state) {
        this.ai_state[2] = state;
    }
    set ai_state4(state) {
        this.ai_state[3] = state;
    }
    togglePWM1() {
        console.log("Toggling PWM 1");
        if(this.pwm_state1){
            this.pwm_state1 = 0;
        }
        else {
            this.pwm_state1 = 1;
        }
    }
    togglePWM2() {
        console.log("Toggling PWM 2");
        if(this.pwm_state2){
            this.pwm_state2 = 0;
        }
        else {
            this.pwm_state2 = 1;
        }
    }
    togglePWM3(){
        console.log("Toggling PWM 3");
        if(this.pwm_state3){
            this.pwm_state3 = 0;
        }
        else {
            this.pwm_state3 = 1;
        }
    }
    toggleDO1() {
        console.log("Toggling pin 1");
        if(this.do_state1){
            this.do_state1 = 0;
        }
        else {
            this.do_state1 = 1;
        }
    }
    toggleDO2() {
        console.log("Toggling pin 2");
        if(this.do_state2){
            this.do_state2 = 0;
        }
        else {
            this.do_state2 = 1;
        }
    }
    toggleDO3(){
        console.log("Toggling pin 3");
        if(this.do_state3){
            this.do_state3 = 0;
        }
        else {
            this.do_state3 = 1;
        }
    }
    toggleDO4(){
        console.log("Toggling pin 4");
        if(this.do_state4){
            this.do_state4 = 0;
        }
        else {
            this.do_state4 = 1;
        }
    }
    GetArduinoIO() {
        let request = new XMLHttpRequest();
        let node = this;
        request.onreadystatechange = function()
        {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    if (this.response !== null) {
                        // XML file received - contains analog values, switch values and LED states
                        console.log(this.response);
                        let parser = new DOMParser();
                        var xmlResponse = parser.parseFromString(this.responseText, "application/xml");

                        if (xmlResponse.getElementsByTagName('switch')[0].childNodes[0].nodeValue === "ON") {
                            node.di_state1 = 1;
                        }
                        else {
                            //Bed1PersonLeaveRoomFunc();
                            node.di_state1 = 0;
                        }
                        if (xmlResponse.getElementsByTagName('switch')[1].childNodes[0].nodeValue === "ON") {
                            node.di_state2=1;
                        }
                        else {
                            node.di_state2 = 0;
                        }
                        if (xmlResponse.getElementsByTagName('switch')[2].childNodes[0].nodeValue === "ON") {
                            node.di_state3 = 1;
                        }
                        else {
                            node.di_state3 = 0;
                        }
                        if (xmlResponse.getElementsByTagName('switch')[3].childNodes[0].nodeValue === "ON") {
                            node.di_state4 = 1;
                        }
                        else {
                            node.di_state4 = 0;
                        }

                        node.ai_state1 = xmlResponse.getElementsByTagName('analog')[0].childNodes[0].nodeValue;
                        node.ai_state2 = xmlResponse.getElementsByTagName('analog')[1].childNodes[0].nodeValue;
                        //node.ai_state3 = xmlResponse.getElementsByTagName('analog')[2].childNodes[0].nodeValue;
                        //node.ai_state4 = xmlResponse.getElementsByTagName('analog')[3].childNodes[0].nodeValue;
                        //console.log(xmlResponse.getElementsByTagName('temperature')[0].childNodes[0].nodeValue);

                        var humid = xmlResponse.getElementsByTagName('humidity')[0].childNodes[0].nodeValue;
                        //console.log(humid);
                    }
                    else {
                        console.log("Response is null");
                    }
                }
                else {
                    console.log("Status code = " + this.status);
                }
            }
        };
        // send HTTP GET request with LEDs to switch on/off if any
        //this.reflectInputs();
        this.url = "http://" + this.ip + "/ajax_inputs" + this.do_str[0] + this.do_str[1] + this.do_str[2] + this.do_str[3] + this.pwm_str[0] + this.pwm_str[1] + this.pwm_str[2];
        console.log(this.url);
        request.open("GET", this.url, true);
        request.send(null);
    }
    checkOutputs()
    {
        console.log(this.do_state1);
        console.log(this.do_state2);
        console.log(this.do_state3);
        console.log(this.do_state4);
    }
    checkDigitalInputs()
    {
        console.log(this.di_state1);
        console.log(this.di_state2);
        console.log(this.di_state3);
        console.log(this.di_state4);
    }
    reflectInputs()
    {
        //console.log(this);
        //checkDigitalInputs();
        //checkOutputs();
        this.do_state1 = this.di_state1;
        this.do_state2 = this.di_state2;
        this.do_state3 = this.di_state3;
        this.do_state4 = this.di_state4;
        //console.log(this.ai_state1+this.ai_state2+this.ai_state3+this.ai_state4);
        //console.log(this.ai_state1 + this.ai_state2 + this.ai_state3 + this.ai_state4);
    }
}

if (typeof autoLighting === 'undefined') {
    var autoLighting = true;
}
var Bedrooms = new Node("Bedrooms","192.168.0.98");
var Common_Area = new Node("Common_Area","192.168.0.99");
var Front_Area = new Node("Front_Area","192.168.0.100");
var n = 0;
function setup()
{
}
function loop() {
    n++;
    if (n>100) { // loop is called 60 times a second
    console.log(n);
        Bedrooms.GetArduinoIO();
        BedroomsLoop(autoLighting);
        //Bedrooms.reflectInputs();

        //Common_Area.GetArduinoIO();
        CommonAreasLoop(autoLighting);
        //Common_Area.reflectInputs();

        //Front_Area.GetArduinoIO();
        FrontAreasLoop(autoLighting);
        //Front_Area.reflectInputs();
        //console.log("Loop");
        n = 0;
        }

    requestAnimationFrame(loop);
}
$(document).ready(function() {setup();});

requestAnimationFrame(loop);
