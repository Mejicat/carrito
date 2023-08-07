import styles from './styles.module.css';

const ItemListContainer = ({ greeting }) => {

    return (
        <div className={styles['item-list-container']}>
            <h1> {greeting} </h1>
            
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                    Escala hasta 1:70
                </a>
                <a href="#" className="list-group-item list-group-item-action">Hot Wheels</a>
                <a href="#" className="list-group-item list-group-item-action">Maisto</a>
                <a href="#" className="list-group-item list-group-item-action">Monster Jam</a>
            </div>
        </div>
    )
}

export default ItemListContainer