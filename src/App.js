import './App.css';
import GrandParent from './components/GrandParent';

/**
 * this app is to explain our the context functionality works
 * in this example we have a GrandParent component that it has inside
 * other component called Parent, and Parent has 2 children.
 * these 2 children will be able to work with the context data
 * even that we are not sending it through props.
 * and the context was defined one App above it means this context
 * is wrapping <App> component. (index.js)
 * @returns
 */
function App() {
  return (
    <div className="App">
      <GrandParent />
    </div>
  );
}

export default App;
