import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

function SecondLayer() {
  return (
    <div>
        <ParallaxLayer offset={1} speed={1} className="bg-[#2D2E31] h-screen ">
            {/* <ParallaxLayer offset={1}> */}
            <ParallaxLayer className="text-white text-4xl">My Recent <span className='text-colorTheme'>Project</span></ParallaxLayer>
            {/* </ParallaxLayer> */}
          
        </ParallaxLayer>
    </div>
  )
}

export default SecondLayer