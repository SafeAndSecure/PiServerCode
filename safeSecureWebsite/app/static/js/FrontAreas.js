/**
 * Created by Joshua on 7/10/2017.
 */

function FrontAreasLoop(autoLighting) {

    //Di_State_1 - Fridge Door Status - NEEDS FUNCTION + SVG CREATED
    if (Front_Area.di_state1) {
        //Fridge_DoorCloseFunc();
        Front_Area.do_state1 = 1; //Fridge Indicator On Request
    }
    else {
        //Fridge_DoorCloseFunc();
        Front_Area.do_state1 = 0; //Fridge Indicator On Request
    }

    //Di_State_2 - Oven Door Status - NEEDS FUNCTION + SVG CREATED
    if (Front_Area.di_state2) {
        //Oven_DoorCloseFunc();
        Front_Area.do_state2 = 1; //Fridge Indicator On Request
    }
    else {
        //Fridge_DoorCloseFunc();
        Front_Area.do_state2 = 0; //Fridge Indicator On Request
    }

    //Di_State_3 - Front Door Status
    if (!Front_Area.di_state3) {
        try {
            Front_DoorOpenFunc();
            PorchPersonEnterRoomFunc();
            Living_RoomPersonLeaveRoomFunc();
        }
        catch (e) {
        }
    }
    else {
        try {
            Front_DoorCloseFunc();
            Living_RoomPersonEnterRoomFunc();
        }
        catch (e) {
        }
    }



}
