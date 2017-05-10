from flask import render_template
from app import app
from app import cards


@app.route('/')
@app.route('/index')
def index():
    return render_template("test.html",
                           title='Home',
                           card=cards.reminderCard("Buy milk"),
                           card1 = cards.houseStatus("Not Safe")
                           )


@app.route('/base')
def base():
    return render_template("base.html",
                           title='Home'
                           )



def generateContent(rows):
    for row in rows:
        print("df")
    return content

def generateRows(cards):
    rows = []
    currentRow = []
    for card in cards:
        if len(currentRow) > 4:
            rows.append(currentRow)
            currentRow = []


