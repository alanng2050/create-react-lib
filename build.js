const { exec } = require('node:child_process')
const path = require('node:path')
const { cp } = require('node:fs')

const copyTypes = () => {
  const typesDir = path.resolve(__dirname, 'src/types')
  const distTypesDir = path.resolve(__dirname, 'dist', 'types')
  // copy the whole dir
  cp(typesDir, distTypesDir, { recursive: true }, () => {})
}

const build = async () => {
  console.log('Building...')
  exec('tsc', () => {
    console.log('Replacing path alias...')
    exec('tsc-alias', () => {
      console.log('Finished')
    })
  })
}

const distDir = path.resolve(__dirname, 'dist')
exec(`rm -rf ${distDir}`, (err) => {
  if (err) console.log(err)
  else {
    copyTypes()
    build()
  }
})
