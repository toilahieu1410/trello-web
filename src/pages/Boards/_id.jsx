import { Container } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { createNewCardAPI, createNewColumnAPI, fetchBoardDetailsAPI } from '~/apis'
import { useParams } from 'react-router-dom'

function Board() {

  // const { boardId } = useParams()
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '6685e01719b5bf1a5b27d1cf'
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [])


  // Func này có nhiệm vụ gọi API tạo mới Column và làm lại dữ liệu State Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    console.log('createdColumn', createdColumn)

    // Cập nhật state board
  }

    // Func này có nhiệm vụ gọi API tạo mới Column và làm lại dữ liệu State Board
    const createNewCard = async (newCardData) => {
      const createdCard = await createNewCardAPI({
        ...newCardData,
        boardId: board._id
      })
  
      console.log('createdCard', createdCard)
  
      // Cập nhật state board
    }


  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board}/>
      <BoardContent 
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        />
    </Container>
  )
}

export default Board
