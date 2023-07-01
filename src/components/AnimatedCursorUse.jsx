import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorUse = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={15}
        outerSize={43}
        color="132, 94, 194"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link"
        ]}
      />
    </div>
  );
};

export default AnimatedCursorUse;
