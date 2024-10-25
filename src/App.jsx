import './App.css';
import { useNetwork } from './utils/useNetwork';


function App() {
  const handleNetworkChange =  (online) => {
    console.log(online ? "We On Fire!" : "We Down To The Moon");
  }
  const status = useNetwork(handleNetworkChange);
  return (
    <>
      <h1>{status ? "Online" : "Offline"}</h1>
    </>
  );
}

export default App;
