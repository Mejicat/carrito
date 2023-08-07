import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App() {

  return (
    <div className="App">
      <header className="App-header">
       <NavBar /> 
      </header>
       <ItemListContainer greeting='Hola, somos Mis Autitos' />
  
    </div>
  )
}

export default App;
