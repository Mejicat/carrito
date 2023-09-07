import styles from './styles.module.css'
import carrito from '../../multimedia/carrito.png'
import Badge from 'react-bootstrap/Badge'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
            < Link to= '/cart' style = {{display: totalQuantity > 0 ? 'block' : 'none'}}>
                <img src={carrito} className={styles['carrito']} alt="Imagen carrito de compra" />
                {totalQuantity}
            </Link>
    )
}

export default CartWidget
