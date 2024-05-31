import { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profile'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar-track': { m: 2 },
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: '#fff' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: '#fff' }}
          />
          <Typography
            variant="span"
            sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{
              color: '#fff',
              border: 'none',
              '&:hover': { border: 'none' },
            }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outlined-search"
          label="search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{color: '#fff'}}/>
              </InputAdornment>
            ), 
            endAdornment: (
              <CloseIcon 
                fontSize='small' 
                sx={{color: searchValue ? '#fff' : 'transparent', cursor: 'pointer'}}
                onClick={() => setSearchValue('')}
                />
            )
          }}
          sx={{ minWidth: 120, 
            maxWidth: 180,  
            '& label': {color: '#fff'},
            '& input': {color: '#fff'},
            '& label.Mui-focused': {color: '#fff'},
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff'
              },
              '&:hover fieldset': {
                borderColor: '#fff'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff'
              },
            },
          }}

        />
        <ModeSelect />
        <Tooltip title="notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationNoneIcon sx={{ color: '#fff' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: '#fff' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
