// import logo from './logo.svg';
import './App.css';
import NumberBox from './NumberBox'

function App() {
  return (
    <div> 
      <NumberBox initialValue={10}/>
      <NumberBox initialValue={-10}/>
    </div>
  );
}

export default App;
