import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProduct, Header } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'

export function Products () {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]) // usa-se muito o useState para poder trocar algo em tempo real
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data] // acrescentando a opção TODOS no menu

      setCategories(newCategories)
    }

    async function loadProducts () {
      const { data: allProducts } = await api.get('products')
      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products) // mostrando todos os produtos na opção 'todos' do menu.
    } else {
      const newFilteredProducts = products.filter(product => product.category_id === activeCategory)
      setFilteredProducts(newFilteredProducts) // mostra produtos por categoria
    }
  }, [activeCategory, products])

  return (

  <Container>
  <Header/>
    <ProductsImg src={ProductsLogo} alt="products-logo"/>
    <CategoriesMenu>
    { categories && categories.map(category => (
        <CategoryButton type='button' key={category.id}
        isActiveCategory={ activeCategory === category.id} // mudar a cor da opção selecionada no menu.
         onClick={() => { setActiveCategory(category.id) }}
        >{category.name}</CategoryButton>
    ))}
    </CategoriesMenu>
    <ProductsContainer>
        { filteredProducts && products.map(product => (
            <CardProduct key={product.id} product={product}/>
        ))}

    </ProductsContainer>

  </Container>

  )
}
