import './App.css';
import { usePreventLeave } from './utils/usePreventLeave';


function App() {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </>
  );
}

export default App;
