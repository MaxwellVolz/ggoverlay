'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing';
import { useEffect } from 'react';
import { useLoading } from '@/contexts/LoadingContext';
import LoadingSpinner from './LoadingSpinner';

function Scene() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Simulate loading completion after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#8b5cf6" />

      {/* Example 3D Objects */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh position={[-2, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.7} roughness={0.1} />
      </mesh>

      <mesh position={[2, 0, 0]} castShadow receiveShadow>
        <torusKnotGeometry args={[0.4, 0.15, 128, 32]} />
        <meshStandardMaterial color="#ec4899" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>

      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} intensity={0.5} />
        <DepthOfField focusDistance={0.01} focalLength={0.05} bokehScale={2} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </>
  );
}

export default function Scene3D() {
  const { isLoading } = useLoading();

  return (
    <>
      <LoadingSpinner />
      <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
          }}
        >
          <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
          <Scene />
        </Canvas>

        {/* UI Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="container mx-auto px-8 py-12 h-full flex flex-col justify-between">
            {/* Title */}
            <div className="pointer-events-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                OverCr
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mt-4 font-light">
                Next.js 15 + React Three Fiber Boilerplate
              </p>
            </div>

            {/* Bottom Info */}
            <div className="pointer-events-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 max-w-md">
                <h3 className="text-white text-lg font-semibold mb-2">Ready to Build</h3>
                <p className="text-white/70 text-sm">
                  A clean boilerplate featuring Three.js, post-processing effects,
                  Tailwind CSS v4, and TypeScript. Start creating immersive 3D experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
