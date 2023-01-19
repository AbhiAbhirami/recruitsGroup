import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
// import ImageSlider from "./ImageSlider";
import Dots from "./Dots";
import "./Slider.css";
import banner1 from "../../assets/images/background/bg1.png";


function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ImageSlider, setImageSlider] = useState([{
    image: banner1
  }, {
    image: "https://e7.pngegg.com/pngimages/671/207/png-clipart-dell-laptop-computer-monitors-desktop-computers-personal-computer-laptop-television-electronics.png"
  }, {
    image: banner1
  },
  ])
  let media = window.screen.width < 600;
  // console.log(media);
  useEffect(() => {

    const len = ImageSlider.length - 1;
    let interval;
    console.log(len, "dcd");
    if (len != 0) {
      interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);
    } else {
      setActiveIndex(0)
    }
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container" style={media ? { display: "none" } : { display: "block" }}>
      <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider} />
      <Dots
        activeIndex={activeIndex}
        ImageSlider={ImageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
