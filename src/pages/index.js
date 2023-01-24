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
import styles from "../styles/Home.module.css";
import snakeandladderImg from "../assets/snakeandladder.jpg";
import taraeat1 from "../assets/taraeat1.jpg";
import taraeat from "../assets/taraeat.jpg";
import twitty from "../assets/twitty.jpg";
export default function Home() {
  const ref = useRef();
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      {/* bg-[#2D2E31] */}
      {/* <Parallax pages={5} className="overflow-y-scroll no-scrollbar">
    
        <FirstLayer/> 
   <SecondLayer/>
     
      </Parallax> */}

      <Parallax
        pages={4}
        className="overflow-y-scroll no-scrollbar bg-darkColor"
      >
        {/* <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
    <p className={styles.scrollText}>Scroll down</p>
  </ParallaxLayer> */}
        <FirstLayer />
        {/* <SecondLayer/> */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="flex justify-start md:items-center z-50 "
        >
          {/* <ParallaxLayer sticky={{ start: 1, end: 2 }}>Bag</ParallaxLayer> */}
          <div className="flex flex-col justify-start text-darkColor bg-white/60 h-20   md:bg-white/60 w-[100%] md:w-[40%] lg:w-[50%] items-center p-5">
            <div className="flex md:flex-col flex-row gap-2  w-full">
              <div className="md:text-6xl text-3xl font-semibold">My</div>
              <div className="md:text-6xl text-3xl font-semibold">Recent</div>{" "}
              <div className="text-colorTheme md:text-6xl text-3xl font-semibold">
                {" "}
                Projects
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          className="flex justify-end items-center"
        >
          {/* <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}> */}
          <div className="flex justify-center md:w-[60%] lg:w-[50%] p-5">
            <div className="p-5 bg-white rounded-xl">
              <Image
                src={snakeandladderImg}
                alt="snakeandladderImg"
                className="h-[50vh] "
              />
              <div>Snake and Ladder game</div>
              <div>
               Snakes and
                Ladders is a chance-based board game featuring 100 squares.
                Players have to get to the top while dealing with the
                consequences of every dice roll. Historically, the game was used
                to teach children basic moral values. The ladders were
                representative of virtues while the snakes of vice. Today, you
                could see it as a metaphor for life’s journey with all of its
                ups and downs.
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          className="flex justify-end items-center "
        >
          {/* <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}> */}
          <div className="flex justify-center md:w-[60%] lg:w-[50%] p-5">
          <div className="flex p-5 bg-white rounded-xl gap-2">
            <Image src={taraeat} alt="taraeat" className="h-[50vh] md:h-[60vh] " />
            <Image src={taraeat1} alt="taraeat1" className="h-[50vh] md:h-[60vh]" />
          </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          className="flex justify-end items-center "
        >
          {/* <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}> */}
          <div className="flex justify-center md:w-[60%] lg:w-[50%] p-5 ">
          <div className=" p-5 bg-white rounded-xl gap-2">
            <Image src={twitty} alt="twitty" className="h-[50vh] md:h-[60vh] " />
            <div>Twitty</div>
            <div>A twitter base web application.</div>
          </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
