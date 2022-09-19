import React, { useEffect } from 'react'
import ReactSelect from 'react-select'

import { Button } from '../../../components'
import api from '../../../services/api'
import { Container, Input, Label } from './styles'

function NewProduct () {
  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('products')
    }

    loadOrders()
  }, [])

  return (
        <Container>
            <Label>Nome</Label>
            <Input />
            <Label>Preço</Label>
            <Input />
            <Label>Upload Imagem</Label>
            <Input />

            <ReactSelect />
           <Button>Adicionar Produto</Button>

        </Container>

  )
}
export default NewProduct
