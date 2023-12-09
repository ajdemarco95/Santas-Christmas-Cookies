import { Doggo } from "./Doggo";
import Lighting from "./Lighting";
import Ground from "./Ground";
import LogHut from "./LogHut";
import ChristmasTreeCookie from "./ChristmasTreeCookie";
import GroundSnow from "./GroundSnow";
import Penguin from './Penguin'

function Experience() {
  return (
    <>

      <Lighting />
      <Doggo />
      <Ground />
      <Penguin />
      {/* <GroundSnow /> */}
      <LogHut />
      <ChristmasTreeCookie />
    </>
  );
}

export default Experience;
