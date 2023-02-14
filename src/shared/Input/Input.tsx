import { Box, Typography, TextField } from '@mui/material/'
import { useFormContext } from 'react-hook-form'
import { FC } from 'react'
import { useMediaQuery } from '@mui/material'

interface Props {
  name: string
  rules: any
  disabled?: boolean
  placeholder: string
  type?: string
}

export const Input: FC<Props> = ({
  name,
  rules,
  placeholder,
  type = 'string',
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const matches = useMediaQuery('(min-width:600px)')

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '5px' }}>
      <TextField
        {...register(name, { ...rules })}
        type={type}
        InputProps={{
          style: {
            color: 'black',
          },
        }}
        disabled={disabled}
        variant='standard'
        placeholder={placeholder}
        color='success'
      />
      <br />
      {errors[name] && (
        <Typography
          variant='caption'
          sx={{ position: 'absolute', margin: '-45px 94px' }}
          color='#fc746d'
          className='errorText'>
          {(errors as any)[name].message}
        </Typography>
      )}
    </Box>
  )
}
