import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

import { Typography, Button, Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function Card({ temporaryHideMedia }) {
    
  if(temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://trungquandev.com/wp-content/uploads/2023/08/fit-banner-for-facebook-blog-trungquandev-codetq.png"
          title="green iguana"
        />
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography >Card test 01 </Typography>
          
        </CardContent>
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          <Button size="small" startIcon={<GroupIcon />}>20</Button>
          <Button size="small" startIcon={<CommentIcon />}>15</Button>
          <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
        </CardActions>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://trungquandev.com/wp-content/uploads/2023/08/fit-banner-for-facebook-blog-trungquandev-codetq.png"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography >Lizard </Typography>

      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card