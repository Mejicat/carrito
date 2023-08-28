import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";

export default function ItemDetailContainer () {
    const [detail, setDetail] = useState ({})
    const { id } = useParams ()

    useEffect(()=> {
        const getProduct = async () => {
            const response = await fetch ('/data/products.js')
            const products = await response.json ()
    
            const filteredProduct = products.find(product => product.id === parseInt(id))
    
            setDetail(filteredProduct)
        }
        getProduct ()
    }, [id])

    return (
        <ItemDetail detail={detail}/>
    )
}