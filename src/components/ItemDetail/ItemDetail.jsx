import { useContext, useState } from 'react';
import styles from './styles.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail ({detail}) {

    const [quantityAdded, setQuantityAdded] = useState (0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id: detail.id,
            name: detail.name,
            price: detail.price,
        }

        addItem(item, quantity)
    }

    return (
        <div className={styles['container_item']}>
            <p className={styles['body_item']}>{detail.name}</p>
            <img src={detail.image} className={styles['imagen_item']} alt={detail.name} />
            <p className={styles['body_item']}>{detail.description}</p>
            <p className={styles['body_item']}>Precio ${detail.price}</p>
            <footer className='Terminar_compra'>
            {
                quantityAdded > 0 ? (
                    
                    <Link to="/cart">Finalizar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={detail.stock} onAdd = {handleOnAdd}/>
                )
            }
            </footer>
        </div>
    )
}