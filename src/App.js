import './App.css';
import stickers from "./stickers.json"
import StickerList from './components/StickerList.jsx'


function App() {
  return (
    <div className="App">
      <StickerList stickers={stickers}/>
    </div>
  );
}

export default App;
