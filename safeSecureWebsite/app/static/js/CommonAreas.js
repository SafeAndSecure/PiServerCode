/**
 * Created by Joshua on 7/10/2017.
 */


function CommonAreasSetup() {
}

function CommonAreasLoop(autoLighting) {
    if (autoLighting) {
        //Di_State_1 - Balcony Door Status
        if (Common_Area.di_state1) {
            Common_Area.do_state1 = 1; //Balcony Light On Request
        }
        else {
            Common_Area.do_state1 = 0; //Balcony Light Off Request
        }
        //Di_State_2 - Bathroom Door Status
        if (Common_Area.di_state2) {
            Common_Area.do_state2 = 1; //Bathroom Light On Request
        }
        else {
            Common_Area.do_state2 = 0; //Bathroom Light Off Request
        }
        //Di_State_3 - Living Room PIR Status
        if (Common_Area.di_state3) {
            Common_Area.do_state3 = 1; //Living_Room Light On Request
        }
        else {
            Common_Area.do_state3 = 0; //Living_Room Light Off Request
        }
        //Di_State_4 - Porch PIR Status
        if (Common_Area.di_state4) {
            Common_Area.do_state4 = 1; //Porch Light On Request
        }
        else {
            Common_Area.do_state4 = 0; //Porch Light Off Request
        }
    }
    //DO_State_1 - Balcony Door Status
    if (Common_Area.do_state1) {
        Balcony_DoorOpenFunc();
    }
    else {
        try {
            Balcony_DoorCloseFunc();
        }
        catch(e)
        {}
    }
    //Do_State_2 - Bathroom Door Status
    if (Common_Area.do_state2) {
        try {
        Bathroom_DoorOpenFunc();
        }
        catch(e)
        {}
    }
    else {
        try {
        Bathroom_DoorCloseFunc();
        }
        catch(e)
        {}
    }
    //Do_State_3 - Living Room PIR Status
    if (Common_Area.do_state3) {
        try {
        Living_RoomPersonEnterRoomFunc();
        }
        catch(e)
        {}
    }
    else {
        try {
        Living_RoomPersonLeaveRoomFunc();
        }
        catch(e)
        {}
    }
    //DO_State_4 - Porch PIR Status
    if (Common_Area.do_state4) {
        try {
        PorchPersonEnterRoomFunc();
        }
        catch(e)
        {}
    }
    else {
        try {
        PorchPersonLeaveRoomFunc();
        }
        catch(e)
        {}
    }

}