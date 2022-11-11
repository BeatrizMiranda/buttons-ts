import Button from "./components/Button";
import GifList from "./components/GifsList";

function App() {
  return (
    <div className="App">
      <GifList />
      <Button variant="secondary" />
      <Button variant="secondary" />
      <Button variant="secondary" disable />
    </div>
  );
}

export default App;
