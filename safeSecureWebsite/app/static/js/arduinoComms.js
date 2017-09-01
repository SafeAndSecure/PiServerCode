type = ['','info','success','warning','danger'];


var nodes = {'Lounge Room':'192.168.0.55', 'Kitchen':'192.168.0.56'};


function httpPut(url, data)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", url, false ); // false for synchronous request
    xmlHttp.send( data );
    return xmlHttp.responseText;
}
function httpGet(url, data)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( data );
    return xmlHttp.responseText;
}

function nodeStatus(){
    var output = httpGet("http://192.168.0.177/status",null);
    console.log(output);
}

function checkNode(roomID)
{
    return GetArduinoIO(nodeIP[room])
}
function GetArduinoIO(nodeIP)
		{
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
							var num_an = this.responseXML.getElementsByTagName('analog').length;
							for (count = 0; count < num_an; count++) {
								document.getElementsByClassName("analog")[count].innerHTML =
									this.responseXML.getElementsByTagName('analog')[count].childNodes[0].nodeValue;
							}
							// get switch inputs
							var num_an = this.responseXML.getElementsByTagName('switch').length;
							for (count = 0; count < num_an; count++) {
								document.getElementsByClassName("switches")[count].innerHTML =
									this.responseXML.getElementsByTagName('switch')[count].childNodes[0].nodeValue;
							}
							// LED 1
							if (this.responseXML.getElementsByTagName('LED')[0].childNodes[0].nodeValue === "checked") {
								document.LED_form.LED1.checked = true;
							}
							else {
								document.LED_form.LED1.checked = false;
							}
							// LED 2
							if (this.responseXML.getElementsByTagName('LED')[1].childNodes[0].nodeValue === "checked") {
								document.LED_form.LED2.checked = true;
							}
							else {
								document.LED_form.LED2.checked = false;
							}
							// LED 3
							if (this.responseXML.getElementsByTagName('LED')[2].childNodes[0].nodeValue === "on") {
								document.getElementById("LED3").innerHTML = "LED 3 is ON (D8)";
								LED3_state = 1;
							}
							else {
								document.getElementById("LED3").innerHTML = "LED 3 is OFF (D8)";
								LED3_state = 0;
							}
							// LED 4
							if (this.responseXML.getElementsByTagName('LED')[3].childNodes[0].nodeValue === "on") {
								document.getElementById("LED4").innerHTML = "LED 4 is ON (D9)";
								LED4_state = 1;
							}
							else {
								document.getElementById("LED4").innerHTML = "LED 4 is OFF (D9)";
								LED4_state = 0;
							}
						}
					}
				}
			}
			// send HTTP GET request with LEDs to switch on/off if any
			request.open("GET", "ajax_inputs" + strLED1 + strLED2 + strLED3 + strLED4 + nocache, true);
			request.send(null);
			setTimeout('GetArduinoIO()', 1000);
			strLED1 = "";
			strLED2 = "";
			strLED3 = "";
			strLED4 = "";
		}


class Node {
    constructor(ip, width) {
        this.ip = ip;
        var digitalInputs = [];
        var digitaOutputs = [];
        var analogInputs = [];
    }
}