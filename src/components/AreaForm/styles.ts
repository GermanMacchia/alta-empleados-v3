import styled from '@emotion/styled'

export const styles = {
  container: {
    marginBottom: { xs: 6, md: 0 },
    width: { xs: '290px', md: '400px' },
    background: { xs: 'none', md: 'white' },
    padding: { xs: '20px 10px', md: 5 },
    color: '#242424',
    margin: { xs: 0, md: '70px 3px' },
    title: {
      fontWeight: '600',
      fontSize: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.4vh',
      width: '100%',
      tag: {
        margin: '5% 0',
      },
    },
    submit: {
      color: '#fff',
      width: '100%',
      textTransform: 'none',
      height: '45px',
      marginTop: '4vh',
    },
  },
}

export const Label = styled.label`
  flex-direction: column;
  align-items: center;
  display: block;
  & > div {
    width: 100%;
    align-self: center;
  }
  & > div div {
    width: 100%;
    border-radius: 10px;
    @media (max-width: 600px) {
      border-radius: 5px;
    }
  }
`
