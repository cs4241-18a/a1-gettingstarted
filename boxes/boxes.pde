int numCubes = 9;
float[][] positions;
float[][] rotations;

void setup() {
  size(640, 640, P3D);
  
  positions = new float[numCubes][3];
  rotations = new float[numCubes][3];
  
  // Cube 1
  positions[0][0] = 115;
  positions[0][1] = 115;
  positions[0][2] = 0;
  rotations[0][0] = 1;
  rotations[0][1] = 1;
  rotations[0][2] = 0;
  
  // Cube 2
  positions[1][0] = 315;
  positions[1][1] = 115;
  positions[1][2] = 0;
  rotations[1][0] = 1;
  rotations[1][1] = 0;
  rotations[1][2] = 0;
  
  // Cube 3
  positions[2][0] = 515;
  positions[2][1] = 115;
  positions[2][2] = 0;
  rotations[2][0] = 1;
  rotations[2][1] = -1;
  rotations[2][2] = 0;
  
  // Cube 4
  positions[3][0] = 115;
  positions[3][1] = 315;
  positions[3][2] = 0;
  rotations[3][0] = 0;
  rotations[3][1] = 1;
  rotations[3][2] = 0;
  
  // Cube 5
  positions[4][0] = 315;
  positions[4][1] = 315;
  positions[4][2] = 0;
  rotations[4][0] = 0;
  rotations[4][1] = 0;
  rotations[4][2] = 0;
  
  // Cube 6
  positions[5][0] = 515;
  positions[5][1] = 315;
  positions[5][2] = 0;
  rotations[5][0] = 0;
  rotations[5][1] = -1;
  rotations[5][2] = 0;
  
  // Cube 7
  positions[6][0] = 115;
  positions[6][1] = 515;
  positions[6][2] = 0;
  rotations[6][0] = -1;
  rotations[6][1] = 1;
  rotations[6][2] = 0;
  
  // Cube 8
  positions[7][0] = 315;
  positions[7][1] = 515;
  positions[7][2] = 0;
  rotations[7][0] = -1;
  rotations[7][1] = 0;
  rotations[7][2] = 0;
  
  // Cube 9
  positions[8][0] = 515;
  positions[8][1] = 515;
  positions[8][2] = 0;
  rotations[8][0] = -1;
  rotations[8][1] = -1;
  rotations[8][2] = 0;
}

void draw() {
  background(10);
  
  // Parse mouse position
  
  // Change cube positions and rotations
  for(int x = 0; x < numCubes; x++) {
    pushMatrix();
    translate(positions[x][0], positions[x][1], positions[x][2]);
    rotateX(rotations[x][0] + mouseY/100);
    rotateY(rotations[x][1] + mouseX/100);
    rotateZ(rotations[x][2]);
    box(100);
    popMatrix();
  }
}
