import React from 'react'

import CartImage from '../../assets/cart-logo.svg'
import PersonImage from '../../assets/profile-logo.svg'
import { Container, ContainerLeft, PageLink, ContainerRight, ContainerText, Line, PageLinkExit } from './styles'

export function Header () {
  return (
        <Container>
            <ContainerLeft>
                <PageLink>
                    Home
                </PageLink>
                <PageLink>
                    Ver Produtos
                </PageLink>

            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={CartImage} alt='carrinho' />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={PersonImage} alt='profile' />
                </PageLink>
                <ContainerText>
                <p>Olá, Angélica</p>
                <PageLinkExit>Sair</PageLinkExit>
            </ContainerText>
            </ContainerRight>

        </Container>
  )
}
