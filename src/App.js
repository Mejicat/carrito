import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';
import { CartProvider } from './context/CartContext';
import { db } from "./firebase/client";
import { snapshot } from 'firebase/firestore';
import {getDocs, collection, query, where, getDoc, limit, doc} from 'firebase/firestore';


function App() {

  const productRef = doc(db,"products","RA4rWLyo4EtVksXhaKxd")

  const getProduct = () => {
    getDoc (productRef).then((snapshot => {
      if(snapshot.exists()) {
        console.log({id: snapshot.id, ...snapshot.data() }) 
      }
    }))
  }

  useEffect (() => {
    getProduct()
  },[])

  return (
      <CartProvider>
        <Router />
      </CartProvider>
  )
}

export default App;
