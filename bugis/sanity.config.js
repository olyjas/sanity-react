import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Bugis',

  projectId: 'cd41xr6m',
  dataset: 'bugisdata',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
