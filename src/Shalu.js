import react,{ useContext } from "react";
import { Himanshu } from "./App";

function Shalu() {
  const context = useContext(Himanshu)
    return(
      <div>
      {console.log(context)}
      
      </div>
    );
}
export default Shalu;