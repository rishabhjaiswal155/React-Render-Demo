import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';

function App() {
  return (
    <div className="App">
      <UseState/>
      <br/>
      <UseReducer/><br/>
      <ObjectUseState/>
      </div>
  );
}

export default App;
