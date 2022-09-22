import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Input, Label, ButtonStyles, LabelUpload, ContainerOffer } from './styles'

function EditProduct () {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const { state: { product } } = useLocation()
  //   //   const { navigate, location: { state: { product } } } = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool()
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category_id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
      pending: 'Editando novo produto...',
      success: 'Produto editado com sucesso!',
      error: 'Algo deu errado'
    })
    setTimeout(() => {
      navigate.push(paths.ProductsList)
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>
                <div>
                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} defaultValue={product.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>
                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Upload Imagem
                            </>)}
                        <input
                            type='file' accept='image/png, image/jpg'
                            {...register('file')}
                            onChange={value => {
                              setFileName(value.target.files[0]?.name)
                            }} />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>
                <div>
                    <Controller
                        name='cateogry'
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                          return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='Categorias'
                                    defaultValue={product.category}
                                />
                          )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>
                <ContainerOffer>
                    <input type='checkbox' {...register('offer')} defaultChecked={product.offer} />
                </ContainerOffer>
                <Label>Produto em Oferta?</Label>
                <ButtonStyles>Editar Produto</ButtonStyles>
            </form>
        </Container>

  )
}
export default EditProduct
