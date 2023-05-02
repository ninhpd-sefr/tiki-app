import { ADD_LOVE_PRODUCT_TO_LOVE, ADD_NUMBER, ADD_PRODUCT_TO_CART, CLEAR_CART, REMOVE_PRODUCT_TO_CART } from "./action"
const item4 = require('../../assets/4.jpg')

const initState = {
  total: 10,
  cart: [
    {
      title: "Iphone 12 Promax - chính hãng",
      deliverySpeed: "FAST",
      delivery: "Giao tiết kiệm",
      number: 2,
      price: "150.000",
      oldPrice: "200.000",
      img: item4
    }
  ],
  love:[
    {
      title: "Iphone 12 Promax - chính hãng",
      deliverySpeed: "FAST",
      delivery: "Giao tiết kiệm",
      number: 2,
      price: "150.000",
      oldPrice: "200.000",
      img: item4
    }
  ]
}

function reducer(cartReducer = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...cartReducer,
        total: cartReducer.total + action.payload
      }

    // CART
    case ADD_PRODUCT_TO_CART:
      console.log('da goi reducer');

      return {
        ...cartReducer,
        cart: [
          ...cartReducer.cart,
          action.payload
        ]
      }

    case REMOVE_PRODUCT_TO_CART:
      console.log('da goi REMOVE_PRODUCT_TO_CART');
      const cartCurrent = cartReducer.cart
      const number = Number(action.payload)
      cartCurrent.splice(0,1)
      return {
        ...cartReducer,
        cart: cartCurrent
      }

      case CLEAR_CART:
      console.log('da goi CLEAR_CART');
      return {
        ...cartReducer,
        cart: []
      }

    // LOVE
    case ADD_LOVE_PRODUCT_TO_LOVE:
      console.log('da goi reducer');

      return {
        ...cartReducer,
        love: [
          ...cartReducer.love,
          action.payload
        ]
      }


    default:
      return cartReducer
  }
}

export default reducer