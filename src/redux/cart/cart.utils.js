export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check duplicate id of item
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    // if exist
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
            // recheck then adding quantity or if not found then return as array
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }

    // if no item id within cartItems then add cart item to add with quantity 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}