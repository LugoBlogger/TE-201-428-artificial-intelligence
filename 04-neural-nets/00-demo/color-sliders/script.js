// Get references to all DOM elements
const graySlider = document.getElementById("gray-slider");
const redSlider= document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");  

const grayValue = document.getElementById("gray-value")
const redValue = document.getElementById("red-value")
const greenValue = document.getElementById("green-value")
const blueValue = document.getElementById("blue-value")

const grayBox = document.getElementById("gray-box");
const colorBox = document.getElementById("color-box");

// Function to update the color box and RGB values
function updateColor() {
  const gray = graySlider.value;
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Update the RGB values displayed
  grayValue.textContent = gray;
  redValue.textContent = red;
  greenValue.textContent = green;
  blueValue.textContent = blue;

  // Update the background color of the box
  grayBox.style.backgroundColor = `rgb(0, 0, 0, ${gray/255.})`;
  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Add event listeners to sliders
graySlider.addEventListener("input", updateColor)
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Initialize the color box with default values
updateColor();

// GitHub: lugoblogger