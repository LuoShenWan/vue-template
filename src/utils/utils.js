/**
 * Format a date like YYYY-MM-DD.
 *
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
export function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date
    .toISOString()
    .split(/[-:.TZ]/)
    .reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
}

console.log(formatDate('YYYY-MM-DD')) // 2015-02-18
console.log(formatDate('MM/DD/YYYY, HH:mm:ss')) // 02/18/2015, 19:45:31
console.log(formatDate('今ss秒')) // 今31秒

var date = new Date('2015-02-01T01:23:45.678Z')
console.log(formatDate('YYYY-MM-DD', date)) // 2015-02-01
console.log(formatDate('MM/DD/YYYY, HH:mm:ss', date)) // 02/01/2015, 01:23:45
