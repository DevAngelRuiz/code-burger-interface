import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CancelIcon from '@mui/icons-material/Cancel'
import VerifiedIcon from '@mui/icons-material/Verified'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIconStyle } from './styles'

function ListOfProducts () {
  const [products, setProducts] = useState([])
  const { navigate } = useNavigate()
  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer (offerStatus) {
    if (offerStatus) {
      return <VerifiedIcon style={{ color: '#9758A6' }}/>
    }
    return <CancelIcon/>
  }

  function editProduct (product) {
    navigate(paths.EditProduct, { product })
  }
  return (
    <Container>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Preço</TableCell>
          <TableCell align= 'center'>Produto em Oferta</TableCell>
          <TableCell></TableCell>
          <TableCell>Editar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products && products.map((product) => (
          <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {product.name}
            </TableCell>
            <TableCell>{formatCurrency(product.price)}</TableCell>
            <TableCell align= 'center'>{isOffer(product.offer)}</TableCell>
            <TableCell><Img src={product.url} alt='imagem-produto'/></TableCell>
            <TableCell>
                <EditIconStyle onClick={() => editProduct(product)} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Container>

  )
}
export default ListOfProducts
