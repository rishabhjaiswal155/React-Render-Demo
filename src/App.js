import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { Parent } from './components/Parent Child/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { ParentThree } from './components/Incorrect Optimization/ParentThree';

function App() {
  return (
    <div className="App">
      <UseState/>
      <br/>
      <UseReducer/><br/>
      <ObjectUseState/><br/>
      <ArrayUseState/><br/>
      <Parent/><br/>
        <GrandParent/><br/>
        <ParentTwo/><br/>
        <ParentThree/>
      </div>
  );
}

export default App;
