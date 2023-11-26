import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { myTheme } from './theme'
import { myStructure } from "@/components/Sanity/deskStructure"

import { apiVersion, dataset, projectId } from './sanity/env'
// import { schema } from './sanity/schema'
import { schemaTypes } from './schemas'

export default defineConfig({
  basePath: '/studio',
  name: 'LewisMeta',
  title: 'Lewis Meta',

  projectId,
  dataset,

  // plugins: [
  //   deskTool({
  //     structure: myStructure
  //   }),
  //   visionTool({ defaultApiVersion: apiVersion }),
  // ],
  plugins: [deskTool({structure: myStructure
  }), visionTool()],


  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
    }
  },
  theme: myTheme
})
