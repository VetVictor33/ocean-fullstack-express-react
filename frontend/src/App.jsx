import './App.css';
import ReadAll from './components/ReadAll/ReadAll';
import Header from './components/Header/Header';
import ReadById from './components/ReadById/ReadById';
import { useState } from "react";

function App() {
  //inico bloco criado com ajuda do ChatGPT
  const [activeComponent, setActiveComponent] = useState('home');

  const changeComponentOnClick = component => {
    setActiveComponent(component);
  };
  //fim
  return (
    <div>
      <Header onButtonClick={changeComponentOnClick} />
      {activeComponent === 'home' && <ReadAll />}
      {activeComponent === 'search' && <ReadById />}
    </div>
  )
}

export default App