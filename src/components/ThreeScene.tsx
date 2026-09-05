import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Interactive Node Structure
const TechNodes: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate particle positions
  const count = 120;
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 16;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 16;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth mouse parallax rotation
      groupRef.current.rotation.y += delta * 0.15 + mousePos.x * 0.0003;
      groupRef.current.rotation.x += delta * 0.08 + mousePos.y * 0.0003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Distorted AI Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[2, 3]} />
          <MeshDistortMaterial
            color="#06b6d4"
            wireframe
            distort={0.35}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#0284c7"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Orbiting Satellite Wireframe Cube */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3.2, 1.8, -1]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            emissive="#7e22ce"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Orbiting Octahedron Node */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[3.2, -1.5, 0.5]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#10b981"
            wireframe
            emissive="#059669"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Background Floating Particle Point Cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#38bdf8"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export const ThreeScene: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WebGL or Reduced Motion Fallback UI
  if (!hasWebGL || prefersReducedMotion) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/20 blur-3xl animate-glow-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a855f7" />
        <TechNodes mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
