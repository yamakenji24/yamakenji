'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { css } from '../../../styled-system/css';

// Unified color scheme management
const COLOR_SCHEMES = {
  blue: { hue: 0.55, range: 0.1, hex: '#4080ff' },
  purple: { hue: 0.75, range: 0.15, hex: '#8040ff' },
  green: { hue: 0.33, range: 0.1, hex: '#40ff80' },
  orange: { hue: 0.08, range: 0.1, hex: '#ff8040' },
  cyan: { hue: 0.5, range: 0.1, hex: '#40ffff' }
} as const;

type ColorScheme = keyof typeof COLOR_SCHEMES;

interface EffectConfig {
  type?: 'global' | 'section' | 'profile';
  variant?: 'minimal' | 'normal' | 'dense';
  colorScheme?: ColorScheme;
  effects?: ('particles' | 'geometry' | 'sparkles' | 'energy')[];
}

// Unified floating geometry component
function FloatingGeometry({ 
  count, 
  colorScheme, 
  scale = 1 
}: { 
  count: number; 
  colorScheme: ColorScheme; 
  scale?: number; 
}) {
  const group = useRef<THREE.Group>(null);
  const geometries = useRef<THREE.Mesh[]>([]);
  const colors = COLOR_SCHEMES[colorScheme];

  const createGeometries = () => {
    const geos: THREE.Mesh[] = [];

    for (let i = 0; i < count; i++) {
      const geometryType = Math.random();
      let geometry;
      
      if (geometryType < 0.33) {
        geometry = new THREE.OctahedronGeometry((0.15 + Math.random() * 0.25) * scale);
      } else if (geometryType < 0.66) {
        geometry = new THREE.TetrahedronGeometry((0.15 + Math.random() * 0.25) * scale);
      } else {
        geometry = new THREE.IcosahedronGeometry((0.15 + Math.random() * 0.25) * scale);
      }

      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(colors.hue + Math.random() * colors.range, 1, 0.8),
        transparent: true,
        opacity: 0.4 + Math.random() * 0.4,
        wireframe: Math.random() > 0.6,
        emissive: new THREE.Color().setHSL(colors.hue + Math.random() * colors.range, 0.8, 0.3),
        shininess: 120,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 30 * scale;
      mesh.position.y = (Math.random() - 0.5) * 20 * scale;
      mesh.position.z = (Math.random() - 0.5) * 15 * scale;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      (mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015
      };

      (mesh as any).floatSpeed = Math.random() * 0.3 + 0.1;
      (mesh as any).initialY = mesh.position.y;

      geos.push(mesh);
    }

    return geos;
  };

  if (geometries.current.length === 0 && group.current) {
    geometries.current = createGeometries();
    geometries.current.forEach(geo => group.current!.add(geo));
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = time * 0.02;

      geometries.current.forEach((mesh, i) => {
        const speed = (mesh as any).floatSpeed;
        const rotSpeed = (mesh as any).rotationSpeed;
        const initialY = (mesh as any).initialY;

        mesh.rotation.x += rotSpeed.x;
        mesh.rotation.y += rotSpeed.y;
        mesh.rotation.z += rotSpeed.z;

        mesh.position.y = initialY + Math.sin(time * speed + i) * 1.5;
        mesh.position.x += Math.sin(time * 0.05 + i * 0.3) * 0.008;
      });
    }
  });

  return <group ref={group} />;
}

// Unified particle system
function ParticleSystem({ 
  particleCount, 
  colorScheme, 
  size = 0.05 
}: { 
  particleCount: number; 
  colorScheme: ColorScheme; 
  size?: number; 
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const colors = COLOR_SCHEMES[colorScheme];

  const positions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const velocities: number[] = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    const color = new THREE.Color();
    color.setHSL(colors.hue + Math.random() * colors.range, 0.7, 0.4 + Math.random() * 0.3);
    particleColors[i * 3] = color.r;
    particleColors[i * 3 + 1] = color.g;
    particleColors[i * 3 + 2] = color.b;

    velocities.push((Math.random() - 0.5) * 0.015);
  }

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i] * Math.sin(time * 0.3 + i * 0.05);
      positions[i * 3 + 1] += Math.sin(time * 0.2 + i * 0.03) * 0.003;
      positions[i * 3 + 2] += Math.cos(time * 0.25 + i * 0.04) * 0.002;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particleColors}
          itemSize={3}
          args={[particleColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Unified sparkle effect
function SparkleField({ 
  count, 
  colorScheme 
}: { 
  count: number; 
  colorScheme: ColorScheme; 
}) {
  const sparkles = useRef<THREE.Group>(null);
  const colors = COLOR_SCHEMES[colorScheme];
  
  useFrame((state) => {
    if (!sparkles.current) return;
    
    const time = state.clock.getElapsedTime();
    
    sparkles.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshBasicMaterial;
      
      material.opacity = 0.3 + Math.sin(time * 4 + i * 0.3) * 0.4;
      
      mesh.rotation.x = time * 1.5 + i;
      mesh.rotation.y = time * 1 + i;
      mesh.rotation.z = time * 2 + i;
      
      mesh.position.y += Math.sin(time * 1.5 + i) * 0.01;
    });
  });
  
  return (
    <group ref={sparkles}>
      {[...Array(count)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 15
          ]}
        >
          <octahedronGeometry args={[0.08 + Math.random() * 0.05]} />
          <meshBasicMaterial
            color={new THREE.Color().setHSL(colors.hue + Math.random() * colors.range, 1, 0.7)}
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Unified background component
export function UnifiedBackground({ 
  type = 'section',
  variant = 'normal',
  colorScheme = 'blue',
  effects = ['particles', 'geometry', 'sparkles']
}: EffectConfig) {
  
  const configs = {
    global: { geometry: 35, particles: 1500, sparkles: 50, size: 0.08 },
    section: { geometry: 8, particles: 300, sparkles: 25, size: 0.04 },
    profile: { geometry: 25, particles: 500, sparkles: 40, size: 0.06 },
    minimal: { geometry: 5, particles: 200, sparkles: 15, size: 0.03 }
  };

  const config = configs[variant] || configs[type] || configs.section;
  const lightColor = COLOR_SCHEMES[colorScheme].hex;

  const containerClass = type === 'global' ? globalContainer : localContainer;

  return (
    <div className={containerClass}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.4} 
          color={lightColor} 
        />
        <pointLight 
          position={[-5, -5, 5]} 
          intensity={0.3} 
          color={lightColor} 
        />
        
        {effects.includes('geometry') && (
          <FloatingGeometry 
            count={config.geometry} 
            colorScheme={colorScheme}
            scale={type === 'global' ? 1.2 : 1}
          />
        )}
        
        {effects.includes('particles') && (
          <ParticleSystem 
            particleCount={config.particles} 
            colorScheme={colorScheme}
            size={config.size}
          />
        )}
        
        {effects.includes('sparkles') && (
          <SparkleField 
            count={config.sparkles} 
            colorScheme={colorScheme} 
          />
        )}
      </Canvas>
    </div>
  );
}

const globalContainer = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none',
  zIndex: -1,
});

const localContainer = css({
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});