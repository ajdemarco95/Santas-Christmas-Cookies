import { OrbitControls, Cylinder, Environment } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

function Experience() {
  const model = useLoader(GLTFLoader, './models/dog/scene.gltf')
  console.log(model)

  return (<>
    <OrbitControls />
    <Environment preset="sunset" background/>
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5,5]} intensity={7} castShadow color={"#9e69da"}/>
    {/* STAGE */}
    <group>
        <primitive object={model.scene} />
    </group>
    <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1/2, 5]} />
        <Cylinder scale={[5,1,5]} receiveShadow>
            <meshStandardMaterial color={"white"} />
        </Cylinder>
    </RigidBody>
  </>);
}

export default Experience