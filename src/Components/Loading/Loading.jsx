import React from "react";
import { useRef } from "react";
import { AnimationTpt, Back, Shadow } from "./LoadingCss";

import trumpet from "../../public/trumpet.json";

const Loading = () => {
  const container = useRef(null);

  const demorar = () => {
    setTimeout(() => {
      container.current.style.opacity = "0";
    }, 500);
    setTimeout(() => {
      finalizar();
    }, 700);
  };

  const finalizar = () => {
    container.current.style.display = "none";
  };

  return (
    <>
      <Back ref={container}>
        <AnimationTpt
          animationData={trumpet}
          loop={false}
          onComplete={demorar}
        />
        <Shadow />
      </Back>
    </>
  );
};

export default Loading;
