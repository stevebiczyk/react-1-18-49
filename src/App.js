import "./App.css";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
// import HooksCounter from "./components/HooksCounter";
// import UseStateWithObjects from "./components/UseStateWithObjects";
import UseEffectCounter from "./components/UseEffectCounter";

function App() {
  return <div className="App">
    {/* <StatefulGreetingWithPrevState />
      <HooksCounter /> 
    <UseStateWithObjects /> */
      <UseEffectCounter />}
  </div>;
}

export default App;