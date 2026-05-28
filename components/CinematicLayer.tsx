"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CinematicLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Detect mobile device to scale down performance targets
    const isMobile = window.innerWidth < 768;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    // WebGL Renderer optimized for performance
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, // Disable antialiasing on mobile to double GPU speed
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.setClearColor(0x000000, 0); 
    container.appendChild(renderer.domElement);

    // Particle Configuration: Less particles = faster loading & zero lags!
    const particleCount = isMobile ? 40 : 100; // Drastically reduced from 200
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialPositions: { x: number; y: number; z: number; speedX: number; speedY: number; speedZ: number; angle: number }[] = [];

    const colorWarm = new THREE.Color(0xff7a00);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 150;
      const z = (Math.random() - 0.5) * 80;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions.push({
        x,
        y,
        z,
        speedX: (Math.random() - 0.5) * 0.03, // Slower drift speeds
        speedY: (Math.random() - 0.5) * 0.02,
        speedZ: (Math.random() - 0.5) * 0.015,
        angle: Math.random() * Math.PI * 2,
      });

      const mixRatio = Math.random();
      const mixedColor = mixRatio < 0.75 ? colorWarm : colorWhite;

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Drawing a simple, fast particle texture using canvas
    const createBokehTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16; // Smaller texture dimensions
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.6)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: isMobile ? 3 : 5,
      vertexColors: true,
      map: createBokehTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Movement Tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    // Only bind mouse tracking on desktop
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop with FPS throttling to save system overhead!
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let lastRenderTime = 0;
    const fpsThreshold = 1 / 45; // Max 45 FPS in background points, saving 25% CPU cycles!

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Throttle rendering
      if (elapsedTime - lastRenderTime < fpsThreshold) return;
      lastRenderTime = elapsedTime;

      const posAttribute = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i++) {
        const data = initialPositions[i];
        const driftX = Math.sin(elapsedTime * 0.15 + data.angle) * 0.04;
        const driftY = Math.cos(elapsedTime * 0.12 + data.angle) * 0.03;

        posAttribute.setX(i, posAttribute.getX(i) + data.speedX + driftX);
        posAttribute.setY(i, posAttribute.getY(i) + data.speedY + driftY);
        posAttribute.setZ(i, posAttribute.getZ(i) + data.speedZ);

        if (Math.abs(posAttribute.getX(i)) > 110) posAttribute.setX(i, -posAttribute.getX(i) * 0.95);
        if (Math.abs(posAttribute.getY(i)) > 85) posAttribute.setY(i, -posAttribute.getY(i) * 0.95);
        if (Math.abs(posAttribute.getZ(i)) > 50) posAttribute.setZ(i, -posAttribute.getZ(i) * 0.95);
      }

      posAttribute.needsUpdate = true;

      if (!isMobile) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

        particles.rotation.y = mouseRef.current.x * 0.05;
        particles.rotation.x = -mouseRef.current.y * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="cinematic-particle-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
