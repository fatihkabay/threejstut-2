/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { angleToRadians } from "../../utils/angle"

export default function Three() {
  return (
    <>
     <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ffffff" />
     </mesh>
     <mesh>
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color="#ffffff" />
     </mesh>
    </>
  )
}