import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import { InputSearch } from './InputSearch'
import { Drawer } from '@mui/material'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const styles = {
  drawer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
    box: {
      display: 'flex',
      justifyContent: 'flex-end',
      inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '5px 0',
        '& .MuiPaper-elevation': {
          height: '42px',
          borderRadius: '20px',
          border: '1px solid grey',
        },
      },
    },
  },
}
export const SearchDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <SearchIcon />
      </IconButton>
      <Drawer
        anchor={'top'}
        open={isOpen}
        variant='temporary'
        PaperProps={{
          style: {
            borderBottom: '5px solid #496662',
            height: 135,
          },
        }}
        onClose={toggleDrawer}>
        <Box sx={styles.drawer}>
          <InputSearch handleChange={() => {}} />
          {/* <IconButton
            sx={{ marginRight: 1, justifySelf: 'right' }}
            onClick={toggleDrawer}>
            <CloseIcon color='error' />
          </IconButton> */}
        </Box>
      </Drawer>
    </>
  )
}
