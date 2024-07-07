import { Container } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'
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


  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData.board}/>
      <BoardContent board={mockData.board}/>
    </Container>
  )
}

export default Board
