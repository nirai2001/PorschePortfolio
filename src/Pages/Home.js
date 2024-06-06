import { OrbitControls, Sky, Stars, Text3D } from '@react-three/drei'
import { Canvas} from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Porsche from '../assets/Porsche'
import HomeInfo from '../Components/Homeinfo'
import Loader from '../Components/Loader'
import { soundoff, soundon } from "../assets/icons";
import skyfall from "../assets/skyfall.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(skyfall));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [2.9, 2.9, 2.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [4, 4, 3.6];
      screenPosition = [1.6, -2.5, -9];
    }

    return [screenScale, screenPosition];
  };

  const [porscheScale, porschePosition] = adjustIslandForScreenSize();
  return (
    <div className="canvas-container">
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
      <Canvas
      className={`w-full h-screen bg-stone-950 ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`} 
      camera={{ near: 0.1, far: 1000 }}>
          <OrbitControls />
          <directionalLight position={[5, 10, 4]} intensity={13} />
          <ambientLight intensity={10} />
          <pointLight position={[10, 2, 10]} intensity={10} />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={10}
          />
        <Suspense fallback={<Loader />}>
        <Porsche 
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={porschePosition}
          scale={porscheScale}
        rotation={[3.5,1.5,0]}/>
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </div>
  )
}

export default Home