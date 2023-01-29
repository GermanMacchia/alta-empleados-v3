import { FC } from 'react'
import { AreaSelect } from './AreaSelect'
import { Label, styles } from './styles'
import { Box, Typography } from '@mui/material'
import { Input } from '../../shared/Input/Input'

interface Props {
  trigger: boolean
}

export const DataInputBlock: FC<Props> = ({ trigger }) => {
  return (
    <Box sx={styles.container.form}>
      <Label>
        <Box sx={styles.container.form.tag}>
          <Typography fontWeight={400} display={'inline-block'}>
            DNI &nbsp;
          </Typography>
          <Typography
            fontWeight={400}
            color={'primary.main'}
            display={'inline-block'}>
            *
          </Typography>
        </Box>
        <Input
          name='dni'
          rules={{
            required: 'requerido',
            pattern: {
              value: /\w/g,
              message: 'Solo se permiten numeros',
            },
          }}
          placeholder='29203933'
          type='text'
        />
      </Label>
      <Label>
        <Box sx={styles.container.form.tag}>
          <Typography fontWeight={400} display={'inline-block'}>
            Fecha Nacimiento &nbsp;
          </Typography>
          <Typography
            fontWeight={400}
            color={'primary.main'}
            display={'inline-block'}>
            *
          </Typography>
        </Box>
        <Input
          name='fechaNac'
          rules={{
            required: 'requerida',
          }}
          placeholder=''
          type='date'
        />
      </Label>
      <Label>
        <Box sx={styles.container.form.tag}>
          <Typography fontWeight={400} display={'inline-block'}>
            Área &nbsp;
          </Typography>
          <Typography
            fontWeight={400}
            color={'primary.main'}
            display={'inline-block'}>
            *
          </Typography>
        </Box>
        <AreaSelect trigger={trigger} />
      </Label>
    </Box>
  )
}
