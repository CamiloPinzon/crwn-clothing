import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
// Find if contains item
const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
//If found increment quantity
if(existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
}
//Return new arry with the modifyed cart items / new cart item
return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id ? {
            ...cartItem, quantity: cartItem.quantity - 1
        } : cartItem);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setcartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>(total + cartItem.quantity), 0);
        setcartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem( cartItems, productToAdd ));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem( cartItems, cartItemToRemove ));
        console.log('test');
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}