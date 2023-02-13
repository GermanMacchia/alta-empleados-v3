import { FC } from 'react'
import { Label, styles } from './styles'
import { Input } from '../../shared'
import { Typography, Box } from '@mui/material/'
import { useFormContext } from 'react-hook-form'

interface Props {
  active?: boolean
}

export const AreaInput: FC<Props> = ({ active }) => {
  const { register } = useFormContext()

  return (
    <Box sx={styles.container.form}>
      <input {...register('formType')} type='hidden' value='AltaArea' />
      <Label>
        <Box sx={styles.container.form.tag}>
          <Typography fontWeight={400} display={'inline-block'}>
            Nombre &nbsp;
          </Typography>
          <Typography
            fontWeight={400}
            color={'primary.main'}
            display={'inline-block'}>
            *
          </Typography>
        </Box>
        <Input
          name='nombre'
          disabled={active}
          rules={{
            required: 'requerido',
            pattern: {
              value: /\w/g,
              message: 'Solo se permiten letras',
            },
          }}
          placeholder='Administración'
          type='text'
        />
      </Label>
    </Box>
  )
}
