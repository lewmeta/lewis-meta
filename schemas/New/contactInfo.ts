import { defineField, defineType } from 'sanity'

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
    defineField({
      name: 'ogmetadatas',
      title: 'Create Meta Data for this page. helps with seo perfomance',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'ogmetadata' } }],
    }),
  ],
  preview: {
    select: {
      title: 'subtitle',
    },
  },
})
