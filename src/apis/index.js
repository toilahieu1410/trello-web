import axios from 'axios'
import { API_ROOT } from '~/utilities/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
    const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
    // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
    console.log(response,'resssss')
    return response.data
}