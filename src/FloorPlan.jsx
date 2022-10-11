import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";

const FloorPlan = (props) => {
  return (
    <>
      < Bedroom bedNum='1'/>
      <div>Kitchen
      < Kitchen />
      </div>
      <div>Full Bath</div>
      < Bedroom bedNum='2'/>
      <div>Living Room</div>
      <div>Half Bath</div>
      < Bedroom bedNum='3'/>
    </>
  )
}

export default FloorPlan;