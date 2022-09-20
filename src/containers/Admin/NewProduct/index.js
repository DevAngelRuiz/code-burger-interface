import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Input, Label, ButtonStyles, LabelUpload } from './styles'

function NewProduct () {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Escolha uma imagem', value => {
      return value && value.length > 0
    })
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = data => console.log(data)

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
            <Input type='text' {...register('name')} />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </div>
            <div>
            <Label>Preço</Label>
            <Input type='number' {...register('price')} />
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
                render={({ field }) => {
                  return (
                        <ReactSelect
                            {...field}
                            options={categories}
                            getOptionLabel={cat => cat.name}
                            getOptionValue={cat => cat.id}
                            placeholder='Categorias'
                        />
                  )
                }}
            ></Controller>
            <ErrorMessage>{errors.category?.message}</ErrorMessage>
            </div>

            <ButtonStyles>Adicionar Produto</ButtonStyles>
        </form>
    </Container>

  )
}
export default NewProduct
