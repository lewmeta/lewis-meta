import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'title',
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
