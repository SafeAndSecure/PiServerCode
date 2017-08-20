from app import UDP_Main

class node():
    def __init__(self, name, ipAddress, port):
        self.name = name
        self.ipAddress = ipAddress
        self.port = port
        self.digitalInputs[] = []
        self.digitalOutputs[] = []
        self.analogOutputs[] = []
        self.analogInputs[] = []

    def getInformation(self):
        message = b'Node_1'
        info = UDP_Main.sendMessage(self.ipAddress, self.port, message)

        return info


    def getName(self):
        return self.name
    def setName(self, name):
        self.name = name