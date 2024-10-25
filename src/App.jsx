import './App.css';

function App() {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(5, 5);
  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, odit! Ab accusamus aspernatur voluptates voluptatem dolorem in iste quod neque molestiae, at quidem vel excepturi eligendi corporis sapiente porro eum?</p>
    </>
  );
}

export default App;
