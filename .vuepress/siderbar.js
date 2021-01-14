const { createSideBarConfig } = require('./util')

// 随笔
const JOTTINGS_PATH = '/blogs/jottings'

// tool magazine
const TOOLS_PATH = '/blogs/tools'


module.exports = {
  [JOTTINGS_PATH]: [
    createSideBarConfig('第一天', JOTTINGS_PATH + '/Hello'),
  ],
  [TOOLS_PATH]: [
    createSideBarConfig('好用的插件', TOOLS_PATH + '/js-tools'),
  ],
}
