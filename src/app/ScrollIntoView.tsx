"use client";
import { useRef, useState } from "react";

export const ScrollIntoView = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    if (divRef.current) {
      divRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={divRef}
      style={{
        height: "200px",
        width: "400px",
        overflow: "auto",
        border: "1px solid #c0c0c0",
      }}
    >
      {[...Array(100)].map((_, index) => (
        <div key={index}>Item {index + 1}</div>
      ))}
      <button onClick={onClick}>Go to top</button>
    </div>
  );
};
