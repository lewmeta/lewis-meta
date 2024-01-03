import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'infoTimes',
  title: 'More Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'socialmedia' } }],
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
      title: 'title',
    },
  },
})
