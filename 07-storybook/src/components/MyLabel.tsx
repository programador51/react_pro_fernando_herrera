import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Label to render on the component
   */
  label?: string;

  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Render the text with mayus
   */
  allCaps?: boolean;

  /**
   * Set the font color
   */
  color?: "primary" | "secondary" | "tertiary";

  fontColor?: string;
}

function MyLabel({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) {
  return (
    <span
      className={`${size} text-${color}`}
      style={{
        color: fontColor,
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

export default MyLabel;
