import './App.css';
import { useScroll } from './utils/useScroll';


function App() {
  const {y} = useScroll();
  return (
    <div style={{height: "100vh"}}>
      <h1 style={{color: y > 1 ? "red" : "blue" }}>Hello</h1>
    </div>
  );
}

export default App;
