import Child from "./Child";
import ChildCounter from "./ChildCounter";

/**
 * this component has 2 children, even that we are not sending any props here
 * these children has access to the context info we have some components above.
 * @returns
 */
function Parent () {
  return <div className="Parent">
    <ChildCounter />
    <hr />
    <Child />
  </div>
}

export default Parent;