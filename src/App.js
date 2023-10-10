import './App.css';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';

function App() {
  const name = 'Mateus';

  return (
    <div className="App">
      <SayMyName nome={name} />
      <Pessoas nome="Nehrú" idade="24" profissao="Desenvolvedor Web" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
