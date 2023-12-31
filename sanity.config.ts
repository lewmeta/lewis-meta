import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { myTheme } from './theme'
import { myStructure } from "@/components/Sanity/deskStructure"
import {codeInput} from '@sanity/code-input'


// import { apiVersion, dataset, projectId } from './sanity/env'
// import { schema } from './sanity/schema'
import { schemaTypes } from './schemas'


const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  basePath: '/studio',
  name: 'LewisMeta',
  title: 'Lewis Meta',

  projectId,
  dataset,
  plugins: [deskTool({structure: myStructure
  }), visionTool(), codeInput(),],


  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
    }
  },
  theme: myTheme
})
