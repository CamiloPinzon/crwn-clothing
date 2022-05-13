import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles';

const CartIcon = () =>{
    const { setIsCartOpen, cartCount } = useContext(CartContext);

    return(
        <CartIconContainer onClick={setIsCartOpen}>
            <ShoppingIcon />
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;