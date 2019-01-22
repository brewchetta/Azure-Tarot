export function parseDate(date) {
  let d = date.split('T')[0].split('-')

  d[1] === '01' ? d[1] = 'January' :
  d[1] === '02' ? d[1] = 'February' :
  d[1] === '03' ? d[1] = 'March' :
  d[1] === '04' ? d[1] = 'April' :
  d[1] === '05' ? d[1] = 'May' :
  d[1] === '06' ? d[1] = 'June' :
  d[1] === '07' ? d[1] = 'July' :
  d[1] === '08' ? d[1] = 'August' :
  d[1] === '09' ? d[1] = 'September' :
  d[1] === '10' ? d[1] = 'October' :
  d[1] === '11' ? d[1] = 'November' :
  d[1] === '12' ? d[1] = 'December' :
  d[1] = 'Month'

  return `${d[1]} ${d[2]}, ${d[0]}`
}
