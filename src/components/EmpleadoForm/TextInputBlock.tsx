import { FC } from 'react'
import { Input } from '../../shared'
import { Label, styles } from './styles'
import { Box, Typography } from '@mui/material'

interface Props {
  nombreActivo?: boolean
  apellidoActivo?: boolean
  descripcionActiva?: boolean
}

export const TextInputBlock: FC<Props> = ({
  nombreActivo,
  apellidoActivo,
  descripcionActiva,
}) => {
  return (
    <Box sx={styles.container.form}>
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
          disabled={nombreActivo}
          name='nombre'
          rules={{
            required: 'requerido',
            pattern: {
              value: /\w/g,
              message: 'Solo se permiten letras',
            },
          }}
          placeholder='Juan'
          type='text'
        />
      </Label>
      <Label>
        <Box sx={styles.container.form.tag}>
          <Typography fontWeight={400} display={'inline-block'}>
            Apellido &nbsp;
          </Typography>
          <Typography
            fontWeight={400}
            color={'primary.main'}
            display={'inline-block'}>
            *
          </Typography>
        </Box>
        <Input
          disabled={apellidoActivo}
          name='apellido'
          rules={{
            required: 'requerido',
            pattern: {
              value: /\w/g,
              message: 'Solo se permiten letras',
            },
          }}
          placeholder='Gómez'
          type='text'
        />
      </Label>
      <Label>
        <Box sx={styles.container.form.tag}>
          <Typography fontWeight={400} display={'inline-block'}>
            Descripción &nbsp;
          </Typography>
          <Typography
            fontWeight={400}
            color={'primary.main'}
            display={'inline-block'}>
            *
          </Typography>
        </Box>
        <Input
          disabled={descripcionActiva}
          name='descripcion'
          rules={{
            required: 'requerido',
            pattern: {
              value: /\w/g,
              message: 'Solo se permiten letras',
            },
          }}
          placeholder='Desarrollo Cloud'
          type='text'
        />
      </Label>
    </Box>
  )
}
