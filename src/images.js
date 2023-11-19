import { useState , useEffect } from "react";
import one from "../src/images/9.png";import b from "../src/images/107.png";
import c from "../src/images/108.png";import d from "../src/images/1124.png";
import e from "../src/images/1125.png";import f from "../src/images/1563.png";
import g from "../src/images/164.png";import h from "../src/images/261.png";
const images = [
    one,b,c,d,e,f,g,h,
  ];

  export default function Imagess() {
    const [image, setimage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (image === images.length - 1) {
          setimage(0);
        } else {
          setimage(image + 1);
        }
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [image]);
    return (
      <div className="hey">
        <img className="iimg" src={images[image]} alt="img" />
      </div>
    );
  }