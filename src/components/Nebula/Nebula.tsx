import React from "react";
import "./Nebula.scss";

type NebulaProps = {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Nebula: React.FC<NebulaProps> = ({
  id = "nebula",
  checked = false,
  onChange,
}) => {
  return (
    <label className="container">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <div className="checkbox-wrapper">
        <div className="checkmark"></div>
        <div className="nebula-glow"></div>
        <div className="sparkle-container"></div>
      </div>
    </label>
  );
};

export default Nebula;
