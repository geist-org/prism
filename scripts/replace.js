const path = require('path')
const fsp = require('fs').promises

const replaceCommonJS = async () => {
  const cjs = path.join(__dirname, '../', 'dist/index.js')
  const content = await fsp.readFile(cjs, 'utf-8')
  const next = content.replace(
    "require('./styled-jsx.cjs.js')",
    "require('../../core/dist/styled-jsx.cjs.js')",
  )
  await fsp.writeFile(cjs, next, 'utf-8')
}

const removeUnused = async () => {
  const dist = path.join(__dirname, '../', 'dist')
  const files = ['styled-jsx.cjs.js', 'styled-jsx.es.js', 'styled-jsx-server.es.js']
  await Promise.all(
    files.map(async name => {
      const filePath = path.join(dist, name)
      try {
        await fsp.access(filePath)
        await fsp.rm(filePath)
      } catch (err) {}
    }),
  )
}

;(async () => {
  await replaceCommonJS()
  await removeUnused()
})()
