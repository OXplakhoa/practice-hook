import './App.css'; 
import { useClick } from './utils/useClick';



function App() {
  const sayHello = () => console.log("Say hello")
  const title = useClick(sayHello);
  return (
    <>
      <h1 ref={title}>Hi</h1>
    </>
  );
}

export default App;
