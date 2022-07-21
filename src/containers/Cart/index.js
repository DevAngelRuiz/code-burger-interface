import React from 'react'

import CartLogo from '../../assets/logo-pedidos.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './styles'

export function Cart () {
  return (
  <Container>
    <CartImg src={CartLogo} alt="cart-logo"/>
    <CartItems/>
  </Container>
  )
}
