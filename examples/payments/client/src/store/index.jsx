// 1. createContex
import { createContext, useContext, useState, useReducer } from 'react'

// 2. crear el contexto
const AppContext = createContext()

const initialState = {
  products: [],
  cart: [],
  total: 0,
  isLoading: false,
  error: null,
}

function reducer(state, action) {

  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      products: action.payload
    }
  }

  if (action.type === 'ADD_TO_CART') {
    const newProduct = action.payload
    // const newCart = state.cart.concat(newProduct)
    const newCart = [...state.cart, newProduct]
    const total = newCart.reduce((acc, curr) => {
      return acc + curr.price
    }, 0)

    return {
      ...state,
      cart: newCart,
      total,
    }
  }

  return state
}

// 4. crear el provider
export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const store = {
    state,
    dispatch,
  }

  return (
    <AppContext.Provider value={store}>
      { children }
    </AppContext.Provider>
  )
}

// 5. crear un custom Hook para el consumer
export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }

  return context
}

// 3. export
export default AppContext
