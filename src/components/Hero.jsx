import hero from '../assets/tech/hero.jpg'
import { motion } from "framer-motion";
import React, {  Suspense } from "react";
import { styles } from "../style";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  return (
    <div className={`flex-row relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className="w-2/3 mx-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>Arthur</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a FullStack Developer , I <br className='sm:block hidden' />
            I develop Web and Mobile apps with React . . . .
          </p>
          
        </div>
        
        <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3, 2, 2]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                  <MeshDistortMaterial
                    color="#915EFF"
                    attach="material"
                    distort={0.5}
                    speed={3}
                  />
                </Sphere>
              </Suspense>
           
        </Canvas>
      </div>
      <div className=" float-right mt-60 mr-64">
      <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45JzOPulLZ1Nws1DiUCcy_xNJL-HxElqUkQ&usqp=CAU'}
            className="relative rounded-full mr-12 animate-blob"
      />

      </div>
      
     <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
    
  );
};

export default Hero;