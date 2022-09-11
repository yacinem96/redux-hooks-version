
import { useSelector,useDispatch } from "react-redux";
import {Counter} from "./components/counter"
import {Title} from "./components/input"
import './App.css';



function App() {
  const counter =useSelector((state)=>state.CounterReducer.counter);
  const title =useSelector((state)=>state.TitleReducer.title);

  const dispatch=useDispatch();
  return (
    <div className="App  ">
     
    <Counter counter={counter}  dispatch={dispatch} />
    <p>--------------------------------------------------------------------------</p>
    <Title  title={title} dispatch={dispatch} />
    </div>
  );
}




export default App;
