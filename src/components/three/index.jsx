/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { PerspectiveCamera } from "@react-three/drei"
import { angleToRadians } from "../../utils/angle"

export default function Three() {
  return (
    <>

     <PerspectiveCamera makeDefault position={[0, 0, 3]}/>

     <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ffffff" />
     </mesh>
     <mesh rotation={[ - (angleToRadians(90)), 0, 0]}>
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color ="#ffffff" />
     </mesh>
    </>
  )
}