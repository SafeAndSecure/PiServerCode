/**
 * Created by Joshua on 7/10/2017.
 */



function CommonAreasLoop(autoLighting) {


    if (autoLighting) {
    }

        //Di_State_1 - Balcony Door Status
        if (!Common_Area.di_state1) {
            //Balcony Light On Request
            try {
                Balcony_DoorOpenFunc();
                Living_RoomPersonLeaveRoomFunc();
            }
            catch(e)
            {}
        }
        else {
            try {
                Balcony_DoorCloseFunc();
                Living_RoomPersonEnterRoomFunc();
            }
            catch(e)
            {}
        }


        //Di_State_2 - Bathroom Door Status
        if (!Common_Area.di_state2) {
            try {
                Bathroom_DoorOpenFunc();
                BathroomPersonEnterRoomFunc();
                Living_RoomPersonLeaveRoomFunc();
            }
            catch(e)
            {}
        }
        else {
            try {
                Bathroom_DoorCloseFunc();
                BathroomPersonLeaveRoomFunc();
                Living_RoomPersonEnterRoomFunc();
            }
            catch(e)
            {}
        }





}