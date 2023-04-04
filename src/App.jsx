import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./App.css";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";

const App = () => {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 12, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
};

export default App;
