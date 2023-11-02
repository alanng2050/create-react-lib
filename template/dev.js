const { exec } = require('node:child_process')
const path = require('node:path')
const { watch } = require('chokidar')
const fs = require('fs-extra')
const { cp } = require('node:fs')

const copyTypes = () => {
  const typesDir = path.resolve(__dirname, 'src/types')
  const distTypesDir = path.resolve(__dirname, 'dist', 'types')

  // copy the whole dir
  cp(typesDir, distTypesDir, { recursive: true }, () => {})

  watch(typesDir).on('all', (event, filePath) => {
    if (event === 'change' && filePath.endsWith('.d.ts')) {
      const filename = filePath.split('src/types/').pop()
      fs.copy(filePath, path.resolve(distTypesDir, filename))
    }
  })
}

const distDir = path.resolve(__dirname, 'dist')
exec(`rm -rf ${distDir}`, (err) => {
  if (err) console.log(err)
  else {
    copyTypes()

    exec('tsc --watch')
    console.log('tsc: Watching files...')

    exec('tsc-alias --watch')
    console.log(`tsc-alias: Watching files...`)
  }
})
