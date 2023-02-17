import IconButton from '@mui/material/IconButton'
import DescriptionIcon from '@mui/icons-material/Description'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import TerminalIcon from '@mui/icons-material/Terminal'
import { FC } from 'react'
import { TablesOptions, Options } from '../../hooks/useTableFilter'

interface Props {
  handleFilter: (option: Options) => void
  optionsActive: TablesOptions
}

export const OptionButtons: FC<Props> = ({ handleFilter, optionsActive }) => {
  return (
    <>
      <IconButton onClick={() => handleFilter('nyap')}>
        <FingerprintIcon
          sx={{ color: optionsActive?.nyap ? 'green' : 'none' }}
        />
      </IconButton>
      <IconButton onClick={() => handleFilter('area')}>
        <AccountTreeIcon
          sx={{ color: optionsActive?.area ? 'green' : 'none' }}
        />
      </IconButton>
      <IconButton onClick={() => handleFilter('esDesarrollador')}>
        <TerminalIcon
          sx={{ color: optionsActive?.esDesarrollador ? 'green' : 'none' }}
        />
      </IconButton>
      <IconButton onClick={() => handleFilter('descripcion')}>
        <DescriptionIcon
          sx={{ color: optionsActive?.descripcion ? 'green' : 'none' }}
        />
      </IconButton>
    </>
  )
}
