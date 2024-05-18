// src/scenes/mars/Mars.js

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Mars = ({ displacementScale = 0.1 }) => {
  const marsRef = useRef()

  // Rotate Mars over time
  useFrame(({ clock }) => {
    marsRef.current.rotation.y = clock.getElapsedTime() / 6
  })

  return (
    <Sphere ref={marsRef} args={[1, 32, 32]} position={[5, 0, 0]}>
      <meshStandardMaterial
        attach="material"
        map={new THREE.TextureLoader().load('/textures/mars_texture.jpg')}
        displacementMap={new THREE.TextureLoader().load('/textures/mars_displacement.jpg')}
        displacementScale={displacementScale}
      />
    </Sphere>
  )
}

export default Mars
