import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const aliasMap = {
  contexts: 'contexts',
  providers: 'providers',
  types: 'types',
  utils: 'utils',
  components: 'components',
  hooks: 'hooks',
  enums: 'enums',
  styles: 'styles',
  assets: 'assets',
  services: 'services',
  vendors: 'vendors',
}

const calculateRelativePath = (from, to) => {
  return path.relative(from, to).replace(/\\/g, '/')
}

const replaceAliasWithRelativePaths = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)

    if (fs.lstatSync(fullPath).isDirectory()) {
      replaceAliasWithRelativePaths(fullPath)
    } else if (file.endsWith('.d.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8')
      const fileDir = path.dirname(fullPath)

      Object.keys(aliasMap).forEach((alias) => {
        const aliasPath = path.join(__dirname, 'dist/types', aliasMap[alias])
        const relativePath = calculateRelativePath(fileDir, aliasPath)
        const regex = new RegExp(`from '${alias}'`, 'g')
        content = content.replace(regex, `from '${relativePath}'`)
      })

      fs.writeFileSync(fullPath, content, 'utf-8')
    }
  })
}

replaceAliasWithRelativePaths(path.join(__dirname, 'dist/types'))
