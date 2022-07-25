import React from 'react'

import CartLogo from '../../assets/logo-pedidos.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart () {
  return (
  <Container>
    <CartImg src={CartLogo} alt="cart-logo"/>
    <Wrapper>
    <CartItems/>
    <CartResume/>
    </Wrapper>
  </Container>
  )
}
