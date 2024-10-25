import './App.css';
import { useConfirm } from './utils/useConfirm';




function App() {
  const deleteWorld = () => {
    console.log("Deleting...");
  }
  const abort = () => console.log("Canceled");
  const confirmDelete = useConfirm("Are you sure ?",deleteWorld,abort);
  return (
    <>
      <h1>Hi</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
}

export default App;
