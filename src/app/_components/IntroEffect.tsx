'use client';

import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { css } from '../../../styled-system/css';

function EnhancedParticles() {
  const streamRef = useRef<THREE.Points>(null);
  const hexRef = useRef<THREE.Points>(null);
  const glowRef = useRef<THREE.Points>(null);

  const streamCount = 800;
  const hexCount = 150;
  const glowCount = 50;

  const streamPositions = new Float32Array(streamCount * 3);
  const streamVelocities = new Float32Array(streamCount * 3);
  const streamColors = new Float32Array(streamCount * 3);

  const hexPositions = new Float32Array(hexCount * 3);
  const hexVelocities = new Float32Array(hexCount * 3);

  const glowPositions = new Float32Array(glowCount * 3);
  const glowVelocities = new Float32Array(glowCount * 3);

  // Initialize stream particles
  for (let i = 0; i < streamCount; i++) {
    streamPositions[i * 3] = (Math.random() - 0.5) * 20;
    streamPositions[i * 3 + 1] = Math.random() * 12 - 15;
    streamPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    streamVelocities[i * 3] = (Math.random() - 0.5) * 0.3;
    streamVelocities[i * 3 + 1] = Math.random() * 2 + 1.5;
    streamVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.3;

    const hue = 0.52 + Math.random() * 0.15;
    const color = new THREE.Color().setHSL(hue, 1, 0.6 + Math.random() * 0.4);
    streamColors[i * 3] = color.r;
    streamColors[i * 3 + 1] = color.g;
    streamColors[i * 3 + 2] = color.b;
  }

  // Initialize hex particles
  for (let i = 0; i < hexCount; i++) {
    hexPositions[i * 3] = (Math.random() - 0.5) * 25;
    hexPositions[i * 3 + 1] = Math.random() * 15 - 20;
    hexPositions[i * 3 + 2] = (Math.random() - 0.5) * 25;

    hexVelocities[i * 3] = (Math.random() - 0.5) * 0.1;
    hexVelocities[i * 3 + 1] = Math.random() * 1.2 + 0.8;
    hexVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
  }

  // Initialize glow particles
  for (let i = 0; i < glowCount; i++) {
    glowPositions[i * 3] = (Math.random() - 0.5) * 30;
    glowPositions[i * 3 + 1] = Math.random() * 20 - 25;
    glowPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    glowVelocities[i * 3] = 0;
    glowVelocities[i * 3 + 1] = Math.random() * 0.8 + 0.5;
    glowVelocities[i * 3 + 2] = 0;
  }

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Stream particles
    if (streamRef.current) {
      const positions = streamRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < streamCount; i++) {
        positions[i * 3] += streamVelocities[i * 3] * delta * 3;
        positions[i * 3 + 1] += streamVelocities[i * 3 + 1] * delta * 4;
        positions[i * 3 + 2] += streamVelocities[i * 3 + 2] * delta * 3;

        positions[i * 3] += Math.sin(time * 2 + i * 0.01) * 0.02;

        if (positions[i * 3 + 1] > 12) {
          positions[i * 3] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 1] = -15;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
      }

      streamRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Hex particles
    if (hexRef.current) {
      const positions = hexRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < hexCount; i++) {
        positions[i * 3] += hexVelocities[i * 3] * delta * 2;
        positions[i * 3 + 1] += hexVelocities[i * 3 + 1] * delta * 3;
        positions[i * 3 + 2] += hexVelocities[i * 3 + 2] * delta * 2;

        positions[i * 3] += Math.sin(time * 1.5 + i * 0.1) * 0.015;
        positions[i * 3 + 2] += Math.cos(time * 1.5 + i * 0.1) * 0.015;

        if (positions[i * 3 + 1] > 15) {
          positions[i * 3] = (Math.random() - 0.5) * 25;
          positions[i * 3 + 1] = -20;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
        }
      }

      hexRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Glow particles
    if (glowRef.current) {
      const positions = glowRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < glowCount; i++) {
        positions[i * 3 + 1] += glowVelocities[i * 3 + 1] * delta * 2;

        positions[i * 3] += Math.sin(time * 0.5 + i * 0.2) * 0.05;
        positions[i * 3 + 2] += Math.cos(time * 0.5 + i * 0.2) * 0.05;

        if (positions[i * 3 + 1] > 20) {
          positions[i * 3] = (Math.random() - 0.5) * 30;
          positions[i * 3 + 1] = -25;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
      }

      glowRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Main stream particles */}
      <points ref={streamRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={streamCount}
            array={streamPositions}
            itemSize={3}
            args={[streamPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={streamCount}
            array={streamColors}
            itemSize={3}
            args={[streamColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Hexagonal particles */}
      <points ref={hexRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={hexCount}
            array={hexPositions}
            itemSize={3}
            args={[hexPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00ffff"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Glow particles */}
      <points ref={glowRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={glowCount}
            array={glowPositions}
            itemSize={3}
            args={[glowPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#ffffff"
          transparent
          opacity={0.3}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

function CameraController() {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (time < 2.5) {
      state.camera.position.y = Math.sin(time * 0.5) * 0.5;
      state.camera.position.z = 5 + Math.sin(time * 0.3) * 0.3;
    }
  });

  return null;
}

function SceneController({ onComplete }: { onComplete: () => void }) {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (time > 3.0) {
      onComplete();
    }
  });

  return null;
}

export function IntroEffect({ onEffectComplete }: { onEffectComplete?: () => void }) {
  const [isActive, setIsActive] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    setIsActive(true);
    setShowCanvas(true);
  }, []);

  const handleComplete = () => {
    setTimeout(() => {
      setIsActive(false);
      onEffectComplete?.();
    }, 500);

    setTimeout(() => {
      setShowCanvas(false);
    }, 1000);
  };

  if (!showCanvas) return null;

  return (
    <div className={`${overlayStyle} ${!isActive ? fadeOutStyle : ''}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      >
        <color attach="background" args={['#000011']} />
        <fog attach="fog" args={['#000011', 10, 50]} />

        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#00d4ff" />
        <pointLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

        <EnhancedParticles />
        <CameraController />
        <SceneController onComplete={handleComplete} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

const overlayStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.98)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  transition: 'opacity 1s ease-out',
  opacity: 1,
});

const fadeOutStyle = css({
  opacity: 0,
  pointerEvents: 'none',
});
