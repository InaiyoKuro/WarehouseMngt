const isInvalidYear = (date: string) => {
  if(!date) return true
  const year = date.split("-")[0]
  return (+year > 3000 || +year < 2000) ? true : false
}


const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("vi-VN")
}


export { isInvalidYear, formatDate }