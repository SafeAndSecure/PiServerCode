/**
 * Created by Joshua on 7/10/2017.
 */

function BedroomsSetup() {
}

function BedroomsLoop(autoLighting) {
    if (autoLighting) {
        if (Bedrooms.di_state1) {
            Bed1_DoorOpenFunc();
        }
        else {
            Bed1_DoorCloseFunc();
        }
    }

    if (Bedrooms.di_state2) {
        Bed2_DoorOpenFunc();
    }
    else {
        Bed2_DoorCloseFunc();
    }
    if (autoLighting) {
        //Di_State_3 - Bedroom 1 PIR Status
        if (Bedrooms.di_state3) {
            Bed1PersonEnterRoomFunc();
            Bedrooms.do_state1 = 1; //Bedroom 1 Light On Request
        }
        else {
            Bed1PersonLeaveRoomFunc();
            Bedrooms.do_state1 = 0; //Bedroom 1 Light Off Request
        }
        //Di_State_4 - Bedroom 2 PIR(Emulated with Switch) Status
        if (Bedrooms.di_state4) {
            Bed2PersonEnterRoomFunc();
            Bedrooms.do_state2 = 1; //Bedroom 2 Light On Request
        }
        else {
            Bed2PersonLeaveRoomFunc();
            Bedrooms.do_state2 = 0; //Bedroom 2 Light Off Request
        }
    }
    if (Bedrooms.do_state1) {
        Bed1PersonEnterRoomFunc();
    }
    else {
        Bed1PersonLeaveRoomFunc();
    }
//Di_State_4 - Bedroom 2 PIR(Emulated with Switch) Status
    if (Bedrooms.do_state4) {
        Bed2PersonEnterRoomFunc();
    }
    else {
        Bed2PersonLeaveRoomFunc();
    }
}