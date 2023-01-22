import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import wallpaper from "../assets/wallpaper.jpg";
import photo4 from "../assets/naz1.png";
import Image from "next/image";
import javascriptIcon from "../assets/javascript.png";
import tailwindIcon from "../assets/tailwind.png";
import tagIcon from "../assets/tag.png";  
import FirstLayer from "./Components/FirstLayer";
import SecondLayer from "./Components/SecondLayer";
export default function Home() {
  const ref = useRef();
  return (
    <div >
      <Parallax pages={2} className="overflow-y-scroll no-scrollbar bg-[#2D2E31]">
        {/* <ParallaxLayer offset={0} >
          <ParallaxLayer offset={0} speed={1} className="bg-red-600 flex justify-center items-center">
            <h2>Welcome to my website</h2>
            </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="bg-blue-600">
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}
        <FirstLayer/>
        <SecondLayer/>
        {/* <ParallaxLayer offset={0.2} speed={0.5}>
            
        </ParallaxLayer>  */}
      </Parallax>
    </div>
  );
}
