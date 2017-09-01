def generateCards():
    cards = [houseStatus("Check Fridge Door", "Fridge Door Open"),
             houseStatus("Check Bedroom Window", "Bedroom Window Open"),
             houseStatus("Check Oven", "Oven Door Left Open"),
             medicationAlert("Take Medication"),
             shoppingList("Milk", "Bread","Vegemite"),
             weather(),
             contact("Emergency Services", "000", "local_hospital", "Northfields Avenue, Keiraville"),
             contact("Doctor", "98456235", "local_hospital","Somewhere"),
             contact("Son", "12345678", "contacts","Timbucktoo"),
             contact("Daughter", "12345678", "contacts","Whoop Whoop")]
    print("Length of cards ", len(cards))
    return cards


def reminderCard(message):
    return """

    <div class="card card-stats">
        <div class="card-header" data-background-color="green">
            <i class="material-icons">alarm</i>
        </div>
        <div class="card-content">
            <p class="category">Reminders</p>
            <h3 class="title">""" + message + """</h3>
            </form>
        </div>
        <div class="card-footer">
            <div class="stats">
                <i class="material-icons">date_range</i> Last 4 Hours
            </div>
        </div>
    </div> """


def houseStatus(title, alert):
    return """
    <div class="card card-stats">
        <div class="card-header" data-background-color="red">
            <i class="material-icons">home</i>
        </div>
        <div class="card-content">
            <p class="category">House status</p>
            <h3 class="title">""" + title + """</h3>
        </div>
        <div class="card-footer">
            <div class="stats">
                <i class="material-icons text-danger">warning</i> """ + alert + """
            </div>
        </div>
    </div> """

def shoppingList(message1, message2, message3):
    return """
    <div class="card card-stats">
        <div class="card-header" data-background-color= "blue">
            <i class="material-icons">shopping_cart</i>
        </div>
        <div class="card-content">
            <p class="category">Shopping List</p>
            <h3 class="title">""" + message1 + """</h3>
            <h3 class="title">""" + message2 + """</h3>
            <h3 class="title">""" + message3 + """</h3>
        </div>
    </div>"""


def weather():
    return """
    <div class="card card-stats">
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
    </div>"""


def beerBuddy():
    return """
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
    </div> """
def medicationAlert(message):
    return """

    <div class="card card-stats">
        <div class="card-header" data-background-color="orange">
            <i class="material-icons">priority_high</i>
        </div>
        <div class="card-content">
            <p class="category">Reminders</p>
            <h3 class="title">""" + message + """</h3>
            </form>
        </div>
        <div class="card-footer">
            <div class="stats">
                <i class="material-icons">date_range</i> Take 2 Tablets
            </div>
        </div>
    </div> """

def contact(title, number, icon, address):
    return """
    <div class="card card-stats">
        <div class="card-header" data-background-color="purple">
            <i class="material-icons">""" + icon + """</i>
        </div>
        <div class="card-content">
            <p class="category">Contacts</p>
            <h3 class="title">""" + title + """</h3>
            <h3 class="title">""" + number + """</h3>
        </div>
        <div class="card-footer">
            <div class="stats">
            Address - """ + address + """
            </div>
        </div>
    </div> """