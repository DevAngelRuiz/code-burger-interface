import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id) // função para nao repetir produtos, apenas aumentar a quantidade

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts))
  }
  // o useEffect faz o load dos produtos no carrinho (armazena no localStorage)
  useEffect(() => {
    const loadUserData = async () => {
      const clientCardData = await localStorage.getItem('codeburger:cartInfo')
      if (clientCardData) {
        setCartProducts(JSON.parse(clientCardData))
      }
    }
    loadUserData()
  }, [])

  return (
        <CartContext.Provider value={{ putProductInCart, cartProducts }}>
            {children}
        </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext ')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
