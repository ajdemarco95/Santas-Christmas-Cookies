import { Doggo } from "./Doggo";
import Lighting from "./Lighting";
import Ground from "./Ground";
import LogHut from "./LogHut";
import ChristmasTreeCookie from "./ChristmasTreeCookie";
import GroundSnow from "./GroundSnow";

function Experience() {
  return (
    <>

      <Lighting />
      <Doggo />
      {/* <Ground /> */}
      <GroundSnow />
      <LogHut />
      <ChristmasTreeCookie />
    </>
  );
}

export default Experience;
