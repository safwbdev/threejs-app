import React, { Suspense } from "react";
import "./App.css";
import AnimatedSphere from "./components/AnimatedSphere";
import Box from "./components/Box";
import Iphone from "./components/Iphone";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export default function App() {

  return (
      <div className="fullApp">
      <div className="section text">
        <TextSection title="Using Three.js in React" subtitle={"three.js | React Three Fiber | drei"} /></div>
      <div className="section cube">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      </div>
      
      <div className="section iphone">
        <Canvas className="canvas">
        {/* <TextSection title="Three.js in React" /> */}
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </div>
    <div className="section blob">
      <Canvas className="canvas">
        {/* <TextSection title="Three.js in React" /> */}
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
      </div>
    </div>
  );
}