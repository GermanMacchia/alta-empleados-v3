import { Box, Checkbox, Typography } from '@mui/material'
import { ChangeEvent, FC, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  trigger?: boolean
  isDisabled?: boolean
  isChecked?: boolean
}

export const IsDevCheckbox: FC<Props> = ({
  trigger,
  isDisabled,
  isChecked = false,
}) => {
  const [checked, setChecked] = useState(false)
  const { register } = useFormContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    setChecked(isChecked)
  }, [trigger, isChecked])

  return (
    <Box width='100%' display='flex' justifyContent='space-between'>
      <Typography>Desarrollador</Typography>
      <Checkbox
        disabled={isDisabled}
        {...register('esDesarrollador')}
        sx={{ margin: 0, padding: 0 }}
        checked={checked}
        onChange={handleChange}
        color='success'
      />
    </Box>
  )
}
