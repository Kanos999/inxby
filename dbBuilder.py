
import json
import os.path

path = './sample.json'

check_file = os.path.exists(path)

# Data to be written
dictionary = {}

if (check_file):
    with open('sample.json') as json_file:
        dictionary = json.load(json_file)

ink = input("ink: ")
while ink != "q":
    printers = input("printers: ")
    printers = printers.split(", ")
    dictionary[ink] = printers
    ink = input("ink: ")
 
# Serializing json
json_object = json.dumps(dictionary, indent=4)
 
# Writing to sample.json
with open("sample.json", "w") as outfile:
    outfile.write(json_object)