export const styles = {
  imageContainer: {
    marginTop: 50,
    width: { xs: 100, md: 180 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    avatarChange: {
      position: 'absolute',
      top: 65,
      left: 10,
    },
    avatar: {
      margin: '0 auto',
      height: '10rem',
      width: '10rem',
    },
    _addPicture: {
      '&:hover': {
        cursor: 'pointer',
      },
      '&:active': {
        color: 'green',
      },
    },
    _deletePicture: {
      '&:hover': {
        cursor: 'pointer',
      },
      '&:active': {
        color: 'red',
      },
    },
  },
}
