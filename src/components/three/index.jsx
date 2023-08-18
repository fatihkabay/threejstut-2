/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { angleToRadians } from "../../utils/angle"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Three() {

  const orbitControlsRef = useRef(null)

  useFrame((state) => {
     console.log(state.mouse)
  }) 

  return (
    <>

     <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
     <OrbitControls ref={orbitControlsRef} />

     <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ffffff" />
     </mesh>
     <mesh rotation={[ - (angleToRadians(90)), 0, 0]}>
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color ="#ffffff" />
     </mesh>
    </>
  )
}