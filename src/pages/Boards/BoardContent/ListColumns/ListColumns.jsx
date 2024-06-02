import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon  from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
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
        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
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
      </Box>
    </SortableContext>
 
  )
}

export default ListColumns