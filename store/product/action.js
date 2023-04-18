export const ADD_NUMBER = 'ADD_NUMBER'


export function actAddNumber(index) {
    return {
      type: ADD_NUMBER,
      payload: index
    }
  }