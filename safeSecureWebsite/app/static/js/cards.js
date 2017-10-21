/**
 * Created by Joshua on 7/10/2017.
 */
var level = 4;
function generateCards() {
    var card_start = `<div class="row">`;
    var cards = [medicationAlert("Take Medication") +
        shoppingList("Milk", "Bread", "Vegemite") +
        temperature("Bedroom 1", Bedrooms.temperature) +
        weather() + "</div><div class=\"row\">" +
        houseStatus("Check Fridge Door", "Fridge Door Open", "fridge") +
        houseStatus("Check Oven", "Oven Door Open", "oven") +
        houseStatus("Check Main Bedroom", "Bedroom Window Open", "bedroom1") +
        houseStatus("Check Spare Bedroom", "Bedroom Window Open", "bedroom2")];

    if (level > 1)
    {

    }
    if (level > 2)
    {
        cards = cards + contact("Son", "12345678", "contacts");
        cards = cards + contact("Daughter", "12345678", "contacts");
    }
    if (level > 3)
    {
        cards = cards + contact("Doctor", "98456235", "local_hospital","Somewhere");
        cards = cards + contact("Emergency", "000", "local_hospital");

        if(Front_Area.di_state1)
        {
            cards = cards + houseStatus("Check Fridge Door", "Fridge Door Open", "fridge");
        }
        if(Front_Area.di_state1)
        {
            cards = cards + houseStatus("Check Oven", "Oven Door Open", "oven");
        }

        if(Bedrooms.di_state1)
        {
            cards = cards + houseStatus("Check Main Bedroom", "Bedroom Window Open", "bedroom1");
        }
        if(Bedrooms.di_state2)
        {
            cards = cards + houseStatus("Check Spare Bedroom", "Bedroom Window Open", "bedroom2");
        }
    }
    if (level > 4)
    {
        cards = cards + reminderCard("Test")
    }

    var card_end = "</div>" + "</div>";
    return card_start + cards + card_end;
}

function reminderCard(message) {
    return `
    <div class="col-lg-3 col-md-6 col-sm-6">
    <div id="` + message + `" class="card card-stats">
        <div class="card-header" data-background-color="green">
            <i class="material-icons">alarm</i>
        </div>
        <div class="card-content">
            <p class="category">Reminders</p>
            <h3 class="title">"` + message + `"</h3>
            </form>
        </div>
        <div class="card-footer">
            <div class="stats">
                <i class="material-icons">date_range</i> Last 4 Hours
            </div>
        </div>
    </div> 
    </div>"`;
    }

function houseStatus(title, alert, id)
{
    return `
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div id="` + id + `" class="card card-stats">
            <div class="card-header" data-background-color="red">
                <i class="material-icons">home</i>
            </div>
            <div class="card-content">
                <p class="category">House status</p>
                <h3 class="title">` + title + `</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons text-danger">warning</i> ` + alert + `
                </div>
            </div>
        </div> 
    </div>`;
}

function shoppingList(message1, message2, message3, id) {
    return `
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div id="` + id + `" class="card card-stats">
            <div class="card-header" data-background-color= "blue">
                <i class="material-icons">shopping_cart</i>
            </div>
            <div class="card-content">
                <p class="category">Shopping List</p>
                <h3 class="title">` + message1 + `</h3>
                <h3 class="title">` + message2 + `</h3>
                <h3 class="title">` + message3 + `</h3>
            </div>
        </div>
    </div>`;
}
function temperature(room,temperature) {
    return `
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div id="` + room + `" class="card card-stats">
            <div class="card-header" data-background-color= "blue">
                <i class="material-icons">brightness_high</i>
            </div>
            <div class="card-content">
                <p class="category">Temperature</p>
                <h3 class="title">` + room + `</h3>
                <h3 class="title">` + temperature + `</h3>
            </div>
        </div>
    </div>`;
}

function weather() {
    return `
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div id="weather"  class="card card-stats">
            <div class="card-header" data-background-color="green">
                <i class="material-icons">brightness_low</i>
            </div>
            <div class="card-content">
                <p class="category">Weather</p>
                <h3 class="title">Temp - 28°C</h3>
                <h3 class="title">Sunny</h3>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">gps_fixed</i> Keiraville, NSW
                </div>
            </div>
        </div>
    </div>
    `;
}


function beerBuddy() {
    return `
    <div class="card card-stats">
        <div class="card-header" data-background-color="yellow">
            <i class="material-icons">local_drink</i>
        </div>
        <div class="card-content">
            <p class="category">Beer Buddy</p>
            <h3 class="title">Request beer</h3>
        </div>
        <div class="card-footer">
            <div class="stats"></div>
        </div>
    </div> `
    }

function medicationAlert(message) {
    return `
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div id="medication" class="card card-stats">
            <div class="card-header" data-background-color="orange">
                <i class="material-icons">priority_high</i>
            </div>
            <div class="card-content">
                <p class="category">Reminders</p>
                <h3 class="title">` + message + `</h3>
                </form>
            </div>
            <div class="card-footer">
                <div class="stats">
                    <i class="material-icons">date_range</i> Take 2 Tablets
                </div>
            </div>
        </div>
    </div>`;
    }


function contact(title, number, icon) {
    return `
<a class="fancybox-thumb" rel="fancybox-thumb" href="http://farm6.staticflickr.com/5444/17679973232_568353a624_b.jpg" title="Golden Manarola (Sanjeev Deo)">
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div id="contact" class="card card-stats" data-toggle="modal" data-target="#exampleModal">
            <div class="card-header" data-background-color="purple">
                <i class="material-icons">` + icon + `</i>
            </div>
            <div class="card-content">
                <p class="category">Contacts</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <h3 class="title">` + title + `</h3>
                <h3 class="title">` + number + `</h3>
            </div>
        </div>
    </div></a>`
   ;
    }

$(document).ready(function() {
    setInterval(function(){document.getElementById("cards").innerHTML = generateCards(); /*console.log("Generating Homepage");*/}, 600);

});