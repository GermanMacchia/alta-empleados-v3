import IconButton from '@mui/material/IconButton/IconButton'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { styles } from './styles'
import { Empleado } from '../../interfaces'
import { FC, useState } from 'react'
import { CircularProgress, Box, Avatar } from '@mui/material'
import { useAvatar } from '../../hooks/useAvatar'

interface Actions {
  handler: (event: any) => void
  deleter?: () => void
}

const OptionButtons: FC<Actions> = ({ handler, deleter }) => {
  return (
    <Box display='flex' sx={styles.imageContainer.avatarChange}>
      <IconButton
        onClick={deleter}
        sx={{
          ...styles.imageContainer._deletePicture,
        }}
        aria-label='delete picture'>
        <HighlightOffIcon />
      </IconButton>
      <IconButton
        aria-label='upload picture'
        component='label'
        sx={{
          ...styles.imageContainer._addPicture,
        }}>
        <input hidden accept='image/*' type='file' onChange={handler} />
        <ChangeCircleIcon />
      </IconButton>
    </Box>
  )
}

const AddAvatar: FC<Actions> = ({ handler }) => {
  return (
    <IconButton
      aria-label='upload picture'
      component='label'
      sx={{ color: 'white' }}>
      <input hidden accept='image/*' type='file' onChange={handler} />
      <AddAPhotoIcon
        sx={{ fontSize: '50px', ...styles.imageContainer._addPicture }}
      />
    </IconButton>
  )
}

interface Props {
  empleado: Empleado
}

export const AvatarContainer: FC<Props> = ({ empleado }) => {
  const [change, setChange] = useState(false)
  const { avatar, isLoading, handleNewAvatar, preview, deleteAvatar } =
    useAvatar(empleado._id as string)

  const handleChangeAvatar = (event: any) => {
    setChange(true)
    handleNewAvatar(event, empleado)
  }

  return (
    <>
      {(avatar || isLoading) && !change ? (
        <>
          {avatar && (
            <OptionButtons
              handler={handleChangeAvatar}
              deleter={deleteAvatar}
            />
          )}
          <Avatar
            variant='circular'
            src={avatar && avatar!.url}
            sx={styles.imageContainer.avatar}>
            {isLoading && <CircularProgress thickness={4} color='success' />}
          </Avatar>
        </>
      ) : (
        <>
          {preview && (
            <OptionButtons
              handler={handleChangeAvatar}
              deleter={deleteAvatar}
            />
          )}
          <Avatar
            sx={styles.imageContainer.avatar}
            src={preview}
            alt='user circle'>
            <AddAvatar handler={handleChangeAvatar} />
          </Avatar>
        </>
      )}
    </>
  )
}
