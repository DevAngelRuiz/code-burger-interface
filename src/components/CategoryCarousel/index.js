import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import {
  Container,
  CategoryImg,
  ContainerItems,
  Image,
  Button
} from './styles'
// pra suar uma api, precisa usar async await. Porém no useEffect não pode ser direto, criar uma função dentro com async await.
function CategoryCarousel () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')
      console.log(data)

      setCategories(data)
    }
    loadCategories()
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
    <CategoryImg src={Category} alt="categories-title"/>
    <Carousel itemsToShow={5}
    style ={{ width: '90%' }}
    breakPoints={breakPoints} >

        {categories && categories.map(category => (
                <ContainerItems key={category.id}>
                    <Image src={category.url} alt="photo-category"/>
                    <Button>{category.name}</Button>
                </ContainerItems>

        ))}

    </Carousel>
  </Container>
  )
}

export default CategoryCarousel
