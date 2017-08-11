#!/usr/bin/python

#ECTE350 Master Script
#Script call order:
                # 1. UDP Communications Task
                # 2. Data Sorting Task
                # 3. .......
import time
from app import UDP_Main
from app import Data_Sort
loop_restart = True
data = (['', '', ''])
def loopingQuery():
    data = (['','',''])
    while loop_restart == True:
         for i in range(0,4):           # Index i is the node number
            if i == 3:                  # The for loop restarts if there is a timeout
                time.sleep(0.5)         # Give the node 0.5 seconds to respond
                loop_restart = True
                i = 0
                break
            data[i] = UDP_Main.sendMessage(i)  #Call the UDP script with index i
            Data_Sort.sortData(data[i])
def query():
    for i in range(0,4):           # Index i is the node number
        if i == 3:                  # The for loop restarts if there is a timeout
            time.sleep(0.5)         # Give the node 0.5 seconds to respond
            loop_restart = True
            i = 0
            break
        data[i] = UDP_Main.sendMessage(i)  #Call the UDP script with index i
        Data_Sort.sortData(data[i])

