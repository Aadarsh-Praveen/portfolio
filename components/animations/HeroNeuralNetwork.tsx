"use client";

import { useEffect, useRef } from "react";

interface Node {
  bx: number;
  by: number;
  orbitR: number;
  orbitSpeed: number;
  orbitPhase: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface Pulse {
  fromIdx: number;
  toIdx: number;
  t: number;
}

export function HeroNeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let frame = 0;
    const nodes: Node[] = [];
    const pulses: Pulse[] = [];

    const TEAL = "#00B89A";
    const BLUE = "#2563EB";
    const NODE_COUNT = 45;
    const CONNECT_DIST = 130;
    const PULSE_TRAVEL = 45;

    const buildNodes = (W: number, H: number) => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const onRight = i >= NODE_COUNT * 0.55;
        const bx = onRight
          ? W * 0.72 + Math.random() * W * 0.28
          : Math.random() * W * 0.28;
        const by = Math.random() * H;
        nodes.push({
          bx,
          by,
          orbitR: 15 + Math.random() * 40,
          orbitSpeed: 0.008 + Math.random() * 0.014,
          orbitPhase: Math.random() * Math.PI * 2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.025,
          color: Math.random() < 0.55 ? TEAL : BLUE,
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildNodes(canvas.width, canvas.height);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const getPos = (n: Node, t: number) => ({
      x: n.bx + Math.cos(n.orbitPhase + t * n.orbitSpeed) * n.orbitR,
      y: n.by + Math.sin(n.orbitPhase + t * n.orbitSpeed * 0.7) * n.orbitR,
    });

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Spawn pulses
      if (frame % 14 === 0) {
        for (let a = 0; a < nodes.length; a++) {
          const pa = getPos(nodes[a], frame);
          for (let b = a + 1; b < nodes.length; b++) {
            const pb = getPos(nodes[b], frame);
            const dx = pa.x - pb.x;
            const dy = pa.y - pb.y;
            if (dx * dx + dy * dy < CONNECT_DIST * CONNECT_DIST) {
              if (Math.random() < 0.06) {
                pulses.push({ fromIdx: a, toIdx: b, t: 0 });
              }
              break;
            }
          }
        }
      }

      // Connection lines
      for (let a = 0; a < nodes.length; a++) {
        const pa = getPos(nodes[a], frame);
        for (let b = a + 1; b < nodes.length; b++) {
          const pb = getPos(nodes[b], frame);
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          if (dx * dx + dy * dy < CONNECT_DIST * CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.strokeStyle = "rgba(0,184,154,0.18)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Pulse dots
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t++;
        if (p.t > PULSE_TRAVEL) { pulses.splice(i, 1); continue; }
        const progress = p.t / PULSE_TRAVEL;
        const from = getPos(nodes[p.fromIdx], frame);
        const to = getPos(nodes[p.toIdx], frame);
        const px = from.x + (to.x - from.x) * progress;
        const py = from.y + (to.y - from.y) * progress;
        const alpha = Math.sin(progress * Math.PI) * 0.85;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,184,154,${alpha})`;
        ctx.fill();
      }

      // Nodes
      for (const n of nodes) {
        const { x, y } = getPos(n, frame);
        const scale = 0.75 + 0.5 * (Math.sin(n.pulsePhase + frame * n.pulseSpeed) * 0.5 + 0.5);
        const r = 3 * scale;
        const isBlue = n.color === BLUE;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = isBlue ? "rgba(37,99,235,0.65)" : "rgba(0,184,154,0.65)";
        ctx.fill();
      }

      // Gradient overlays
      const g1 = ctx.createRadialGradient(W * 0.15, H * 0.30, 0, W * 0.15, H * 0.30, 220);
      g1.addColorStop(0, "rgba(0,184,154,0.07)");
      g1.addColorStop(1, "rgba(0,184,154,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(W * 0.85, H * 0.65, 0, W * 0.85, H * 0.65, 200);
      g2.addColorStop(0, "rgba(37,99,235,0.06)");
      g2.addColorStop(1, "rgba(37,99,235,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      // Center white vignette — keeps text area clean
      const g3 = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, 180);
      g3.addColorStop(0, "rgba(248,247,244,0.85)");
      g3.addColorStop(1, "rgba(248,247,244,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, W, H);

      frame++;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none md:block hidden"
      style={{ zIndex: 0 }}
    />
  );
}
