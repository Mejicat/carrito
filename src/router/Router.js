import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

export default function Router () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element = {<ItemListContainer/>} />
                <Route path='/category/:id' element = {<ItemListContainer/>} />
                <Route path='/item/:id' element = {<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}