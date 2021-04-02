const { createSideBarConfig } = require('./util')

// 随笔
// const JOTTINGS_PATH = '/blogs/jottings'

// tool magazine
const TOOLS_PATH = '/blogs/tools'

// NodeJs
const NODE_PATH = '/blogs/node'

// Vue Cli
const VUE_CLI = '/blogs/vue-cli'

module.exports = {
  [TOOLS_PATH]: [
    createSideBarConfig('好用的插件', TOOLS_PATH + '/js-tools'),
  ],
  [NODE_PATH]: [
    createSideBarConfig('NodeJs 笔记', NODE_PATH + '/node-base'),
  ],
  [VUE_CLI]: [
    createSideBarConfig('Vue Cli 笔记', VUE_CLI + '/base')
  ]
}
