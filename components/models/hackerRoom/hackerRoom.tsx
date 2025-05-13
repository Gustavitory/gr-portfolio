"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoomMesh from "./hackerRoomMesh";
import CanvasLoader from "@/components/commons/canvasLoader";

export const HackerRoom = () => {
  return (
    <Canvas className="size-full">
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <HackerRoomMesh
          scale={0.07}
          position={[0, 0, 0]}
          rotation={[0, -Math.PI / 1, 0]}
        />
      </Suspense>
    </Canvas>
  );
};
