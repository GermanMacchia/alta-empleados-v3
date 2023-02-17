import { FC } from 'react'
import { InputBase, IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { Box } from '@mui/material'

interface Props {
  handleChange: (event: any) => void
}
const styles = {
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px 0',
    '& .MuiPaper-elevation': {
      height: '42px',
      borderRadius: '20px',
      border: '1px solid grey',
    },
  },
}

export const InputSearch: FC<Props> = ({ handleChange }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Paper>
        <IconButton
          disabled
          type='button'
          aria-label='search'
          sx={{ paddingBottom: 1.5 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          inputProps={{
            style: {
              marginLeft: '10px',
            },
          }}
          placeholder='Buscar'
          onChange={handleChange}
          color='success'
        />
      </Paper>
    </Box>
  )
}
