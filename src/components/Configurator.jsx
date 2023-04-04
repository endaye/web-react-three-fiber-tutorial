import React from "react";

const Configurator = () => {
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair material</div>
        <div className="configurator__section__values">
          <div className="item">
            <div className="item__label">Leather</div>
          </div>
          <div className="item">
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;