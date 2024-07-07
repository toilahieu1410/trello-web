export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}


// Cách xử lý bug logic thư viện Dnd-kit khi column là rỗng:
// Phía FE sẽ tự tạo ra 1 card đặc biệt: Placeholder Card, ko liên quan tới Backend
// Card đặc biệt này sẽ đc ẩn ở giao diện UI người dùng
// Cấu trúc Id của cái card này để Unique rất đơn giản, ko cần phải làm random phức tạp
// "columnId-placeholder-card" (mỗi column chỉ có thể có tối đa 1 cái Placeholder Card)
// Quan trọng khi tạo: phải đầy đủ: (_id, boardId, columnId, FE_PlaceholderCard )
export const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  }
}