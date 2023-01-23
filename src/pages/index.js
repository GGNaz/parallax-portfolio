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
import styles from '../styles/Home.module.css'
import snakeandladderImg from "../assets/snakeandladder.jpg";
export default function Home() {
  const ref = useRef();
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div >
      {/* bg-[#2D2E31] */}
      {/* <Parallax pages={5} className="overflow-y-scroll no-scrollbar">
    
        <FirstLayer/> 
   <SecondLayer/>
     
      </Parallax> */}


<Parallax pages={5} className="overflow-y-scroll no-scrollbar bg-darkColor">
  {/* <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
    <p className={styles.scrollText}>Scroll down</p>
  </ParallaxLayer> */}
    <FirstLayer/> 
    {/* <SecondLayer/> */}

  <ParallaxLayer sticky={{ start: 1, end: 2 }} className="flex justify-start items-center z-50 ">
  {/* <ParallaxLayer sticky={{ start: 1, end: 2 }}>Bag</ParallaxLayer> */}
    <div className="flex flex-col justify-start text-darkColor bg-white w-[50%] items-center p-5">
      <div >
    <div className="text-6xl font-semibold">My</div><div className="text-6xl font-semibold">Recent</div> <div className="text-colorTheme text-6xl font-semibold"> Projects</div>
    </div>
    </div>
  </ParallaxLayer>                                            
 
  <ParallaxLayer offset={1} speed={0.5} className="flex justify-end items-center" >
    {/* <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}> */}
    <div className="flex justify-center w-[50%] p-5 bg-orange-500">
    <Image
            src={snakeandladderImg}
            alt="snakeandladderImg"
            className="h-[70vh] w-[70vh]"
          />
    </div>
  </ParallaxLayer>

  <ParallaxLayer offset={2} speed={0.5} className="flex justify-end items-center bg-blue-600">
    {/* <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}> */}
    <div className="flex justify-center w-[50%] p-5 bg-orange-500">
    <Image
            src={snakeandladderImg}
            alt="snakeandladderImg"
            className="h-[70vh] w-[70vh]"
          />
    </div>
    {/* </div> */}
  </ParallaxLayer>

</Parallax>
    </div>
  );
}
