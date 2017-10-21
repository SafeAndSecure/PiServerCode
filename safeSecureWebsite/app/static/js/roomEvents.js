/**
 * Created by Joshua on 20/08/2017.
 */



function Bed1PersonEnterRoomFunc(){
    Bed1PersonEnterRoom.beginElement();
}
function Bed1PersonLeaveRoomFunc(){
    Bed1PersonLeaveRoom.beginElement();
}
function Bed2PersonEnterRoomFunc(){
    Bed2PersonEnterRoom.beginElement();
}
function Bed2PersonLeaveRoomFunc(){
    Bed2PersonLeaveRoom.beginElement();
}

function BathroomPersonEnterRoomFunc(){
    BathroomPersonEnterRoom.beginElement();
}
function BathroomPersonLeaveRoomFunc(){
    BathroomPersonLeaveRoom.beginElement();
}
function LaundryPersonEnterRoomFunc(){
    LaundryPersonEnterRoom.beginElement();
}
function LaundryPersonLeaveRoomFunc() {
    LaundryPersonLeaveRoom.beginElement();
}
function KitchenPersonEnterRoomFunc(){
    KitchenPersonEnterRoom.beginElement();
}
function KitchenPersonLeaveRoomFunc(){
    KitchenPersonLeaveRoom.beginElement();
}
function PorchPersonEnterRoomFunc(){
    PorchPersonEnterRoom.beginElement();
}
function PorchPersonLeaveRoomFunc(){
    PorchPersonLeaveRoom.beginElement();
}
function BalconyPersonEnterRoomFunc(){
    BalconyPersonEnterRoom.beginElement();
}
function BalconyPersonLeaveRoomFunc(){
    BalconyPersonLeaveRoom.beginElement();
}

function Living_RoomPersonEnterRoomFunc(){
    Living_RoomPersonEnterRoom.beginElement();
    KitchenPersonEnterRoom.beginElement();
}
function Living_RoomPersonLeaveRoomFunc(){
    Living_RoomPersonLeaveRoom.beginElement();
    KitchenPersonLeavesRoom.beginElement();
}
function Front_DoorOpenFunc(){
    Front_DoorOpen.beginElement();
}
function Front_DoorCloseFunc(){
    Front_DoorClose.beginElement();
}
function Bed1_DoorOpenFunc(){

    console.log("bedroom 1 door open function being called");
    Bed1_DoorOpen.beginElement();
}
function Bed1_DoorCloseFunc(){
    console.log("bedroom 1 door close function being called");
    Bed1_DoorClose.beginElement();
}
function Bed2_DoorOpenFunc(){
    Bed2_DoorOpen.beginElement();
}
function Bed2_DoorCloseFunc(){
    Bed2_DoorClose.beginElement();
}
function Bathroom_DoorOpenFunc(){
    Bathroom_DoorOpen.beginElement();
}
function Bathroom_DoorCloseFunc(){
    Bathroom_DoorClose.beginElement();
}
function Balcony_DoorOpenFunc(){
    Balcony_DoorOpen.beginElement();
}
function Balcony_DoorCloseFunc(){
    Balcony_DoorClose.beginElement();
}
function Bed2_DoorAlarmOnFunc(){
    Bed2_DoorAlarmOn.beginElement();
}
function Bed2_DoorAlarmOffFunc(){
    Bed2_DoorAlarmOff.beginElement();
}
function Bed1_DoorAlarmOnFunc(){
    //Bed1_DoorAlarmOn.beginElement();
}
function Bed1_DoorAlarmOffFunc(){
    //Bed1_DoorAlarmOff.beginElement();
}
function Bathroom_DoorAlarmOnFunc(){
    Bathroom_DoorAlarmOn.beginElement();
}
function Bathroom_DoorAlarmOffFunc(){
    Bathroom_DoorAlarmOff.beginElement();
}
function Front_DoorAlarmOnFunc(){
    Front_DoorAlarmOn.beginElement();
}
function Front_DoorAlarmOffFunc(){
    Front_DoorAlarmOff.beginElement();
}
function Balcony_DoorAlarmOnFunc(){
    Balcony_DoorAlarmOn.beginElement();
}
function Balcony_DoorAlarmOffFunc(){
    Balcony_DoorAlarmOff.beginElement();
}
/*
$( document ).ready(function() {
var floorplan = document.getElementById("floorplan");

var bedroom1 = floorplan.getElementById("Bed1");
bedroom1.addEventListener("mousedown", function () {
    //responsiveVoice.speak("Bedroom 1");
    if (Bedrooms.pwm02 == "1") {
        Bedrooms.pwm02 = "0";
    }
    Bedrooms.pwm02 = "1";

    //Common_Area.toggleDO1();
    //Common_Area.pwm01 = "1";
}, false);
var bedroom2 = floorplan.getElementById("Bed2");
bedroom2.addEventListener("mousedown", function () {
    //responsiveVoice.speak("Bedroom 2");
    Common_Area.toggleDO4();
    Common_Area.pwm01 = "0";
}, false);
var livingRoom = floorplan.getElementById("Living_Room");
livingRoom.addEventListener("mousedown", function () {
    //responsiveVoice.speak("Living Room");
    Common_Area.toggleDO3;
}, false);
var kitchen = floorplan.getElementById("Kitchen");
kitchen.addEventListener("mousedown", function () {
    responsiveVoice.speak("Kitchen");
    Common_Area.toggleDO4;
}, false);
var laundry = floorplan.getElementById("Laundry");
laundry.addEventListener("mousedown", function () {
    responsiveVoice.speak("Laundry");
    Common_Area.toggleDO4;
}, false);
});
*/