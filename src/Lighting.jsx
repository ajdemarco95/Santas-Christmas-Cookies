import React from 'react'

function Lighting() {
  return (
    <>
          <ambientLight intensity={1} color={"#F0F8FF"}/>
      <directionalLight
        position={[5, 5, 5]}
        intensity={5}
        castShadow
        color={"#FFFACD"}
      />
    </>
  )
}

export default Lighting