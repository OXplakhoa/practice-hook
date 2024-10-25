import './App.css';
import { useTab } from './utils/userTab';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of section 2"
  }
]

function App() {
  const {currItem, changeItem} = useTab(0,content)
  return (
    <>
      {content.map((c,idx) => {
        return <button onClick={() => changeItem(idx)}>{c.content}</button>
      })}
      <div>
        {currItem.content}
      </div>
    </>
  );
}

export default App;
