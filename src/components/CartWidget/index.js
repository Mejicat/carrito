import styles from './styles.module.css'
import carrito from '../../multimedia/carrito.png'
import Badge from 'react-bootstrap/Badge'

const CartWidget = () => {

    return (
        <div>
            <img src={carrito} className={styles['carrito']} alt="Imagen carrito de compra" />
            <Badge bg="secondary">1</Badge>

        </div>
    )
}

export default CartWidget
