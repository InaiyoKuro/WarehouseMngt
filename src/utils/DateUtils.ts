const isInvalidYear = (date: string) => {
  if(!date) return true
  const year = date.split("-")[0]
  return (+year > 3000 || +year < 2000) ? true : false
}

export { isInvalidYear }