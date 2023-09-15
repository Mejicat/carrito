import {getDocs, collection, query, where, getDoc, limit, doc, Timestamp, writeBatch, documentId, addDoc} from 'firebase/firestore'
import { db } from "../../firebase/client"
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { async } from '@firebase/util'

const Checkout = () => {
    const [loading,setLoading] = useState(false)
    const [orderid,setOrderid] = useState('')

    const { cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name,phone,email}) => {
        setLoading(true)
        console.log(total);
        if (typeof total !== "number" || isNaN(total)) {
            console.error("El total no es un número válido")
            setLoading(false)
            return
          }

        try {
            const objOrder = {
                buyer: {
                    name,phone,email
                },
                items:cart,
                total:total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db,"products")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),"in",ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderid(orderAdded.id)
                clearCart()
            }else{
                console.error("Hay productos sin stock")
            } 

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Su orden se encuentra en generación</h1>
    }

    if(orderid) {
        return <h1>El ID de su orden es: {orderid}</h1>
    }

    return (
        <div>
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout