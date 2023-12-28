import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'CONTNACT INFORMATION',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'Title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: "string",

    }),   
  ],
  preview: {
    select: {
      title: 'subtitle',
    },
  },
})
