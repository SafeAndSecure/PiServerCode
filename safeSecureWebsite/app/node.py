from app import UDP_Main
import socket
import time
class node(object):
    def __init__(self, name, ipAddress, port):
        self.name = name
        self.ipAddress = ipAddress
        self.port = port
        self.digitalInputs = []
        self.digitalOutputs = []
        self.analogOutputs = []
        self.analogInputs = []

    def getInformation(self):
        message = b'Node_1'
        info = self.sendMessage(self.ipAddress, self.port, message)
        return info

    def getName(self):
        return self.name
    def setName(self, name):
        self.name = name

    def sendMessage(ip, port, message):
        UDP_IP = ip
        UDP_PORT = port
        MESSAGE = message
        print("UDP target IP:", UDP_IP)
        print("UDP target port:", UDP_PORT)
        print("message:", MESSAGE)
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # UDP
        try:
            sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
        except socket.error:
            print("Socket Error")
            return
        sock.settimeout(0.5)
        try:
            data, addr = sock.recvfrom(64)  # Recieved Packets Size Of 64 Bytes
        except socket.timeout:
            print("Socket Timeout")
            return

        characterOrdArray = []
        if data != '':
            for byte in data:
                characterOrdArray.append(byte)
            print(characterOrdArray)
            print(data)
            return (characterOrdArray)

    def bitCompare(int, bit):
        comp = 2 ** bit
        if (byte & int(comp, 2) != 0):
            return 1
        return 0

    def bitSet(byte, bit, data):
        data = 2 ** bit * data
        byte & ~data