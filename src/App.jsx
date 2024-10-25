import './App.css';
import { useBeforeLeave } from './utils/useBeforeLeave';


function App() {
  const begForLife = () => {
    console.log("Please don't leave me :<");
  }
  useBeforeLeave(begForLife);
  return (
    <>
      <h1>PLEASEEE</h1>
    </>
  );
}

export default App;
