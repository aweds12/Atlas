import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Coord = (props) => {
  const gltf = useGLTF(props.globeType);

  const earthRef = useRef();

  useFrame(() => {
    if (!props.action) earthRef.current.rotateY(Math.PI / 180 / 4);
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[3, 2, 10]} intensity={1.5} />
      <ambientLight intensity={0.05} />
      <primitive object={gltf.scene} {...props} ref={earthRef} />

      {props.orbitControl && (
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={1}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
      )}
    </>
  );
};

export default Coord;
