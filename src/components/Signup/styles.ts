import styled from '@emotion/styled'
export const styles = {
  container: {
    width: { xs: 300, md: 320 },
    border: '5px inset #9ce4d9',
    background: '#80364f',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1,
    gap: 2,
    alignItems: 'center',
    justyfyContent: 'space-between',
    margin: { xs: '5vh auto', md: '1vh auto' },
    padding: '4vh',
    form: {
      width: 270,
      background: 'whitesmoke',
      padding: 3,
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 2, md: 1, xl: 3 },
      tag: {
        color: '#242424',
        margin: '5px 0',
      },
      submit: {
        width: '100%',
        height: '40px',
        textTransform: 'none',
      },
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
