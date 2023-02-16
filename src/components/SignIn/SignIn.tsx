import { Button, Box, Typography, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router'
import { Label, styles } from './styles'
import { Input } from '../../shared'
import googleIcon from '../../assets/googlelogo_icon.svg'
import { useAuthForm } from '../../hooks/useAuthForm'

interface Props {
  isLoading: boolean
}
export const SignIn = ({ isLoading }: Props) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('user')
  const { loginWithGoogle, isLoadingGoogle } = useAuthForm()

  if (token) return <></>

  return (
    <Box sx={styles.container}>
      <Typography variant='h4' color='#2d306d'>
        Sign In
      </Typography>
      <Box sx={styles.container.form}>
        <Label>
          <Box sx={styles.container.form.tag}>
            <Typography fontWeight={400} display={'inline-block'}>
              Email &nbsp;
            </Typography>
            <Typography
              fontWeight={400}
              color={'primary.main'}
              display={'inline-block'}>
              *
            </Typography>
          </Box>
          <Input
            name={'email'}
            type='email'
            rules={{
              required: 'Requerido',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Requerido',
              },
            }}
            placeholder={'email@usuario.com'}
          />
        </Label>
        <Label>
          <Box sx={styles.container.form.tag}>
            <Typography fontWeight={400} display={'inline-block'}>
              Password &nbsp;
            </Typography>
            <Typography
              fontWeight={400}
              color={'primary.main'}
              display={'inline-block'}>
              *
            </Typography>
          </Box>
          <Input
            name={'password'}
            type='password'
            rules={{
              required: 'Requerido',
            }}
            placeholder={'password'}
          />
        </Label>
        <Box display='flex' flexDirection='column' gap={1}>
          <Button
            variant='contained'
            type='submit'
            disableElevation
            sx={styles.container.form.submit}>
            {isLoading ? (
              <CircularProgress sx={{ color: 'aliceblue' }} size='2rem' />
            ) : (
              'Sign In'
            )}
          </Button>
          <Button onClick={() => navigate('/registro')}>Registrate</Button>
          <Button onClick={loginWithGoogle}>
            {isLoadingGoogle ? (
              <CircularProgress color='primary' size='2rem' />
            ) : (
              <>
                Login with google{' '}
                <img
                  src={googleIcon}
                  alt='google icon'
                  style={{ margin: '0 10px' }}
                />
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
