import { createSelector } from 'reselect';

// 2. Then declared as "state" after that select cart prop
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  // example of passing to selector
  // 1. passed through [selectCart]
  [selectCart],
  // 3. return of step 2, is select cartItems within cart
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  // 4. select selectCartitems's cartItems (from line 11)
  [selectCartItems],
  // 5. then passing below to get return of reduce val,
  //    later passed as itemCount value in cart-icon
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
