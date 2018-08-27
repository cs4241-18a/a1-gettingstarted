float[][] distances;
float[][] prevX, prevY;
float maxDistance, newX, newY;
int spacer;
int xMax, yMax, xIndex, yIndex, xIndex2;

void setup() {
  size(640, 640);
  spacer = 20;
  
  // Initialize max values
  for (int y = 0; y < height; y += spacer) {
    yMax++;
    for (int x = 0; x < width; x += spacer) {
      if (y == 0) {
        xMax++;
      }
    }
  }
  
  // Initialize array
  prevX = new float[xMax][yMax];
  prevY = new float[xMax][yMax];
  distances = new float[xMax][yMax];
  yIndex = 0;
  for (int y = 0; y < height; y += spacer) {
    xIndex = 0; 
    for (int x = 0; x < width; x += spacer) {
      prevX[xIndex][yIndex] = x + spacer/2;
      prevY[xIndex][yIndex] = y + spacer/2;
      distances[xIndex][yIndex] = random(100, 250); //distance/maxDistance * 255;
      xIndex++;
    }
    yIndex++;
  }
}

///////////////////////////////////////////////////////////////////////////////////

void draw() {
  background(10);
  
  // Change the coordinate values
  yIndex = 0;
  strokeWeight(2);
  for (int y = 0; y < height; y += spacer) {
    xIndex = 0;
    for (int x = 0; x < width; x += spacer) {
      
      // Get the new position
      newX = random(prevX[xIndex][yIndex] - 1, prevX[xIndex][yIndex] + 1);
      newY = random(prevY[xIndex][yIndex] - 1, prevY[xIndex][yIndex] + 1);
      
      // Make sure the value is not outside of its own bounds
      if (newX < x - spacer/2) {
        newX = x - spacer/2;
      }
      if (newX > x + spacer/2) {
        newX = x + spacer/2;
      }
      if (newY < y - spacer/2) {
        newY = y - spacer/2;
      }
      if (newY > y + spacer/2) {
        newY = y + spacer/2;
      }
      
      // Save the new values for the next frame
      prevX[xIndex][yIndex] = newX;
      prevY[xIndex][yIndex] = newY;
      xIndex++;
    }
    yIndex++;
  }
  
  // Draw the lines
  yIndex = 0;
  strokeWeight(2);
  for (int y = 0; y < height/2; y += spacer) {
    xIndex = 0;
    for (int x = 0; x < width; x += spacer) {
      stroke(distances[xIndex][yIndex]);
      line(prevX[xIndex][yIndex], prevY[xIndex][yIndex], width/2, height/2);
      stroke(distances[xIndex][yMax - yIndex - 1]);
      line(prevX[xIndex][yMax - yIndex - 1], prevY[xIndex][yMax - yIndex - 1], width/2, height/2);
      xIndex++;
    }
    yIndex++;
  }
  
  // Draw the points
  yIndex = 0;
  strokeWeight(6);
  for (int y = 0; y < height; y += spacer) {
    xIndex = 0;
    for (int x = 0; x < width; x += spacer) {
      stroke(distances[xIndex][yIndex]);
      point(prevX[xIndex][yIndex], prevY[xIndex][yIndex]);
      xIndex++;
    }
    yIndex++;
  }
}
