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
}

function MyLabel({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
}: MyLabelProps) {
  return (
    <span className={`${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

export default MyLabel;
