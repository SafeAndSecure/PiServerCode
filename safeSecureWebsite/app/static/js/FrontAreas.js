/**
 * Created by Joshua on 7/10/2017.
 */

//Front_Area
            //Di_State_1 - Fridge Door Status - NEEDS FUNCTION + SVG CREATED
            /*if (Front_Area.di_state1) {
             Fridge_DoorOpenFunc();
             Front_Area.do_state1 = 1; //Fridge Indicator On Request
             }
             else {
             Fridge_DoorCloseFunc();
             Front_Area.do_state1 = 0; //Fridge Indicator On Request
             }*/
            //Di_State_2 - Front Door Status
            if (Front_Area.di_state2) {
                Front_DoorOpenFunc();
            }
            else {
                Front_DoorCloseFunc();
            }
            //Di_State_3 - Kitchen/Laundry PIR(Emulated by DipSwitch)
            if (Front_Area.di_state3) {
                KitchenPersonEnterRoomFunc();
                LaundryPersonEnterRoomFunc();
                Front_Area.do_state2 = 1; //Kitchen Light On Request
                Front_Area.do_state3 = 1; //Laundry Light On Request
            }
            else {
                KitchenPersonLeaveRoomFunc();
                LaundryPersonLeaveRoomFunc();
                Front_Area.do_state2 = 0; //Kitchen Light Off Request
                Front_Area.do_state3 = 0; //Laundry Light Off Request
            }
