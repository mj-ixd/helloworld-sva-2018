import turtle

wn = turtle.Screen()
wn.bgcolor("black")

mj = turtle.Turtle()
mj.speed(150)
mj.color("blue")


def drawArt(d,angle):
    for i in range(1,200):
      mj.forward(d)
      mj.left(angle)
      d = d - 3

drawArt(400,120)
drawArt(400,120)
drawArt(600,300)
drawArt(600,300)
drawArt(400,120)
drawArt(600,300)
