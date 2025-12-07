"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Crystal() {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 0]} /> 
        <MeshTransmissionMaterial 
          backside
          samples={4} 
          thickness={2} 
          chromaticAberration={0.5} 
          anisotropy={0.3} 
          distortion={0.5} 
          distortionScale={0.5} 
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          roughness={0.1}
          clearcoat={1}
          color="#a5b4fc" 
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
      {/* Lighting */}
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#ec4899" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <Crystal />
        <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#4f46e5" />
      </Suspense>
    </Canvas>
  );
}