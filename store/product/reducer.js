import { ADD_NUMBER } from "./action"


const initState = {
    total: 10,
    current: 8
}

function reducer(totalReducer = initState, action) {
    switch (action.type) {
      case ADD_NUMBER:
        return {
            ...totalReducer,
            total:totalReducer.total+action.payload
        }
      
      default:
        return totalReducer
    }
  }
  
  export default reducer