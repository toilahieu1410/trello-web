import { useState } from 'react'
import { Box, Button, InputAdornment, TextField,  } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Column from './Column/Column'
import NoteAddIcon  from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'


function ListColumns({ columns }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState('')

  const addNewColumn = () => {
    if (!newColumnTitle) return

    //console.log(newColumnTitle)
    // Gọi API ở đây...

    // Đóng trạng thái thêm Column mới & Clear Input
    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }
  /**
   + Thằng SortableContext yêu cầu items là 1 mảng dạng ['id-1', 'id-2'] chứ ko phải [{id: 'id-1'}, {id: 'id-2'}]
   + Nếu ko đúng thì vẫn kéo thả được nhưng ko có animation
   https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512
    **/
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        {columns?.map(column => ( // Khi co cap ngoac nhon thi phai co return
          <Column key={column._id} column={column}/>
        ))}

        {/* Box add new column*/}
        {!openNewColumnForm ? (
          <Box onClick={toggleOpenNewColumnForm} sx={{
            minWidth: '250px',
            maxWidth: '250px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'

          }}>

            <Button
              startIcon={<NoteAddIcon />}
              sx={{
                color: '#fff',
                width: '100%',
                justifyContent:'flex-start',
                pl: 2.5,
                py: 1
              }}>Add new column</Button>
          </Box>
        ) : (
          <Box sx={{
            minWidth: '250px',
            maxWidth: '250px',
            mx: 2,
            p: 1,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <TextField
              label="Enter column title"
              type="text"
              size="small"
              variant='outlined'
              autoFocus
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              sx={{
                '& label': { color: '#fff' },
                '& input': { color: '#fff' },
                '& label.Mui-focused': { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff'
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff'
                  }
                }
              }}

            />
            <Box sx={{
              display: 'flex',
              alignItems:'center',
              gap:1
            }}>
              <Button
              onClick={addNewColumn}
                variant='contained' color='success' size='small'
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: (theme) => theme.palette.success.main,
                  '&:hover': {bgcolor: (theme) => theme.palette.success.main}
                }}
              >Add Column</Button>
              <CloseIcon
                  fontSize='small'
                  sx={{ color: '#fff', cursor:'pointer',
                    '&:hover': {color: (theme) => theme.palette.warning.light}
                    }}
                  onClick={toggleOpenNewColumnForm}
                />
            </Box>
          </Box>
        )}

      </Box>
    </SortableContext>

  )
}

export default ListColumns