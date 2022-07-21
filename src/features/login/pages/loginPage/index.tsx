import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Layout } from '~/features/ui/components/Layout'

import {
  ButtonWrapper,
  Container,
  ErrorMessage,
  StyledH1,
  Wrapper,
} from './styled'

import { useUserContext } from '../../contexts/userContext'
import { withPublicRoute } from '../../hocs/withPublicRoute'
import { useLogin } from '../../hooks/useLogin'

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

  const { mutate, isLoading } = useLogin()
  const router = useRouter()
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { handleLogout } = useUserContext()

  useEffect(() => {
    if (router.query?.from === 'unauthorized') {
      handleLogout()
    }
  }, [handleLogout, router.query?.from])

  const loginHandler = (data: LoginInputs) => {
    // Only submit in case of no errors.
    if (!errors.username && !errors.password) {
      // setIsSubmitting(true)
      mutate(data, {
        onSuccess: async () => {
          await router.push('/')
        },
        onError: (error) => {
          setSubmitError(error.message)
        },
      })
    }
  }
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Card>
            <CardContent>
              <StyledH1>Log In</StyledH1>
              {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
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
                  <Button
                    variant="contained"
                    size="small"
                    type="submit"
                    disabled={isLoading}
                  >
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

export const PublicLoginPage = withPublicRoute(LoginPage)
