import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoriesMenu } from './styles'

function Products () {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data] // acrescentando a opção TODOS no menu

      setCategories(newCategories)
    }
    loadCategories()
  }, [])
  return (
  <Container>
    <ProductsImg src={ProductsLogo} alt="products-logo"/>
    <CategoriesMenu>
    { categories && categories.map(category => (
        <CategoryButton type='button' key={category.id}
        isActiveCategory={ activeCategory === category.id} // mudar a cor da opção selecionada no menu.
         onClick={() => { setActiveCategory(category.id) }}
        >{category.name}</CategoryButton>
    ))}
    </CategoriesMenu>
  </Container>
  )
}

export default Products
