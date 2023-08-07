import styles from './styles.module.css'
import carrito from '../../multimedia/carrito.png'

const CartWidget = () => {

    return (
        <div>
            <img src={carrito} className={styles['carrito']} alt="Imagen carrito de compra" />
            <p>1</p>

        </div>
    )
}

export default CartWidget
