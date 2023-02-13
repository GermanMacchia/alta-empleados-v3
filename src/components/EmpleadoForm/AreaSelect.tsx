import { FC, useEffect, useState } from 'react'
import { styles } from './styles'
import { useFormContext } from 'react-hook-form'
import { useEmpleadoForm } from '../../hooks'
import { Area } from '../../interfaces'
import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

interface Props {
  trigger?: boolean
  isDisabled?: boolean
  initialValue?: string
}

export const AreaSelect: FC<Props> = ({
  trigger,
  isDisabled,
  initialValue = '',
}) => {
  const { areas: listaAreas } = useEmpleadoForm()
  const [area, setArea] = useState(initialValue)
  const {
    register,
    setError,
    formState: { errors, isSubmitted },
  } = useFormContext()

  const handleChange = (event: SelectChangeEvent) => {
    setArea(event.target.value)
  }

  useEffect(() => {
    if (isSubmitted && area === '') {
      setError('area', { type: 'custom', message: 'requerido' })
    }
    setArea('')
  }, [trigger])

  return (
    <FormControl
      variant='standard'
      color='success'
      sx={{ minWidth: 120 }}
      size='medium'>
      <Select
        disabled={isDisabled}
        MenuProps={styles.container.form.select.__menuprops}
        {...register('area', { required: 'requerido' })}
        sx={{ color: area ? '#242424' : 'grey' }}
        variant='standard'
        color='success'
        onChange={handleChange}
        defaultValue={''}
        value={initialValue}
        displayEmpty>
        <MenuItem value='' disabled>
          {initialValue
            ? listaAreas
                .find((area: any) => area._id === initialValue)
                ?.nombre.toUpperCase()
            : 'Área'}
        </MenuItem>
        {listaAreas &&
          listaAreas.map((area: Area) => (
            <MenuItem key={area._id} value={area._id}>
              {area.nombre.toUpperCase()}
            </MenuItem>
          ))}
      </Select>
      {errors.area && (
        <Typography
          variant='caption'
          sx={{
            position: 'absolute',
            margin: { xs: '-3.5vh 0vw', md: '-4.5vh 0vw' },
            right: 0,
          }}
          color='#fc746d'
          className='errorText'>
          {(errors as any).area.message}
        </Typography>
      )}
    </FormControl>
  )
}
