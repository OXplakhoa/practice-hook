import './App.css';
import { useTitle } from './utils/useTitle';



function App() {
  const titleUpdate = useTitle("Loading...");
  setTimeout(() => titleUpdate("Practice Hooks"),5000);
  return (
    <>
      <div>Hi</div>

    </>
  );
}

export default App;
