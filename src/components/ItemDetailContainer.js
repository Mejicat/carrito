import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { db } from "../firebase/client"
import { doc, getDoc } from "firebase/firestore"

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const { id } = useParams()
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const productRef = doc(db, "products", id)
          const productSnapshot = await getDoc(productRef)
  
          if (productSnapshot.exists()) {
            const productData = { ...productSnapshot.data(), id: productSnapshot.id }
            setDetail(productData)
          } else {
            console.error(`Product with ID ${id} not found`)
          }
        } catch (error) {
          console.error("Error fetching product:", error)
        }
      }
  
      getProduct()
    }, [id])

    return (
        <ItemDetail detail={detail}/>
    )
}