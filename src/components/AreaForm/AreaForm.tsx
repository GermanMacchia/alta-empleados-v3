import { FC, useEffect } from 'react'
import { styles } from './styles'
import {
  Typography,
  Box,
  CircularProgress,
  Button,
  Container,
} from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { AreaInput } from './AreaInput'

interface Props {
  isLoading: boolean
}

export const AreaForm: FC<Props> = ({ isLoading }) => {
  const { reset } = useFormContext()

  useEffect(() => {
    if (!isLoading) reset()
  }, [isLoading])

  return (
    <Container sx={styles.container} maxWidth='sm'>
      <Box>
        <Typography sx={styles.container.title}>Alta Área</Typography>
        <Typography variant='caption'>Defina una nueva área</Typography>
      </Box>
      <AreaInput />
      <Button
        variant='contained'
        type='submit'
        disableElevation
        sx={styles.container.submit}>
        {isLoading ? <CircularProgress /> : 'Enviar'}
      </Button>
    </Container>
  )
}
