import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/offer.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  OffersImg,
  ContainerItems,
  Image,
  Button
} from './styles'
// pra suar uma api, precisa usar async await. Porém no useEffect não pode ser direto, criar uma função dentro com async await.
function OffersCarousel () {
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers () {
      const { data } = await api.get('products')
      const onlyOffers = data.filter(product => product.offer).map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
  <Container>
    <OffersImg src={Offers} alt="offers-title"/>
    <Carousel itemsToShow={5}
    style ={{ width: '90%' }}
    breakPoints={breakPoints} >

        {offers && offers.map(product => (
                <ContainerItems key={product.id}>
                    <Image src={product.url} alt="photo-product"/>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <Button>Peça Agora!</Button>

                </ContainerItems>
        ))}

    </Carousel>
  </Container>
  )
}

export default OffersCarousel
