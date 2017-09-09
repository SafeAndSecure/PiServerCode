'use strict';

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
        this.do_state[1] = state;
        this.do_str[1] = "&DO0" + 1 + "=" + state;
        this.GetArduinoIO();
    }

    set do_state2(state) {
        this.do_state[2] = state;
        this.do_str[2] = "&DO1" + 1 + "=" + state;
        this.GetArduinoIO();
    }

    set do_state3(state) {
        this.do_state[3] = state;
        this.do_str[3] = "&DO2" + 1 + "=" + state;
        this.GetArduinoIO();
    }

    set do_state4(state) {
        this.do_state[4] = state;
        this.do_str[4] = "&DO3" + 1 + "=" + state;
        this.GetArduinoIO();
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

    set_ai_state(pin, value) {
        this.ai_state[pin] = value;
    }
 get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
    GetArduinoIO() {
        var request = new XMLHttpRequest();
        var xmlResponse = "";
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
                            di_state1 = 1;

                        }
                        else {
                            console.log("Leave room DI01");
                            responsiveVoice.speak("Input 1 is off");
                            Bed1PersonLeaveRoomFunc();
                            this.set_di_state(1,0);
                            di_state1 = 0;
                        }
                        // LED 2
                        if (xmlResponse.getElementsByTagName('switch')[1].childNodes[0].nodeValue === "ON") {
                            console.log("Enter room DI02");
                            responsiveVoice.speak("Input 2 is on");
                            Bed1PersonEnterRoomFunc();
                            di_state2 = 1;
                        }
                        else {
                            console.log("Leave room DI02");
                            responsiveVoice.speak("Input 2 is off");
                            Bed2PersonLeaveRoomFunc();
                            di_state2 = 0;
                        }
                        if (xmlResponse.getElementsByTagName('switch')[2].childNodes[0].nodeValue === "ON") {
                            responsiveVoice.speak("Input 3 is on");
                            di_state3 = 1;

                        }
                        else {
                            responsiveVoice.speak("Input 3 is off");
                            di_state3 = 0;
                        }
                        // LED 4
                        if (xmlResponse.getElementsByTagName('switch')[3].childNodes[0].nodeValue === "ON") {
                            di_state4 = 1;
                            responsiveVoice.speak("Input 4 is on");
                        }
                        else {
                            document.getElementById("DI04").innerHTML = "LED 4 is OFF (D8)";
                            di_state4 = 0;
                            responsiveVoice.speak("Input 4 is off");
                        }
                          //alert(xmlResponse.getElementsByTagName("temperature")[0].nodeValue);

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
