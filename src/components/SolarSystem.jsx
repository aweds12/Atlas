import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthDayMap from "../assets/Images/earth-daymap.jpg";
import EarthNormalMap from "../assets/Images/earth-normalmap.jpg";
import EarthSpecularMap from "../assets/Images/earth-specularmap.jpg";
import EarthCloudsMap from "../assets/Images/earth-cloud.jpg";
import SunSurfaceMap from "../assets/Images/sun.jpg";

const Solar = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap, sunMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap,
      EarthNormalMap,
      EarthSpecularMap,
      EarthCloudsMap,
      SunSurfaceMap,
    ]
  );

  const earthRef = useRef();
  const cloudRef = useRef();
  const sunRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudRef.current.rotation.y = elapsedTime / 4;
    sunRef.current.rotation.y = elapsedTime / 8;

    // sunRef.current.position.x = 20;
    // sunRef.current.position.y = 5;
    // sunRef.current.position.z = 60;
  });

  return (
    <>
      <mesh ref={sunRef} position={[20, 5, 60]}>
        {/* <ambientLight intensity={1} /> */}
        <sphereGeometry args={[20, 50, 50]} />
        <meshStandardMaterial map={sunMap} sunMap={sunMap} />
      </mesh>

      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <>
        <pointLight color="#f6f3ea" position={[2, 0.5, 6]} intensity={1.5} />
        <mesh ref={cloudRef}>
          <sphereGeometry args={[1.255, 50, 50]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={0.35}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh ref={earthRef}>
          <sphereGeometry args={[1.25, 50, 50]} />
          <meshPhongMaterial specularMap={specularMap} />
          <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            metalness={0.5}
            roughness={0.75}
          />
        </mesh>
      </>

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={1}
        panSpeed={0.5}
        rotateSpeed={0.5}
      />
    </>
  );
};

export default Solar;
