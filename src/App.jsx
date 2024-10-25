import './App.css'
import { useFullscreen } from './utils/useFullscreen';

function App() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull, isFull } = useFullscreen(onFulls);

  return (
    <div style={{ height: "100vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="" width="250" />
        {isFull && <button onClick={exitFull}>Exit</button>}
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;

