export const ADD_NUMBER = 'ADD_NUMBER'
export const ADD_PRODUCT_TO_CART ='ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_TO_CART ='REMOVE_PRODUCT_TO_CART'
export const CLEAR_CART ='CLEAR_CART'
export const ADD_LOVE_PRODUCT_TO_LOVE = 'ADD_LOVE_PRODUCT_TO_LOVE'



export function actAddNumber(index) {
  return {
    type: ADD_NUMBER,
    payload: index
  }
}

// CART

export function actAddProductToCart(product) {
  console.log('da goi actAddProductToCart');
  
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
}

export function actRemoveProductToCart(index) {
  console.log('da goi actRemoveProductToCart');
  
  return {
    type: REMOVE_PRODUCT_TO_CART,
    payload: index
  }
}

export function actClearCart() {
  console.log('da goi actClearCart');
  
  return {
    type: CLEAR_CART,
    payload: ''
  }
}

// LOVE

export function actLoveProductToLove(product) {
  console.log('da goi actLoveProductToLove');
  
  return {
    type: ADD_LOVE_PRODUCT_TO_LOVE,
    payload: product
  }
}