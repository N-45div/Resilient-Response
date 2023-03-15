import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App1.css";
import { drawHand } from "./utilities";
import Navbar from "./components/Nav/Navbar";
import Footer from "./Footer";

function App1() {
  const [cameraFacingMode, setCameraFacingMode] = useState("user"); // "user" is front camera, "environment" is back camera
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  const handleCameraFlip = () => {
    setCameraFacingMode((prevMode) =>
      prevMode === "user" ? "environment" : "user"
    );
  };

  return (
    <div className="App">
      <Navbar />
      <h1 style={{ color: "#1a2a6c" }}>
        Hands-free detection for hands in need
      </h1>
      <div className="video-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "100%",
            height: "auto",
            maxWidth: "640px",
            maxHeight: "480px",
          }}
          videoConstraints={{
            facingMode: cameraFacingMode,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "100%",
            height: "auto",
            maxWidth: "640px",
            maxHeight: "480px",
          }}
        />
        <button
          onClick={handleCameraFlip}
          style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          Flip Camera
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App1
