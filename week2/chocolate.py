chocolateDict = {
"flavor": "Caramel", 
"color": "brownish",
"calories": 1000,  
"price": [10,15] }

print (chocolateDict["flavor"])


customers = [

{
	"orderCaramel": True,
	"succees": 0.5
},

{	
	"orderCaramel": True,
	"succees": 1.0
}
]

print(customers)
avgSuccees = (customers[0]["succees"] + customers[1]["succees"]/2)
print(avgSuccees)
