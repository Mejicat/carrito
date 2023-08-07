import styles from './styles.module.css'

const Item = ({nombre,deleteItem}) => {

    return(
        <div className={styles['contenedor']}>
            <p>{nombre}</p>
            <button onClick={() => deleteItem(nombre)}>Borrar</button> 
        </div>
    )
}

export default Item;