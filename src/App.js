import logo from './logo_site.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="logo_site" alt="logo" />
       
        <p>Linka Pet</p>


        <div className='links'>
          <a>Home</a>
          <a>Serviços</a>
          <a>Perfil</a>
        </div>
      </header>
    </div>
  );
}

export default App;
