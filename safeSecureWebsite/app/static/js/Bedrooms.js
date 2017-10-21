/**
 * Created by Joshua on 7/10/2017.
 */

function BedroomsSetup() {
}

function BedroomsLoop(autoLighting) {
   // if (autoLighting) {
        if (!Bedrooms.di_state1) {
            try {
            console.log("bedroom 1 door open");
            Bed1_DoorOpenFunc();
            //Bedrooms.pwm02 = "1";
            }
            catch(e) {
            }
        }
        else {
            try {
            console.log("bedroom 1 door closed");
            Bed1_DoorCloseFunc();
          //  Bedrooms.pwm02 = "0";
            }
            catch(e) {
                console.log("Exception ");
            }
        }
   // }

    if (Bedrooms.di_state2) {
        try {
            Bed2_DoorOpenFunc();
            }
            catch(e) {
            }
    }
    else {
        try {
            Bed2_DoorCloseFunc();
        }
        catch(e) {
        }
    }
  //  if (autoLighting) {
        //Di_State_3 - Bedroom 1 PIR Status
        if (Bedrooms.di_state3) {
            try {
                Bed1PersonEnterRoomFunc();
            }
            catch (e) {

            }
            //Bedrooms.do_state1 = 1; //Bedroom 1 Light On Request
            Bedrooms.pwm02 = "1";
        }
        else {
            try {
                Bed1PersonLeaveRoomFunc();
            }
            catch (e) {

            }
            //Bedrooms.pwm02 = "0";
            Bedrooms.do_state1 = 0; //Bedroom 1 Light Off Request
        }
        //Di_State_4 - Bedroom 2 PIR(Emulated with Switch) Status
        if (Bedrooms.di_state4)
        {
            Bedrooms.do_state2 = 1; //Bedroom 2 Light On Request
        }
        else {
            try {
                Bed2PersonLeaveRoomFunc();
            }
            catch (e)
            {
            }
            Bedrooms.do_state2 = 0; //Bedroom 2 Light Off Request
        }
  //  }
    if (Bedrooms.do_state1) {
        try {
            Bed1PersonEnterRoomFunc();
        }
        catch(e)
        {
        }
    }
    else {
        try {
            Bed1PersonLeaveRoomFunc();
        }
        catch (e)
        {

        }
    }
//Di_State_4 - Bedroom 2 PIR(Emulated with Switch) Status
    if (Bedrooms.di_state1) {
        Bed1PersonEnterRoomFunc();
    }
    else {
        try {
            Bed1PersonLeaveRoomFunc();
        }
        catch (e)
        {

        }
    }
}