
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import wallpaper from "../assets/wallpaper.jpg"
import photo2 from "../assets/photo2.png"
import Image from 'next/image';

export default function Home() {
  const ref = useRef();
  return (
   <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            // backgroundImage: `url(https://e7.pngegg.com/pngimages/385/824/png-clipart-mr-peabody-penny-peterson-film-character-mr-incredible-fictional-character-cartoon.png)`,
            backgroundColor: "#2D2F33",
            backgroundSize: 'cover',
            height: "100vh"
          }}
        className="w-full"
        >
         
           <ParallaxLayer speed={0.5} className="flex flex-col justify-center items-center">
           {/* <div className='text-white text-6xl w-full'>{`Hi, I'm Nazer!`}</div> */}
           <div className='flex relative'>
           <Image src={photo2} alt="photo2" className='h-96 w-72  p-5' />
           <ParallaxLayer speed={0.8} className="flex flex-col justify-center items-center">
           <img src="https://img.icons8.com/fluency/48/null/css3.png" className='absolute h-20 '/>
           </ParallaxLayer>
           <img src="https://img.icons8.com/color/48/null/javascript--v1.png" className='absolute h-20 right-7' />
           </div>
           {/* <div className=' text-white font-sans text-5xl font-semibold -mt-14 z-10 '>
            Nazer Somera
           </div> */}
        </ParallaxLayer> 
          </ParallaxLayer>
          <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundColor: "blue",
            backgroundSize: 'cover',
          }}
        >
        
        </ParallaxLayer>
      </Parallax>
    
   </div>

  )
}
