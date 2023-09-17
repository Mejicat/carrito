import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';
import { CartProvider } from './context/CartContext';

function App() {

  return (
      <CartProvider>
        <Router />
      </CartProvider>
  )
}

export default App;
