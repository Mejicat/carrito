import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log (cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(prevTotal => prevTotal + quantity)
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        const removedProduct = cart.find(prod => prod.id === itemId);
        if (removedProduct) {
            setTotalQuantity(prevTotal => prevTotal - removedProduct.quantity)
        }
        setCart (cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const total = cart.reduce((accumulator, product) => {
        return accumulator + (product.price * product.quantity)
    }, 0)

    return (
        <CartContext.Provider value={{cart,totalQuantity,addItem,removeItem,clearCart, total}}>
            {children}
        </CartContext.Provider>
    )
}