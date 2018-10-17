// If you want to open this game on CHROME browser, 
// please input Python -m SimpleHTTPServer and use http://localhost:800. 

const numberOfGrid = 20;
const gridWidth = 30;
const canvasW = numberOfGrid * gridWidth;
const canvasH = numberOfGrid * gridWidth;

var grid = [];
var direction = "right";
var positionX = Math.floor(numberOfGrid / 2);
var positionY = Math.floor(numberOfGrid / 2);
var candyX = Math.ceil(Math.random() * numberOfGrid) - 1;
var candyY = Math.ceil(Math.random() * numberOfGrid) - 1;

var count = 0;
var snakeLength = 1;

var updateFrameInterval = 20;
var myCount = 0;
var gameOver = false;
var font = "monospace"


function preload() {
  img = loadImage("candy.png");
}

function setup() {
  createCanvas(canvasW, canvasH);

  for (var i = 0; i < numberOfGrid; i++) {
    var row = new Array(numberOfGrid);
    row.fill(-1);
    grid.push(row);
  }
  grid[candyX][candyY] = -2;

  textSize(38);
  textAlign(CENTER);
  textStyle(BOLD)
  textFont(font);
}

function draw() {
  background(72, 27, 217);

  drawGrid(0, 0, grid, gridWidth);
  if (gameOver) {
    drawGameOver(canvasW / 2, canvasH / 2);
    return;
  }

  
  myCount += 1;
  if (myCount > updateFrameInterval) {
    myCount = 0;
    updateGrid(grid, direction);
  }
}

function updateGrid(grid, direction) {
  if (gameOver) {
    return;
  }

  if (direction === "right") {
    positionX += 1;
  } else if (direction === "left") {
    positionX -= 1;
  } else if (direction === "up") {
    positionY -= 1;
  } else if (direction === "down") {
    positionY += 1;
  }

  if (checkGameOver(grid, positionX, positionY)) {
    gameOver = true;
    return;
  }

  eatCandyIfPossible(grid, positionX, positionY);
  grid[positionX][positionY] = count;
  count += 1;
}

function checkGameOver(grid, x, y) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid.length) {
    return true;
  }
  if (grid[x][y] > 0) {
    if (grid[x][y] > count - snakeLength) {
      return true;
    }
  }
  return false;
}

function eatCandyIfPossible(grid, x, y) {
  if (grid[x][y] == -2) {
    snakeLength += 1;
    candyX = Math.ceil(Math.random() * numberOfGrid) - 1;
    candyY = Math.ceil(Math.random() * numberOfGrid) - 1;
    grid[candyX][candyY] = -2;
  }
}

function drawGrid(x, y, grid, gridWidth) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (grid[i][j] == -1) {
        continue;
      } else if (grid[i][j] == -2) {
        drawCandy(x + i * gridWidth, y + j * gridWidth, gridWidth);
      } else if (count - grid[i][j] <= snakeLength) {
        drawSnake(x + i * gridWidth, y + j * gridWidth, gridWidth, direction);
      }
    }
  }
}

function drawSnake(x, y, width, direction) {
  fill(255, 255, 0);
  noStroke();
  rect(x, y, width, width, 8, 8);
}

function drawCandy(x, y, width) {
  image(img, x, y, width, width);
}

function drawGameOver(x, y) {
  fill(0, 255, 255);
  text("G A M E  O V E R", x, y);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    direction = "left";
  } else if (keyCode === RIGHT_ARROW) {
    direction = "right";
  } else if (keyCode === UP_ARROW) {
    direction = "up";
  } else if (keyCode === DOWN_ARROW) {
    direction = "down";
  }
  return false; // prevent any default behaviour
}
