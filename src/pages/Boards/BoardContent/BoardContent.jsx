import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utilities/sorts'
import { 
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
 } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'



function BoardContent({ board }) {

  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

    // yêu cầu con chuột move 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  // Nhấn giữ 250ms và dung sai của cảm ứng ( di chuyển/chênh lệch 5px) thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: {
    delay: 250,
    tolerance: 5,
  } })

  // Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất, ko bị bug
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumsState, setOrderedColumnsState] = useState([])

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    console.log('Event', event)
    const { active, over } = event

    // Kieemr tra neu ko ton tai over ( keo linh tinh ra ngoai thi return luon tranh loi)
    if (!over)  return

    // Nếu vị trí sau khi kéo thả khác vị trí ban đầu
    if (active.id !== over.id) {
      // Lay vi tri cu tu thang active
      const oldIndex = orderedColumsState.findIndex(c => c._id === active.id)

      const newIndex = orderedColumsState.findIndex(c => c._id === over.id)
      // Dùng arrayMove của dnd-kit để sắp xếp lại Columns ban đầu
      const dndOrderedColumsState = arrayMove(orderedColumsState, oldIndex, newIndex )
      // 2 cái console.log dữ liệu này sau dùng để xử lý gọi API
      // const dndOrderedColumsStateIds = dndOrderedColumsState.map(c => c._id)
      // console.log('dndOrderedColumns', dndOrderedColumsState)
      // console.log('dndOrderedColumsStateIds', dndOrderedColumsStateIds)

      // Cập nhật lại state columns ban đầu sau khi kéo thả
      setOrderedColumnsState(dndOrderedColumsState)
    }
  }
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumsState}/>
      </Box>
    </DndContext>

  )
}

export default BoardContent
