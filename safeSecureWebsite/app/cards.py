def reminderCard(message):
    return """

    <div class="card card-stats">
        <div class="card-header" data-background-color="green">
            <i class="material-icons">alarm</i>
        </div>
        <div class="card-content">
            <p class="category">Reminders</p>
            <h3 class="title">""" + message + """"</h3>
            </form>
        </div>
        <div class="card-footer">
            <div class="stats">
                <i class="material-icons">date_range</i> Last 4 Hours
            </div>
        </div>
    </div>
    """

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
    </div>

    """