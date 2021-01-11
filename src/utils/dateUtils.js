export const now = new Date()

export const completeDate = () => {
  const date =
    now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
  const time = now.getHours() + ':' + now.getMinutes()
  const dateTime = date + ' | ' + time
  return dateTime
}
