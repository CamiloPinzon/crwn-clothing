import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext);

    return(
        <div>
            {
                cartItems.map((cartItem) => {
                    return(
                        <div>
                            <h2>{cartItem.name}</h2>
                            <span>decrement</span>
                            <br />
                            <span>{cartItem.quantity}</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Checkout;