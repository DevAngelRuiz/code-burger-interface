import React from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import { CategoryCarousel, Header, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'
export function Home () {
  return (
  <Container>
    <Header/>
    <HomeImg src={HomeLogo} alt="home-logo"/>
    <CategoryCarousel/>
    <OffersCarousel/>
  </Container>
  )
}
