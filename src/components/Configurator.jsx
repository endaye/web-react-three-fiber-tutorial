import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const { material, setMaterial, legs, setLegs } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => {
              setMaterial("leather");
            }}>
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => {
              setMaterial("fabric");
            }}>
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Legs</div>
        <div className="configurator__section__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => {
              setLegs(1);
            }}>
            <div className="item__label">Modern</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item--active" : ""}`}
            onClick={() => {
              setLegs(2);
            }}>
            <div className="item__label">Classic</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
