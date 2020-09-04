import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import Routes from "./routes";
import { Navigation, Canvas, SocialMedia, Email, Footer } from "./components";

const App = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(true);

  const handleScroll = (e) => {
    const element = document.getElementById("my-id");

    element.addEventListener(
      "scroll",
      debounce((e) => {
        console.log("Hello");
        const { scrollTop } = e.target;

        if (position - scrollTop < 0) {
          setDirection(true);
        } else {
          setDirection(false);
        }

        setPosition(scrollTop);
      }),
      3000
    );

    return element.removeEventListener("scroll", () => {});
  };

  useEffect(handleScroll, []);

  return (
    <Canvas id="my-id">
      <Navigation
        scrollUp={!direction}
        scrollDown={direction}
        hidden={direction}
      />
      <Routes />
      <SocialMedia />
      <Email />
      <Footer />
    </Canvas>
  );
};

export default App;
