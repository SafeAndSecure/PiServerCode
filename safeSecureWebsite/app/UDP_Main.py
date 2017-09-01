#!/usr/bin/python

# Script To Send And Recieve UDP Packets

import socket
import time

nodeIP = ["192.168.0.55", "192.168.0.56", "192.168.0.57", "192.168.0.58", "192.168.0.59", "192.168.0.60",
          "192.168.0.61", "192.168.0.62", "192.168.0.63", "192.168.0.64", "192.168.0.65", "192.168.0.66",
          "192.168.0.67", "192.168.0.68", "192.168.0.69", "192.168.0.70"]

nodePort = [4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014, 4015, 4016]

nodeSendArray = bytes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

loop_restart = True



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
        for character in str(data):
            characterOrdArray.append((ord(character)))
        print(characterOrdArray)
        # print(data)
        return (characterOrdArray)


def sendMessage(i):
    UDP_IP = nodeIP[i]
    UDP_PORT = nodePort[i]
    MESSAGE = b'Node_1FF' + int.to_bytes(255,byteorder='big')
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
def bitCompare(byte, bit):
    comp = 2**bit
    if(byte & int(comp, 2) != 0):
        return 1
    return 0
def bitSet(byte, bit, data):
    data = 2**bit * data
    byte & int(data, 2)

while (1):
    sendMessage(1)