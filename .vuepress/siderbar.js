const { createSideBarConfig } = require('./util')

// 随笔
const JOTTINGS_PATH = '/blogs/jottings'

// tool magazine
const TOOLS_PATH = '/blogs/tools'

// NodeJs
const NODE_PATH = '/blogs/node'



module.exports = {
  [JOTTINGS_PATH]: [
    createSideBarConfig('第一天', JOTTINGS_PATH + '/Hello'),
  ],
  [TOOLS_PATH]: [
    createSideBarConfig('好用的插件', TOOLS_PATH + '/js-tools'),
  ],
  [NODE_PATH]: [
    createSideBarConfig('NodeJs 笔记', NODE_PATH + '/node-base'),
  ],
}
