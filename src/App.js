import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Coord from "./components/Coord";
import Control from "./components/Control";

import { regions } from "./assets/data";
import "./assets/Fonts/fonts.css";

import HexGlobe from "./assets/Models/hexagon.glb";
import ClassicGlobe from "./assets/Models/classic.glb";
import { AppContainer, Apologize } from "./components/styles";

function App() {
  const [removeText, setRemoveText] = useState(false);
  const [gtheme, setTheme] = useState("Classic");
  const [xdt, setXdt] = useState(regions);
  const [orbitControl, setOrbitControl] = useState(false);
  const [action, setAction] = useState(false);
  const [dms, setDMS] = useState({ longitude: 0, latitude: 0 });

  const searchCountry = (e) => {
    setXdt(
      regions.filter((p) =>
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  var globeScale = 1;
  var globePosition = [0, 0, 0];
  var globeType = ClassicGlobe;
  var globeRotation = [0, 0, 0];

  useEffect(() => {
    var thm = localStorage.getItem("theme");
    setTheme(thm);
  }, []);

  if (gtheme === "Hex") {
    globeScale = [0.4, 0.4, 0.4];
    globePosition = [0, 0, 0];
    globeRotation = !action ? [0, -0.75, 0] : [dms.latitude, dms.longitude, 0];
    globeType = HexGlobe;
  }
  if (gtheme === "Classic") {
    globeScale = [0.015, 0.015, 0.015];
    globePosition = [0, 0, 0];
    globeRotation = !action ? [0, 0, 0] : [dms.latitude, dms.longitude, 0];
    globeType = ClassicGlobe;
  }

  const rotateEarth = (lon, lat) => {
    // dms && earthRef.current.rotateY(Math.PI / 180);
    setDMS({
      longitude: lon * Math.PI,
      latitude: (lat * Math.PI) / 180,
    });
    setAction(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setRemoveText(true);
    }, 7000);
  }, []);

  return (
    <AppContainer>
      {removeText ? (
        []
      ) : (
        <Apologize>
          <p>
            I apologize for the issue with the 3D globe. I aware that it is
            currently rotating to the wrong place, and will try my best to
            resolve the problem as soon as possible. Thank you for your
            understanding.
          </p>
          <code>🙏🤞🥺</code>
        </Apologize>
      )}

      <div className="CanvasContainer">
        <Canvas>
          <Suspense fallback={null}>
            <Coord
              globeType={globeType}
              scale={globeScale}
              position={globePosition}
              rotation={globeRotation}
              action={action}
              args={[50, 180, 180]}
              orbitControl={orbitControl}
            />
          </Suspense>
        </Canvas>

        <div className="right">
          <div className="navigator">
            {/* eslint-disable-next-line */}
            <a href="#topOfList" className="arrow top"></a>
            {/* eslint-disable-next-line */}
            <a href="#endOfList" className="arrow bottom"></a>
          </div>

          <input
            type="search"
            placeholder={"Search country"}
            onChange={searchCountry}
            style={{ fontFamily: gtheme }}
          />

          <div className="regionContainer">
            <div className="RegionNames" style={{ fontFamily: gtheme }}>
              <div id="topOfList"></div>
              {xdt.map((region, index) => (
                <p
                  key={index}
                  onClick={() => rotateEarth(region.longitude, region.latitude)}
                >
                  <span>{region.name}</span>
                </p>
              ))}
              <div id="endOfList"></div>
            </div>
          </div>
        </div>
      </div>

      <Control
        gtheme={gtheme}
        setTheme={setTheme}
        orbitControl={orbitControl}
        setOrbitControl={setOrbitControl}
        action={action}
        setAction={setAction}
      />
    </AppContainer>
  );
}

export default App;
