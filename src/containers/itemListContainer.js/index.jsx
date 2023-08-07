import { useState } from "react"
import Item from "../../components/Item"

const ItemListContainer = () => {
    const [listaDeCompras, setListaDeCompras] = useState([])
    const [input, setInput] = useState('')

    const addItem = () => {
        if(input !== '') {
        setListaDeCompras([...listaDeCompras,input])
        setInput('')
        }
    }

    const deleteItem = (nombre) => {
        const nuevaListaDeCompras = listaDeCompras.filter(pr => pr !== nombre)
        setListaDeCompras(nuevaListaDeCompras)
    }


    return (
        <div>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Guardar</button>
            {
                listaDeCompras.length > 0 ? (
                    <>
                    {listaDeCompras.map(producto => <Item nombre={producto} deleteItem={deleteItem}/>)}
                    </>
                ) : (
                    <p>No hay items listados</p>
                )
            }
        </div>
    )
}

export default ItemListContainer