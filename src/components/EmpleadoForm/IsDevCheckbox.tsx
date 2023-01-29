import { Box, Checkbox, Typography } from '@mui/material'
import { ChangeEvent, FC, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  trigger: boolean
}

export const IsDevCheckbox: FC<Props> = ({ trigger }) => {
  const [checked, setChecked] = useState(false)
  const { register } = useFormContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    setChecked(false)
  }, [trigger])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Typography>Desarrollador</Typography>
      <Checkbox
        {...register('esDesarrollador')}
        checked={checked}
        onChange={handleChange}
        sx={{ color: 'grey' }}
        color='success'
      />
    </Box>
  )
}
