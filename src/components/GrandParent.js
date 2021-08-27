import Parent from "./Parent";

/**
 * has the Parent to see that we are not sending props but we still have
 * context access here and in its children components.
 * @returns
 */
function GrandParent() {
  return (
    <div className="GrandParent">
      <Parent />
    </div>
  )
}

export default GrandParent;