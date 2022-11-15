import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1,100,200]} scale={2} >
        <MeshDistortMaterial
        color={"#8352fd"}
        attach="material"
        distort={1}
        speed={2}
        roughness={0}
        />
    </Sphere>
  )
}

export default AnimatedSphere