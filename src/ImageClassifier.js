import React, { useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tfvis from "@tensorflow/tfjs-vis";

function ImageClassifier() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    const model = await mobilenet.load();
    tfvis.show.modelSummary({ name: "Model Summary" }, model);
    setIsModelLoading(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
  };

  const classifyImage = async () => {
    const image = inputRef.current;
    setIsModelLoading(true);
    const model = await mobilenet.load();
    const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
    const predictions = await model.classify(tensor);
    setPredictions(predictions);
    setIsModelLoading(false);
  };

  return (
    <div className="App">
      <h1>Disaster Image Classifier</h1>
      <button onClick={loadModel} disabled={isModelLoading}>
        {isModelLoading ? "Loading Model..." : "Load Model"}
      </button>
      <br />
      <br />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br />
      <br />
      {selectedImage && (
        <>
          <img src={selectedImage} ref={inputRef} alt="Selected" width="224" height="224" />
          <br />
          <br />
          <button onClick={classifyImage} disabled={isModelLoading}>
            {isModelLoading ? "Classifying..." : "Classify Image"}
          </button>
        </>
      )}
      <br />
      <br />
      {predictions.length > 0 &&
        predictions.map((prediction, index) => (
          <div key={index}>
            {prediction.className} - {prediction.probability.toFixed(2)}
          </div>
        ))}
    </div>
  );
}

export default ImageClassifier;
