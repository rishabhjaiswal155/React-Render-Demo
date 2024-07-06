import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { Parent } from './components/Parent Child/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';

function App() {
  return (
    <div className="App">
      <UseState/>
      <br/>
      <UseReducer/><br/>
      <ObjectUseState/><br/>
      <ArrayUseState/><br/>
      <Parent/><br/>
        <GrandParent/>
      </div>
  );
}

export default App;
