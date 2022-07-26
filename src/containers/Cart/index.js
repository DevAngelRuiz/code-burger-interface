import React from 'react'

import CartLogo from '../../assets/logo-pedidos.svg'
import { CartItems, CartResume, Header } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart () {
  return (
  <Container>
    <Header/>
    <CartImg src={CartLogo} alt="cart-logo"/>
    <Wrapper>
    <CartItems/>
    <CartResume/>
    </Wrapper>
  </Container>
  )
}
