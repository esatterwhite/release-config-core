import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'eslint/config'
import logdna from 'eslint-config-logdna'

export default defineConfig([
  {
    'extends': [logdna]
  , 'languageOptions': {
      ecmaVersion: 2022
    , sourceType: 'module'
    }
  , 'rules': {
      'sensible/check-require': [2, 'always', {
        root: dirname(fileURLToPath(import.meta.url))
      }]
    }
  }
])
