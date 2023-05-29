import "./App.css";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
// import HooksCounter from "./components/HooksCounter";
// import UseStateWithObjects from "./components/UseStateWithObjects";
// import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";

function App() {
  return <div className="App">
    {/* <StatefulGreetingWithPrevState />
      <HooksCounter /> 
    <UseStateWithObjects /> */
      <UseEffectCounterContainer />}
  </div>;
}

export default App;