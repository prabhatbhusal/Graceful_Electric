import React from "react";

const OutlineLetter = ({ letter, font, color }: { letter: string, font: string, color: string }) => {
  return (
    <span className={`font-dancing-script font-extrabold ${font}`}
      style={{
        fontWeight: 800,
        color: "transparent",
        WebkitTextStroke: `2px ${color}`,
        lineHeight: 1,
        display: "inline-block",
      }}
    >
      {letter}
    </span>
  );
};

export default OutlineLetter;
