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
}

function MyLabel({ label = "No label", size = "normal" }: MyLabelProps) {
  return <span className={`${size}`}>{label}</span>;
}

export default MyLabel;
