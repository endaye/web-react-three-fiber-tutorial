import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./App.css";
import Configurator from "./components/Configurator";

const App = () => {
  return (
    <div className="App">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 12, 20]} />
        <Experience />
      </Canvas>
      <Configurator />
    </div>
  );
};

export default App;
