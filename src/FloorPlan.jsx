import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <>
      < Bedroom bedNum='1'/>
      <div>Kitchen
      < Kitchen />
      </div>
      <div>Full Bath</div>
      < Bedroom bedNum='2'/>
      < LivingRoom/>
      <div>Half Bath</div>
      < Bedroom bedNum='3'/>
    </>
  )
}

export default FloorPlan;