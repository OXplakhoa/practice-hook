import './App.css'
import { useNotification } from './utils/useNotification';

function App() {
  const triggerNoti = useNotification("WUPS HAPPY HELLOWEEN! 👻🦇🎃",{
    body: "It's time for Halloween yayy!"
  });
  return (
    <div>
      <button onClick={triggerNoti}>Click To Notice</button>
    </div>
  );
}
export default App;

