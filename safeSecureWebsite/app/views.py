from flask import render_template
from app import app
from app import cards

from threading import Thread

@app.route('/')
@app.route('/index')
def index():

    return render_template("index.html",
                           title='Home',
                           content=generateContent(),
                           active="dashboard"
                           )

@app.route('/base')
def base():
    return render_template("base.html",
                           title='Home',
                           active="dashboard"
                           )


@app.route('/rooms')
def rooms():
    return render_template("rooms.html",
                           title='Rooms',
                           active="rooms"
                           )

@app.route('/security')
def security():
    return render_template("security.html",
                           title='Security',
                           active="security"
                           )

@app.route('/getData')
def getData():
    return "";

def generateContent():
    content = ""
    print(content)
    for row in generateRows(cards.generateCards()):
        content += "<div class=\"row\">"
        content += row
        content += "</div>"
    return content

def generateRows(cardList):
    rows = []
    current = ""
    #print("Length of cardList: ", len(cardList))
    currentCardLength = 0
    for card in cardList:
        current += "<div class=\"col-lg-3 col-md-6 col-sm-6\">"
        current += card
        current += "</div>"
        currentCardLength += 1
        #if currentCardLength >= 2:
        #    rows.append(current)
        #    current = ""
        #    currentCardLength = 0
    rows.append(current)
    print("Length of rows: ", len(rows))
    #sprint("Rows ", rows)
    return rows