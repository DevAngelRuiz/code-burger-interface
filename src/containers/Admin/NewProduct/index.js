import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import api from '../../../services/api'
import { Container, Input, Label, ButtonStyles, LabelUpload } from './styles'

function NewProduct () {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { register, handleSubmit } = useForm()
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
            <form>
                <Label>Nome</Label>
                <Input type='text' {...register('name')} />

                <Label>Preço</Label>
                <Input type='number' {...register('price')} />

                <LabelUpload>
                    { fileName || (
                        <>
                        <CloudUploadIcon/>
                        Upload Imagem
                        </>)}
                    <input
                        type='file' accept='image/png, image/jpg'
                        {...register('file')}
                        onChange={value => {
                          setFileName(value.target.files[0]?.name)
                        }} />
                </LabelUpload>

                <ReactSelect
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Categorias'/>
                <ButtonStyles>Adicionar Produto</ButtonStyles>
            </form>
        </Container>

  )
}
export default NewProduct
