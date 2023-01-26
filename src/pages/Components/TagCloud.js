import React, { useEffect } from 'react'
import TagCloud from "TagCloud"
function TextSphere() {

useEffect(() => {
    return () => {
        const container = '.tagcloud';
        const texts = [
            'ReactJS', 'NodeJs', 'JavaScript',
            'CSS', 'Material UI', 'Tailwind',
            'HTML', 'MySQL'
        ];
        const options = {radius: 300, initSpeed: "normal", maxSpeed: "normal", keep:true};
        
        TagCloud(container, texts, options);
    }
},[])

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl font-semibold md:text-6xl text-white absolute top-0 z-40'><span className='text-colorTheme'>Technologies</span> that I use</div>
        <span className='tagcloud text-white text-2xl'></span>
        
        </div>
  )
}

export default TextSphere