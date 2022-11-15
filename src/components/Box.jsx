import React from 'react'
// import { useLoader } from '@react-three/fiber';
// import {TextureLoader} from "three/src/loaders/TextureLoader";
// import texture from "../images/map.jpeg"

const Box = () => {
  
  // const colorMap = useLoader(TextureLoader, texture)

  return (
    <mesh rotation={[190, 40, 20]}>
      <boxBufferGeometry attch="geometry" args={[3,3,3]}/>
      <meshLambertMaterial attach={"material"} color="purple" />
      {/* <meshLambertMaterial map={colorMap} /> */}
      {/* <meshLambertMaterial attach="material" /> */}
    </mesh>
  )
}

export default Box