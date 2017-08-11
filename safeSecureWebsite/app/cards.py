def generateCards():
    cards = [houseStatus("Not Safe"), beerBuddy(), shoppingList(), makePhoneCall(), weather(), "6"]  #[houseStatus("Not Safe"), makePhoneCall(), beerBuddy(), shoppingList()]
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


def houseStatus(status):
    return """
    <div class="card card-stats">
        <div class="card-header" data-background-color="orange">
            <i class="material-icons">home</i>
        </div>
        <div class="card-content">
            <p class="category">House status</p>
            <h3 class="title">""" + status + """</h3>
        </div>
        <div class="card-footer">
            <div class="stats">
                <i class="material-icons text-danger">warning</i> <a href="#pablo">Fridge door open</a>
            </div>
        </div>
    </div> """


def makePhoneCall():
    return """
  <div class="card card-stats">
    <div class="card-header" data-background-color="red">
        <i class="material-icons">perm_phone_msg</i>
    </div>
    <div class="card-content">
        <p class="category">Contacts</p>
        <h3 class="title">Make phone call</h3>
    </div>
    <div class="card-footer">
        <div class="stats">
            <i class="material-icons">local_offer</i> Phone connected
        </div>
    </div>
    </div> """


def shoppingList():
    return """
    <div class="card card-stats">
        <div class="card-header" data-background-color="blue">
            <i class="material-icons">shopping_cart</i>
        </div>
        <div class="card-content">
            <p class="category">Shopping List</p>
            <h3 class="title">Buy milk</h3>
        </div>
        <div class="card-footer">
            <div class="stats">
            </div>
        </div>
    </div>"""


def weather():
    return """
    <div class="card card-stats">
        <div class="card-header" data-background-color="red">
            <i class="material-icons">brightness_low</i>
        </div>
        <div class="card-content">
            <p class="category">Weather</p>
            <h3 class="title">Temperature 28°C</h3>
        </div>
        <div class="card-footer">
            <div class="stats">
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