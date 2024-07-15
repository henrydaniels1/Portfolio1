// import Face from './Components/Icons/Face.jsx'
// import Ig from './Components/Icons/Ig.jsx'
// import Twitter from './Components/Icons/Twitter.jsx'
// import Link from './Components/Icons/Link.jsx';
// import Cv from './Components/buttons/Cv.jsx';
// import Part from './Components/buttons/'
// import Book from './Components/buttons/Book.jsx'
// import Html from './Components/Icons/Html.jsx';
// import Rect from './Components/Icons/Rect.jsx';
// import J from './Components/Icons/J.jsx';
// import Cs from './Components/Icons/Cs.jsx';
import Spline from '@splinetool/react-spline';
// import Hand from './Components/Icons/Hand.jsx';
// import { motion } from "framer-motion"

// import useSpline from '@splinetool/r3f-spline'
// import { OrthographicCamera } from '@react-three/drei'

// import Figma from './Components/Icons/Figma.jsx';
// import { Canvas } from '@react-three/fiber'
// import Loader from './Components/Loader.jsx';
// import Island from './Components/models/Island.jsx';
// import { Suspense, useEffect, useRef, useState } from "react";
// import { OrbitControls } from '@react-three/drei';

export default function Landing ()
{
  

  

  return (
   <div className='md:mt-6 h-full w-full relative items-end overflow-hidden'>
      {/* Background Spline, h-[82vh] */}
      <div className='absolute inset-0 z-0 lg:h-[87vh] md:w-[85%] w-[95%] scale-[1] md:scale-100 mx-auto  '>
       <Spline
          scene="https://prod.spline.design/me58Eq-cKj-3LwVM/scene.splinecode" 
       />
      </div>

      {/* Robot spline */}
      <div className=' lg:w-[50%] z-10 md:w-[85%] relative mx-auto md:top-[20%] top-[25%] h-[55%]'>
       
        <Spline
          scene="https://prod.spline.design/lRjiagV31Mt8lVSy/scene.splinecode"
        />
     </div>
      
    </div>
  )
}
