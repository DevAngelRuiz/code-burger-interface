import React from 'react'
import { useForm } from 'react-hook-form' // usando essa biblioteca (react hook form) para facilitar a utilização de formularios, e deixar mais rapida a aplicação sem usar hooks...
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-burger.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

function Login () {
  const { putUserData, userData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 dígitos')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a) 😍🍔',
        error: 'Verifique seu e-mail e/ou senha 🤯'
      }
    )
    putUserData(data)
    console.log(userData)
  }
  return (
    <Container>
        <LoginImage src={LoginImg} alt="imagem-burger-login" />
        <ContainerItens>
            <img src={Logo} alt="logo-code-burger" />
            <h1>Login</h1>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Email</Label>
                <Input type="email" {...register('email')} error={errors.email?.message} />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                <Label>Senha</Label>
                <Input type="password" {...register('password')} error={errors.password?.message} />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>

                <Button type="submit" style={{ marginTop: 50 }} >Entrar</Button>
            </form>
            <SignInLink>
                Não possui conta? <Link style={{ color: 'white' }} to="/cadastro">Cadastre já</Link>
            </SignInLink>

        </ContainerItens>

    </Container>

  )
}

export default Login
