import Header from './components/Header';
import { Footer } from './components/Footer';
import Game from './components/Game/game';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <Game/>
      <Footer/>
    </div>
  );
}

export default App;
