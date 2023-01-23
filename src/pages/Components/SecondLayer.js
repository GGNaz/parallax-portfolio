import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import snakeandladderImg from "../../assets/snakeandladder.JPG";
import styles from '../../styles/Home.module.css'
function SecondLayer() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <>
      {/* <ParallaxLayer offset={1} speed={1} className="bg-[#2D2E31] h-screen w-full flex flex-row"> */}
      <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
    {/* <div className={`${styles.card} ${styles.sticky}`}> */}
    My Recent<span className="text-colorTheme ml-2"> Project</span>
    {/* </div> */}
  </ParallaxLayer>

  <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
    <Image
            src={snakeandladderImg}
            alt="snakeandladderImg"
            // className="h-[70vh] w-[70vh] z-40"
          />
    </div>
  </ParallaxLayer>

  <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
      <p>Neither am I</p>
    </div>
  </ParallaxLayer>
     
      {/* </ParallaxLayer> */}
    </>
  );
}

export default SecondLayer;
