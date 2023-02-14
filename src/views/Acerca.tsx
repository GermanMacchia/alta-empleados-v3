import { Box, Typography } from '@mui/material'
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    ul: {
      listStyleType: 'none',
      maxWidth: '210px',
    },
    section: {
      padding: '10px',
      lineHeight: 3,
    },
    title: {
      color: '#a5e4dc',
      padding: '13px 0',
      borderBottom: '2px solid grey',
    },
    link: {
      textDecoration: 'none',
      color: '#64bed9',
    },
  },
}

export const Acerca = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.container.section}>
        <hr />
        <Typography variant='h4' style={styles.container.title}>
          Alta Empleados
        </Typography>
        <hr />
        <ul style={styles.container.ul}>
          <li>
            Aplicación CRUD realizado para el challenge Gotam-Upe por{' '}
            <a
              style={styles.container.link}
              href='https://www.linkedin.com/in/germanmacchia'
              target='_blank'>
              Germán O. Macchia
            </a>
          </li>
        </ul>
        <hr />
      </Box>
      <Box sx={styles.container.section}>
        <Typography variant='h4' style={styles.container.title}>
          Repositorios
        </Typography>
        <ul style={styles.container.ul}>
          <li>
            <a
              style={styles.container.link}
              href='https://github.com/GermanMacchia/alta_personal_frt'
              target='_blank'>
              Front End
            </a>
          </li>
          <li>
            <a
              style={styles.container.link}
              href='https://github.com/GermanMacchia/alta_personal_bck'
              target='_blank'>
              Back End
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  )
}
