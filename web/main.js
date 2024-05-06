var model = null;
async function loadModel() {
  console.log("Loading model...");
  model = await tf.loadLayersModel("js_model/model.json");
  console.log("Model loaded.");
}

function updateCelsiusValue() {
  var celsius = document.getElementById("celsius").value;
  document.getElementById("celsius-value").textContent = celsius + " °C";
  if (model !== null) {
    var tensor = tf.tensor1d([parseInt(celsius)]);
    var prediction = model.predict(tensor).dataSync();
    document.getElementById("result").textContent =
      celsius + " °C is " + Math.round(prediction) + " °F";
  } else {
    document.getElementById("result").textContent =
      "Please try again in a moment...";
  }
}

loadModel();
