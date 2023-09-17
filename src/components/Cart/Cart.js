import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import  CartItem  from "../CartItem/CartItem"
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

  

    if (totalQuantity === 0) {
        return (
            <div className={styles['cart-container']}>
                <h1 className={styles['empty-cart-message']}>No hay productos en el carrito</h1>
                <Link to ='/' className={styles['products-link']}>Volver a la página de productos</Link>
            </div>
        )
    }

    if (isNaN(total) || total <= 0) {
        return (
            <div className={styles['cart-container']}>
                <h1 className={styles['empty-cart-message']}>El carrito está vacío o el total es inválido.</h1>
                <Link to='/' className={styles['products-link']}>Volver a la página de productos</Link>
            </div>
        )
    }

    return (
        <div className={styles['cart-container']}>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => clearCart()} className={styles['clear-cart-button']}>Vaciar carrito</button>
            <Link to ='/checkout' className={styles['checkout-link']}>Checkout</Link>
        </div>
    )
}

export default Cart