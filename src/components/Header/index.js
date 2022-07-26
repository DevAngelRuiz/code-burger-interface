import React from 'react'
import { useNavigate } from 'react-router-dom'

import CartImage from '../../assets/cart-logo.svg'
import PersonImage from '../../assets/profile-logo.svg'
import { useUser } from '../../hooks/UserContext'
import { Container, ContainerLeft, PageLink, ContainerRight, ContainerText, Line, PageLinkExit } from './styles'

export function Header () {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  //   const { navigate, location:  (pathname) } = useNavigate()
  //   isActive={pathname === '/'}
  //   isActive={pathname.includes('produtos')}
  return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => navigate('/')} >
                    Home
                </PageLink>
                <PageLink onClick={() => navigate('/produtos')} >
                    Ver Produtos
                </PageLink>

            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => navigate('/carrinho')}>
                    <img src={CartImage} alt='carrinho' />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={PersonImage} alt='profile' />
                </PageLink>
                <ContainerText>
                <p>Olá, {userData.name}</p>
                <PageLinkExit onClick={logoutUser} >Sair</PageLinkExit>
            </ContainerText>
            </ContainerRight>

        </Container>
  )
}
