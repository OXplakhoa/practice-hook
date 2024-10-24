import './App.css';
import { useInput } from './utils/userInput';



function App() {
  const maxLen = value => !value.includes("@")
  const name = useInput("Mr.", maxLen);
  return (
    <>
      <h1>Hello</h1>
      <h2 style={{ color: name.value.length >= 9 ? "red" : "tear" }}>
        Count input: {name.value.length + 1}
      </h2>
      <input {...name} type="text" placeholder='Name' />
    </>
  );
}

export default App;
