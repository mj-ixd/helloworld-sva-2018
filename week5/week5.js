var serial;
var r1;


function setup(){
  serial = new p5.SerialPort();
  serial.open("/dev/cu.usbserial-DN051BS3");
  serial.onData(goData);
  createCanvas(1400, 800);
  randomSeed(second());
  r1=2000;

}

function draw(){
  background(246);
  fill(random(248), random(248), random(248));
  ellipse(width/2, height/2, r1, r1);
}

function serialEvent(){
  var response = p.readvarUntil('\n').trim();
  r1=constrain(r1,20,2000);
}