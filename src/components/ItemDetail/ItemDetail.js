import styles from './styles.module.css';

export default function ItemDetail ({detail}) {
    return (
        <div className={styles['container_item']}>
            <p className={styles['body_item']}>{detail.name}</p>
            <img src={detail.image} className={styles['imagen_item']} alt={detail.name} />
            <p className={styles['body_item']}>{detail.description}</p>
            <p className={styles['body_item']}>Precio ${detail.price}</p>
        </div>
    )
}