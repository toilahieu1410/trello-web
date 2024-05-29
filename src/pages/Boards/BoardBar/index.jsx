import React from "react"
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5'
      }}
    >
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label='minhhieudev'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label='Add to Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label='Filter'
          clickable
        />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }}>
        <Button variant='outlined' startIcon={< PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 35,
              height: 35,
              fontSize: 16
            }
          }}
        >
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />

          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
          <Tooltip title='toilahieu1410' >
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.ggpht.com/yti/ANjgQV81eF22wuaEbh_WAS4H6I6eOwnyumZRH7HhBrfpGi9TUxk=s88-c-k-c0x00ffffff-no-rj"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
