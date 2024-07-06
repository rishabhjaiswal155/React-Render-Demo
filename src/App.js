import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { Parent } from './components/Parent Child/Parent';

function App() {
  return (
    <div className="App">
      <UseState/>
      <br/>
      <UseReducer/><br/>
      <ObjectUseState/><br/>
      <ArrayUseState/><br/>
      <Parent/>
      </div>
  );
}

export default App;
