"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* ---------------- Main Sphere ---------------- */
function MainSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.06;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.09;
    }
  });

  return (
    <Float speed={10} rotationIntensity={12} floatIntensity={12}>
      <mesh ref={meshRef} scale={2.35}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#4338ca"          // darker indigo
          attach="material"
          distort={0.25}
          speed={1.3}
          roughness={0.08}
          metalness={0.92}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}


function GlowShell() {
  return (
    <Float speed={5} rotationIntensity={7} floatIntensity={7}>
      <mesh scale={2.65}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={1}       
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}


function ElegantRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ring1.current) {
      ring1.current.rotation.x = Math.sin(t * 0.25) * 0.3;
      ring1.current.rotation.y = t * 0.14;
    }

    if (ring2.current) {
      ring2.current.rotation.x = Math.cos(t * 0.22) * 0.35;
      ring2.current.rotation.z = t * 0.11;
    }
  });

  return (
    <>
      <mesh ref={ring1} scale={3.05} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[1, 0.012, 16, 320]} />
        <meshStandardMaterial
          color="#818cf8"
          metalness={1}
          roughness={0.15}
          emissive="#4338ca"
          emissiveIntensity={0.18}
        />
      </mesh>

      <mesh ref={ring2} scale={3.35} rotation={[Math.PI / 3.2, 0.4, 0.2]}>
        <torusGeometry args={[1, 0.009, 16, 120]} />
        <meshStandardMaterial
          color="#a5b4fc"
          metalness={1}
          roughness={0.18}
          emissive="#6366f1"
          emissiveIntensity={0.12}
          transparent
          opacity={0.55}
        />
      </mesh>
    </>
  );
}


function OrbitDots() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 3.6;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 1.3) * 0.6,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial
              color="#c7d2fe"
              emissive="#6366f1"
              emissiveIntensity={0.5}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}


export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.22} />
      <directionalLight position={[5, 7, 4]} intensity={1.1} color="#e0e7ff" />
      <pointLight position={[-6, -4, -3]} intensity={0.4} color="#818cf8" />
      <pointLight position={[4, -3, 5]} intensity={0.3} color="#a5b4fc" />

      <Stars
        radius={90}
        depth={50}
        count={700}
        factor={2.2}
        saturation={0}
        fade
        speed={0.25}
      />

      <MainSphere />
      <GlowShell />
      <ElegantRings />
      <OrbitDots />
    </Canvas>
  );
}