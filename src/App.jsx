import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css'
import Three from './components/three';
import { Html } from '@react-three/drei';

function App() {
  return (
    <Canvas id="three-canvas-container">

      <Html>
        <div>text</div>
      </Html>

      <Suspense fallback={null}>
        <Three />        
      </Suspense>
    </Canvas>
  )
}

export default App