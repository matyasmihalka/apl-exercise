import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Layout } from '~/features/ui/components/Layout'

import { ButtonWrapper, Container, StyledH1, Wrapper } from './styled'

const LogInSchema = yup
  .object({
    username: yup.string().min(3).required(),
    password: yup.string().min(8).required(),
  })
  .required()

type LoginInputs = yup.InferType<typeof LogInSchema>

function capitalizeFirstLetter(string: string | undefined) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return ''
}

export const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(LogInSchema),
  })

  const loginHandler = (data: LoginInputs) => {
    console.log(data)
  }
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Card>
            <CardContent>
              <StyledH1>Log In</StyledH1>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form onSubmit={handleSubmit(loginHandler)} noValidate>
                <TextField
                  {...register('username')}
                  id="username"
                  label="Username"
                  variant="outlined"
                  sx={{ width: '100%', marginBottom: '1.6rem' }}
                  type="text"
                  error={!!errors.username}
                  helperText={capitalizeFirstLetter(errors?.username?.message)}
                />
                <TextField
                  {...register('password')}
                  id="password"
                  label="Password"
                  variant="outlined"
                  sx={{ width: '100%', marginBottom: '2.4rem' }}
                  type="password"
                  error={!!errors.password}
                  helperText={capitalizeFirstLetter(errors?.password?.message)}
                />
                <ButtonWrapper>
                  <Button variant="contained" size="small" type="submit">
                    Log In
                  </Button>
                </ButtonWrapper>
              </form>
            </CardContent>
          </Card>
        </Wrapper>
      </Container>
    </Layout>
  )
}
