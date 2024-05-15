import React from "react";
import "@/app/css/styles.css";

export default function Die() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="die">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face left"></div>
        <div className="face right"></div>
      </div>
    </div>
  );
}
