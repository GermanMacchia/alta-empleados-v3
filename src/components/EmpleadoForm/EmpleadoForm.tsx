import { FC, useEffect, useState } from 'react'
import { Typography, Box, CircularProgress, Button } from '@mui/material'
import { Container } from '@mui/system'
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { TextInputBlock } from './TextInputBlock'
import { DataInputBlock } from './DataInputBlock'
import { IsDevCheckbox } from './IsDevCheckbox'

interface Props {
  isLoading: boolean
}

export const EmpleadoForm: FC<Props> = ({ isLoading }) => {
  const { register, reset } = useFormContext()
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setTrigger(!trigger)
      reset()
    }
  }, [isLoading])

  return (
    <Container sx={styles.container} maxWidth='sm'>
      <Box
        display='flex'
        alignItems='flex-start'
        justifyContent='space-between'></Box>
      <Box sx={styles.container.form}>
        <input {...register('formType')} type='hidden' value='AltaEmpleado' />
        <Box sx={styles.container.form.inputData}>
          <TextInputBlock />
          <DataInputBlock trigger={trigger} />
        </Box>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='space-between'>
          <IsDevCheckbox trigger={trigger} />
          <Button
            variant='contained'
            type='submit'
            disableElevation
            sx={styles.container.form.submit}>
            {isLoading ? <CircularProgress /> : 'Enviar'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
