import { PresentationControls, Stage, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense } from "react";
import Chair from "./Chair";

const Experience = () => {
  return (
    <PresentationControls speed={1.5} global={true} zoom={0.7} polar={[-0.1, Math.PI / 4]}>
      <Stage environment="city" intensity={0.6} castShadow={false}>
        <Chair />
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
