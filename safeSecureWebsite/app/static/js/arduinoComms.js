'use strict';

class Node {
    constructor(room, ip) {
        this.roomId = room;
        this.ip = ip;
        this.di_state = [0, 0, 0, 0];
        this.do_state = [0, 0, 0, 0];
        this.do_str = ["&DO01=0", "&DO02=0", "&DO03=1", "&DO04=1"];
        this.ai_state = [0, 0, 0, 0];
        this.pwm1_colour = "";
        this.pwm2_colour = "";
        this.temperature = 0;
        this.humidity = 0;
        this.url = "";
        console.log(this.roomId);
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
        this.url = "http://" + this.ip + "/ajax_inputs" + this.do_str[0] + this.do_str[1] + this.do_str[2] + this.do_str[3] + this.pwm1_colour + this.pwm2_colour;
        //console.log(this.url);
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


var Bedroom_1 = new Node("Bedroom_1", "192.168.0.98");
var Bedroom_2 = new Node("Bedroom_2","192.168.0.99");
var n = 0;

function loop() {
    n++;

    if (n%60 == 0) {
        //console.log("Loop");
        Bedroom_1.GetArduinoIO();
        //Bedroom_1.reflectInputs();
        Bedroom_2.GetArduinoIO();
        //Bedroom_2.reflectInputs();
        if (Bedroom_1.di_state1) {
            Bed1PersonEnterRoomFunc();
        }
        else {
            Bed1PersonLeaveRoomFunc();
        }
        if (Bedroom_1.di_state2) {
            BathroomPersonEnterRoomFunc();
        }
        else {
            BathroomPersonLeaveRoomFunc();
        }
        if (Bedroom_1.di_state3) {
            KitchenPersonEnterRoomFunc();
        }
        else {
            KitchenPersonLeaveRoomFunc();
        }
        if (Bedroom_1.di_state4) {
            Bed1_DoorOpenFunc();
        }
        else {
            Bed1_DoorCloseFunc();
        }
        /*if (Bedroom_2.di_state1) {
            Bed1PersonEnterRoomFunc();
        }
        else {
            Bed1PersonLeaveRoomFunc();
        }
        if (Bedroom_2.di_state1) {
            Bed1PersonEnterRoomFunc();
        }
        else {
            Bed1PersonLeaveRoomFunc();
        }
        if (Bedroom_2.di_state2) {
            Bed1PersonEnterRoomFunc();
        }
        else {
            Bed1PersonLeaveRoomFunc();
        }
        if (Bedroom_2.di_state3) {
            Bed1PersonEnterRoomFunc();
        }
        else {
            Bed1PersonLeaveRoomFunc();
        }*/
        n = 0;
    }
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
