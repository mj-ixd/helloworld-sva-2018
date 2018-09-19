# let the user know what's going on
print ("Welcome to MJ World!")
print ("Answer the questions below to play.")
print ("-----------------------------------") 

# variables containing all of your story info
adjective1 = raw_input("Enter an adjective: ")
food1 = raw_input("What is your favorite food?: ")
location1 = raw_input("Name a place: ")
object1 = raw_input("An object from New Yok City: ")
famousPerson1 = raw_input("A famous person you don't really like: ")
famousPerson2 = raw_input("A famous person you sort of like, but not you're favorite: ")
yourName = raw_input("What's your name?: ")
adjective2 = raw_input("Enter favorite adjective: ")

# this is the story. it is made up of strings and variables.
# the \ at the end of each line let's the computer know our string is a long one
# (a whole paragraph!) and we want to continue more code on the next line. 
# play close attention to the syntax!

story = "A traveler" + adjective1 + " good " + food1 + " sushi " + location1 +  ", japanese sushi restaurant " \
"providing a " + object1 + " for meals which she has made by " + famousPerson1 + ". " \
"This is an " + adjective2 + " sushi with sushi with fish egges in it made in " 
+ yourName + " incredibly the most delicious recipe. " \
"" + yourName + " then have a sweet potato ice cream with roasted rice tea. " \
"the food is beautifully arranged as much as they are delicious " + food1 + " too sweet things are sent by " + famousPerson2 + " " \
"to eat some food back to " + yourName + "."

# finally we print the story
print (story)