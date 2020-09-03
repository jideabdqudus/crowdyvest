import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Forest", "Building", "Tree", "Color"];

const CarouselItem = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
  });

  return (
    <div>
      <p className="sdgHeader">Our Focus on SDGs</p>
      <h1>
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          delay={3000}
          direction="down"
          springConfig={presets.wobbly}
        />
      </h1>
    </div>
  );
};

export default CarouselItem;
