import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    // Lighter fog for a cleaner look
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;
    camera.position.y = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles (BufferGeometry)
    // Decreased count slightly for a lighter feel
    const count = 4000;
    const geometry = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(count * 3);
    const initialPositionsArray = new Float32Array(count * 3);
    
    for(let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 120;
        const y = (Math.random() - 0.5) * 40; 
        const z = (Math.random() - 0.5) * 80;
        
        positionsArray[i * 3] = x;
        positionsArray[i * 3 + 1] = y;
        positionsArray[i * 3 + 2] = z;

        // Store initial positions to calculate wave offset from base
        initialPositionsArray[i * 3] = x;
        initialPositionsArray[i * 3 + 1] = y;
        initialPositionsArray[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));

    // Material
    const material = new THREE.PointsMaterial({
      color: 0x9333ea, // Purple-600
      size: 0.3, // Smaller particles
      transparent: true,
      opacity: 0.6, // Lower opacity for "light" feel
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation variables
    let mouseX = 0;
    let mouseY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.05; // Reduced sensitivity
      mouseY = (event.clientY - windowHalfY) * 0.05;
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.002; // Slower time step

      // Gentle camera movement
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Wave effect
      const positions = particles.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
         const i3 = i * 3;
         const x = initialPositionsArray[i3];
         const z = initialPositionsArray[i3 + 2];
         
         // Calculate gentle sine wave offset based on X and Z position + time
         // This creates a rolling hill effect rather than a chaotic storm
         const yOffset = Math.sin(x * 0.05 + time) * 2 + Math.cos(z * 0.05 + time) * 1;

         // Apply to Y position
         positions[i3 + 1] = initialPositionsArray[i3 + 1] + yOffset;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = time * 0.05; // Very slow rotation of the entire cloud

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
};