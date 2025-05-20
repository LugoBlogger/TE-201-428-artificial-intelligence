// Load the TensorFlow.js model

let model;
async function loadModel() {
  try {
    model = await tf.loadLayersModel("./models/model.json");
    console.log("Model loaded successfully")
  } catch (error) {
    console.error("Error loading the mode:", error);
  }
}

// Initialize the canvas grid
const canvasContainer = document.getElementById("canvas-container")
const gridSize = 28;
const grid = [];
const gridValues = Array(gridSize * gridSize).fill(0);

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    canvasContainer.appendChild(cell);
    grid.push(cell);

    // Add mouse event listeners for drawing
    cell.addEventListener("mousedown", (e) => {
      e.preventDefault();
      draw(cell, i)});
    cell.addEventListener("mouseover", (e) => {
      if (e.buttons === 1) {
        e.preventDefault(); 
        draw(cell, i)};
    });
  }
}

function draw(cell, index) {
  // cell.classList.add("active");
  const brushRadius = 2;
  const baseValue = 1.;

  // Calcualte the row and column of the clicked cell
  const row = Math.floor(index/gridSize);
  const col = index % gridSize;

  for (let dx = -brushRadius; dx <= brushRadius; dx++) {
    for (let dy = -brushRadius; dy <= brushRadius; dy++) {
      // const neighborIndex = index + dx * gridSize + dy;
      const newRow = row + dy;
      const newCol = col + dx;

      // Check bounds to avoid out-of-grid indices
      if (
        // neighborIndex >= 0 &&
        // neighborIndex < gridSize * gridSize &&
        // Math.floor(index / gridSize) + dy >= 0 &&
        // Math.floor(index / gridSize) + dy < gridSize
        newRow >= 0 &&
        newRow < gridSize &&
        newCol >= 0 &&
        newCol < gridSize
      ) {
        const neighborIndex = newRow * gridSize + newCol;

        // Calcualte distance from the center of the brush
        // const distance = Math.sqrt(dx * dx + dy * dy);
        const distanceSquared = dx*dx + dy*dy;
        
        // // Apply falloff; closer cells get higher values'
        // const falloff = Math.max(0, 1 - distance / brushRadius);
        // Apply Gaussian falloff: e^(-distance^2 / (2 * sigma^2))
        const sigma = 1.0;
        const falloff = Math.exp(-distanceSquared / (2 * sigma * sigma));
        gridValues[neighborIndex] = Math.max(
          gridValues[neighborIndex], baseValue * falloff);
      }
    }
  }

  // Update the visual representation of grid
  updateGrid();
}

function updateGrid() {
  grid.forEach((cell, index) => {
    const value = gridValues[index];
    if (value > 0) {
      cell.style.backgroundColor = `rgba(0, 0, 0, ${value})`;
      cell.style.border = `1px solid gray`;
    } else {
      cell.style.backgroundColor = "white";
      cell.style.border = `1px solid gray`;
    }
  })
}

// Reset the grid
document.getElementById("reset-button")
  .addEventListener("click", () => {
    // grid.forEach(cell => cell.classList.remove("active"));
    gridValues.fill(0);   // Reset all grid values to 0
    updateGrid();
    document.getElementById("letter").textContent = "?";
  });

// Classify the drawn letter
document.getElementById("classify-button")
  .addEventListener("click", async () => {
    if (!model) {
      alert("Model not loaded yet!");
      return
    }

    // Convert grid to tensor
    // const input = grid.map(cell => cell.classList.contains("active") ? 1 : 0);
    const input = gridValues.map(value => value > 0 ? value : 0);
    const tensor = tf.tensor(input, [1, 28, 28, 1]);  // Reshape to [batch, height, width, channels]

    // Predict the letter
    // console.log(tensor.dataSync());
    const prediction = model.predict(tensor);
    const predictedIndex = prediction.argMax(1).dataSync()[0];
    const predictedLetter = String.fromCharCode(predictedIndex + 64);  

    // Display the result
    document.getElementById("letter").textContent = predictedLetter;
  })

// Initialize the app
loadModel();
createGrid()
