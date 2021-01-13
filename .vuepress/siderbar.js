const { createSideBarConfig } = require('./util')

const JOTTINGS_PATH = '/blogs/jottings'

module.exports = {
  [JOTTINGS_PATH]: [
    createSideBarConfig('第一天', JOTTINGS_PATH + '/Hello'),
  ]
}
