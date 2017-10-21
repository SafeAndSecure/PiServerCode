/**
 * Created by Joshua on 7/10/2017.
 */


function BedroomsLoop(autoLighting) {
    if (autoLighting) {
    }
        if (!Bedrooms.di_state1) {
        try {
            Bed1_DoorOpenFunc();
            Bed1PersonEnterRoomFunc();
            Living_RoomPersonLeaveRoomFunc();
            Bedrooms.pwm_state1 = 1;
            Bedrooms.do_state1 = 1;
        }
        catch (e) {
        }
    }
    else {
        try {
            Bed1_DoorCloseFunc();
            Bed1PersonLeaveRoomFunc();
            Living_RoomPersonEnterRoomFunc();

            Bedrooms.pwm_state1 = 0;
        }
        catch (e) {
        }
    }
    // }

    if (!Bedrooms.di_state2) {
        try {
            Bed2_DoorOpenFunc();
            Bed2PersonEnterRoomFunc();
            Living_RoomPersonLeaveRoomFunc();
            Bedrooms.pwm_state2 = 1;
        }
        catch (e) {
        }
    }
    else {
        try {
            Bed2_DoorCloseFunc();
            Bed2PersonLeaveRoomFunc();
            Living_RoomPersonEnterRoomFunc();
            Bedrooms.pwm_state2 = 0;
        }
        catch (e) {
        }
    }

}
