// Orbit Lab style: the 3D focal point is a sparse instrument object—graphite, signal lime, ultraviolet, and no decorative excess.
import { useEffect, useRef, useState } from "react";

export default function OrbitCore() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReady = () => setIsReady(true);
    const readyFrame = window.requestAnimationFrame(updateReady);

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion.matches) return;
      const rect = scene.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      scene.style.setProperty("--core-x", `${(x * 10).toFixed(2)}deg`);
      scene.style.setProperty("--core-y", `${(y * -10).toFixed(2)}deg`);
      scene.style.setProperty("--cursor-x", `${(x * 18).toFixed(2)}px`);
      scene.style.setProperty("--cursor-y", `${(y * 18).toFixed(2)}px`);
    };

    const resetPointer = () => {
      scene.style.setProperty("--core-x", "0deg");
      scene.style.setProperty("--core-y", "0deg");
      scene.style.setProperty("--cursor-x", "0px");
      scene.style.setProperty("--cursor-y", "0px");
    };

    scene.addEventListener("pointermove", onPointerMove);
    scene.addEventListener("pointerleave", resetPointer);
    return () => {
      window.cancelAnimationFrame(readyFrame);
      scene.removeEventListener("pointermove", onPointerMove);
      scene.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className={`core-scene ${isReady ? "is-ready" : ""}`}
      role="img"
      aria-label="Abstract orbiting 3D project core with a luminous signal node"
    >
      <div className="core-grid" aria-hidden="true" />
      <div className="core-halo halo-one" aria-hidden="true" />
      <div className="core-halo halo-two" aria-hidden="true" />
      <div className="core-orbit orbit-horizontal" aria-hidden="true">
        <span className="orbit-node node-lime" />
      </div>
      <div className="core-orbit orbit-vertical" aria-hidden="true">
        <span className="orbit-node node-violet" />
      </div>
      <div className="core-orbit orbit-diagonal" aria-hidden="true">
        <span className="orbit-node node-white" />
      </div>
      <div className="core-crystal" aria-hidden="true">
        <span className="crystal-face face-front" />
        <span className="crystal-face face-side" />
        <span className="crystal-face face-top" />
        <span className="crystal-glint" />
      </div>
      <div className="core-data data-one" aria-hidden="true">x 0.84</div>
      <div className="core-data data-two" aria-hidden="true">SYNC / 100</div>
      <div className="core-crosshair" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="core-status" aria-hidden="true">
        <i />
        <span>CORE / ONLINE</span>
      </div>
    </div>
  );
}
