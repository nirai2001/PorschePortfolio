import React, { useEffect, useRef } from 'react'
import { Stars, useGLTF } from '@react-three/drei'
import PorscheScene from "../assets/porsche_911.glb"
import {a} from "@react-spring/three"
import { useFrame, useThree } from '@react-three/fiber'
const Porsche = ({isRotating, setIsRotating,setCurrentStage, ...props}) => {
  const porscheRef = useRef();

  const {gl, viewport} = useThree();

  const { nodes, materials } = useGLTF(PorscheScene)
  const starRef= useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    let clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handlePointerMove= (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){
          
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - lastX.current)/viewport.width;

    porscheRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handlePointerUp= (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
   
  const handleKeyDown= (e) =>{
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      porscheRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    }else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      porscheRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  }

  const handleKeyUp= (e) =>{
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false)
    }
  }

  useFrame((_,delta) => {
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current)< 0.001){
        rotationSpeed.current= 0;
      }
      starRef.current.rotation.x+=delta*0.1;
      starRef.current.rotation.y+=delta*0.01;
      porscheRef.current.rotation.y += rotationSpeed.current;
    }
    else{
      const rotation = porscheRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return() => {
      canvas.removeEventListener('pointerdown',handlePointerDown);
      canvas.removeEventListener('pointerup',handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown',handleKeyDown);
      document.removeEventListener('keyup',handleKeyUp);
  }
  },[gl,handlePointerDown, handlePointerUp, handlePointerMove])
  return (
    <a.group {...props} ref={porscheRef}>
      <Stars ref={starRef} count={50000} size={0.8}  scale={50} depth={false}/>
      <a.group position={[0.467, -0.295, 1.156]} rotation={[Math.PI / 2, 0, -2.983]}>
        <mesh geometry={nodes.TireFR004_Tire001_0.geometry} material={materials['Tire.001']} />
        <mesh geometry={nodes.TireFR004_chrome002_0.geometry} material={materials['chrome.002']} />
        <mesh geometry={nodes.TireFR004_null001_0.geometry} material={materials['null.001']} />
        <mesh geometry={nodes.TireFR004_disc002_0.geometry} material={materials['disc.002']} />
        <mesh geometry={nodes.TireFR004_metal_rough001_0.geometry} material={materials['metal_rough.001']} />
        <mesh geometry={nodes.TireFR004_1_car_paint002_0.geometry} material={materials['1_car_paint.002']} />
        <mesh geometry={nodes.TireFR004_1_car_paint007_0.geometry} material={materials['1_car_paint.007']} />
        <mesh geometry={nodes.TireFR004_1_car_paint000_0.geometry} material={materials['1_car_paint.000']} />
        <mesh geometry={nodes.TireFR004_1_car_paint010_0.geometry} material={materials['1_car_paint.010']} />
        <mesh geometry={nodes.TireFR004_1_car_paint009_0.geometry} material={materials['1_car_paint.009']} />
        <mesh geometry={nodes.TireFR004_1_car_paint003_0.geometry} material={materials['1_car_paint.003']} />
        <mesh geometry={nodes.TireFR004_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.TireFR004_1_car_paint011_0.geometry} material={materials['1_car_paint.011']} />
        <mesh geometry={nodes.TireFR004_1_car_paint012_0.geometry} material={materials['1_car_paint.012']} />
        <mesh geometry={nodes.TireFR004_Rim_Paint_0.geometry} material={materials.Rim_Paint} />
        <mesh geometry={nodes.TireFR004_Logo_0.geometry} material={materials.Logo} />
        <mesh geometry={nodes.TireFR004_Rims001_0.geometry} material={materials['Rims.001']} />
      </a.group>
      <a.group position={[0.847, -0.295, -1.225]} rotation={[Math.PI / 2, 0, -2.235]}>
        <mesh geometry={nodes.TireFR003_Tire001_0.geometry} material={materials['Tire.001']} />
        <mesh geometry={nodes.TireFR003_chrome002_0.geometry} material={materials['chrome.002']} />
        <mesh geometry={nodes.TireFR003_null001_0.geometry} material={materials['null.001']} />
        <mesh geometry={nodes.TireFR003_disc002_0.geometry} material={materials['disc.002']} />
        <mesh geometry={nodes.TireFR003_metal_rough001_0.geometry} material={materials['metal_rough.001']} />
        <mesh geometry={nodes.TireFR003_1_car_paint002_0.geometry} material={materials['1_car_paint.002']} />
        <mesh geometry={nodes.TireFR003_1_car_paint007_0.geometry} material={materials['1_car_paint.007']} />
        <mesh geometry={nodes.TireFR003_1_car_paint000_0.geometry} material={materials['1_car_paint.000']} />
        <mesh geometry={nodes.TireFR003_1_car_paint010_0.geometry} material={materials['1_car_paint.010']} />
        <mesh geometry={nodes.TireFR003_1_car_paint009_0.geometry} material={materials['1_car_paint.009']} />
        <mesh geometry={nodes.TireFR003_1_car_paint003_0.geometry} material={materials['1_car_paint.003']} />
        <mesh geometry={nodes.TireFR003_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.TireFR003_1_car_paint011_0.geometry} material={materials['1_car_paint.011']} />
        <mesh geometry={nodes.TireFR003_1_car_paint012_0.geometry} material={materials['1_car_paint.012']} />
        <mesh geometry={nodes.TireFR003_Rim_Paint_0.geometry} material={materials.Rim_Paint} />
        <mesh geometry={nodes.TireFR003_Logo_0.geometry} material={materials.Logo} />
        <mesh geometry={nodes.TireFR003_Rims001_0.geometry} material={materials['Rims.001']} />
      </a.group>
      <a.group position={[-0.937, -0.295, 0.932]} rotation={[Math.PI / 2, 0, 0.158]}>
        <mesh geometry={nodes.TireFR002_Tire001_0.geometry} material={materials['Tire.001']} />
        <mesh geometry={nodes.TireFR002_chrome002_0.geometry} material={materials['chrome.002']} />
        <mesh geometry={nodes.TireFR002_null001_0.geometry} material={materials['null.001']} />
        <mesh geometry={nodes.TireFR002_disc002_0.geometry} material={materials['disc.002']} />
        <mesh geometry={nodes.TireFR002_metal_rough001_0.geometry} material={materials['metal_rough.001']} />
        <mesh geometry={nodes.TireFR002_1_car_paint002_0.geometry} material={materials['1_car_paint.002']} />
        <mesh geometry={nodes.TireFR002_1_car_paint007_0.geometry} material={materials['1_car_paint.007']} />
        <mesh geometry={nodes.TireFR002_1_car_paint000_0.geometry} material={materials['1_car_paint.000']} />
        <mesh geometry={nodes.TireFR002_1_car_paint010_0.geometry} material={materials['1_car_paint.010']} />
        <mesh geometry={nodes.TireFR002_1_car_paint009_0.geometry} material={materials['1_car_paint.009']} />
        <mesh geometry={nodes.TireFR002_1_car_paint003_0.geometry} material={materials['1_car_paint.003']} />
        <mesh geometry={nodes.TireFR002_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.TireFR002_1_car_paint011_0.geometry} material={materials['1_car_paint.011']} />
        <mesh geometry={nodes.TireFR002_1_car_paint012_0.geometry} material={materials['1_car_paint.012']} />
        <mesh geometry={nodes.TireFR002_Rim_Paint_0.geometry} material={materials.Rim_Paint} />
        <mesh geometry={nodes.TireFR002_Logo_0.geometry} material={materials.Logo} />
        <mesh geometry={nodes.TireFR002_Rims001_0.geometry} material={materials['Rims.001']} />
      </a.group>
      <a.group position={[-0.557, -0.295, -1.449]} rotation={[Math.PI / 2, 0, 0.907]}>
        <mesh geometry={nodes.TireFR001_Tire001_0.geometry} material={materials['Tire.001']} />
        <mesh geometry={nodes.TireFR001_chrome002_0.geometry} material={materials['chrome.002']} />
        <mesh geometry={nodes.TireFR001_null001_0.geometry} material={materials['null.001']} />
        <mesh geometry={nodes.TireFR001_disc002_0.geometry} material={materials['disc.002']} />
        <mesh geometry={nodes.TireFR001_metal_rough001_0.geometry} material={materials['metal_rough.001']} />
        <mesh geometry={nodes.TireFR001_1_car_paint002_0.geometry} material={materials['1_car_paint.002']} />
        <mesh geometry={nodes.TireFR001_1_car_paint007_0.geometry} material={materials['1_car_paint.007']} />
        <mesh geometry={nodes.TireFR001_1_car_paint000_0.geometry} material={materials['1_car_paint.000']} />
        <mesh geometry={nodes.TireFR001_1_car_paint010_0.geometry} material={materials['1_car_paint.010']} />
        <mesh geometry={nodes.TireFR001_1_car_paint009_0.geometry} material={materials['1_car_paint.009']} />
        <mesh geometry={nodes.TireFR001_1_car_paint003_0.geometry} material={materials['1_car_paint.003']} />
        <mesh geometry={nodes.TireFR001_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.TireFR001_1_car_paint011_0.geometry} material={materials['1_car_paint.011']} />
        <mesh geometry={nodes.TireFR001_1_car_paint012_0.geometry} material={materials['1_car_paint.012']} />
        <mesh geometry={nodes.TireFR001_Rim_Paint_0.geometry} material={materials.Rim_Paint} />
        <mesh geometry={nodes.TireFR001_Logo_0.geometry} material={materials.Logo} />
        <mesh geometry={nodes.TireFR001_Rims001_0.geometry} material={materials['Rims.001']} />
      </a.group>
      <a.group position={[0.196, -0.621, -1.667]} rotation={[Math.PI / 2, 0, 0.158]}>
        <mesh geometry={nodes.Hood_Blue_Car_Paint_0.geometry} material={materials.Blue_Car_Paint} />
        <mesh geometry={nodes.Hood_Blue_Car_Paint_0_1.geometry} material={materials.Blue_Car_Paint} />
        <mesh geometry={nodes.Hood_Blue_Car_Paint_0_2.geometry} material={materials.Blue_Car_Paint} />
        <mesh geometry={nodes.Hood_Blue_Car_Paint_0_3.geometry} material={materials.Blue_Car_Paint} />
        <mesh geometry={nodes.Hood_Plastic_Base_02_0.geometry} material={materials.Plastic_Base_02} />
        <mesh geometry={nodes.Hood_Plastic_Base_02_0_1.geometry} material={materials.Plastic_Base_02} />
        <mesh geometry={nodes.Hood_Material002_0.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Hood_Blue_Car_Paint004_0.geometry} material={materials['Blue_Car_Paint.004']} />
        <mesh geometry={nodes.Hood_DRL_Emission_material_PL004_0.geometry} material={materials['DRL_Emission_material_PL.004']} />
        <mesh geometry={nodes.Hood_Velvet_Dark_0.geometry} material={materials.Velvet_Dark} />
        <mesh geometry={nodes.Hood_Leather_Shader001_0.geometry} material={materials['Leather_Shader.001']} />
        <mesh geometry={nodes.Hood_Logo_0.geometry} material={materials.Logo} />
        <mesh geometry={nodes.Hood_Leather_Shader002_0.geometry} material={materials['Leather_Shader.002']} />
        <mesh geometry={nodes.Hood_Leather_Shader_0.geometry} material={materials.Leather_Shader} />
        <mesh geometry={nodes.Hood_Leather_Shader_0_1.geometry} material={materials.Leather_Shader} />
        <mesh geometry={nodes.Hood_Leather_Fabric_01_0.geometry} material={materials.Leather_Fabric_01} />
        <mesh geometry={nodes.Hood_Weave_Generator001_0.geometry} material={materials['Weave_Generator.001']} />
        <mesh geometry={nodes.Hood_Carbon_Fiber_Procedural_0.geometry} material={materials.Carbon_Fiber_Procedural} />
        <mesh geometry={nodes.Hood_Aluminium_0.geometry} material={materials.Aluminium} />
        <mesh geometry={nodes.Hood_Material008_0.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Hood_Material012_0.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Hood_Black_Plastic_0.geometry} material={materials.Black_Plastic} />
        <mesh geometry={nodes.Hood_Brushed_Aluminum_2_0.geometry} material={materials.Brushed_Aluminum_2} />
        <mesh geometry={nodes.Hood_Material011_0.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Hood_Plastic_Grid_04_0.geometry} material={materials.Plastic_Grid_04} />
        <mesh geometry={nodes.Hood_Headlight_glass_0.geometry} material={materials.Headlight_glass} />
        <mesh geometry={nodes.Hood_Chrome_0.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Hood_DRL_Emission_material_PL001_0.geometry} material={materials['DRL_Emission_material_PL.001']} />
        <mesh geometry={nodes.Hood_Glass_0.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Hood_DRL_Emission_material_PL_0.geometry} material={materials.DRL_Emission_material_PL} />
        <mesh geometry={nodes.Hood_Car_windshield_glass_0.geometry} material={materials.Car_windshield_glass} />
        <mesh geometry={nodes.Hood_Car_windshield_glass003_0.geometry} material={materials['Car_windshield_glass.003']} />
        <mesh geometry={nodes.Hood_DRL_Emission_material_PL002_0.geometry} material={materials['DRL_Emission_material_PL.002']} />
        <mesh geometry={nodes.Hood_DRL_Emission_material_PL003_0.geometry} material={materials['DRL_Emission_material_PL.003']} />
        <mesh geometry={nodes.Hood_GOLD_0.geometry} material={materials.GOLD} />
        <mesh geometry={nodes.Hood_Black_Plastic002_0.geometry} material={materials['Black_Plastic.002']} />
        <mesh geometry={nodes.Hood_GlassM_0.geometry} material={materials.GlassM} />
        <mesh geometry={nodes.Hood_NumberDark2_0.geometry} material={materials.NumberDark2} />
        <mesh geometry={nodes.Hood_NumberDark_0.geometry} material={materials.NumberDark} />
        <mesh geometry={nodes.Hood_NumberBlue_0.geometry} material={materials.NumberBlue} />
        <mesh geometry={nodes.Hood_NumberWhite_0.geometry} material={materials.NumberWhite} />
        <mesh geometry={nodes.Hood_NumberGreen_0.geometry} material={materials.NumberGreen} />
        <mesh geometry={nodes.Hood_Blue_Car_Paint001_0.geometry} material={materials['Blue_Car_Paint.001']} />
        <mesh geometry={nodes.Hood_Glass_dark_0.geometry} material={materials.Glass_dark} />
        <mesh geometry={nodes.Hood_Black_Plastic001_0.geometry} material={materials['Black_Plastic.001']} />
        <mesh geometry={nodes.Hood_Car_windshield_glass001_0.geometry} material={materials['Car_windshield_glass.001']} />
      </a.group>
    </a.group>
  )
}

useGLTF.preload(PorscheScene)
export default Porsche;
