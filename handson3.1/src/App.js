import logo from './logo.svg';
import './App.css';
import AlertBox from './AlertBox';
import TickleMe from './TickeMe';
import NumberBox from './NumberBox';
import Dice from './Dice'

function App() {
  return (
    <div>
      <NumberBox initialValue={10}/>
      <AlertBox InitialMessage={"Hello from the other side"}/>
      <TickleMe InitialText={"Hover over me"}/>
      <Dice InitialNumber={Math.floor(6*Math.random())+1}/>
    </div>
  );
}

export default App;
