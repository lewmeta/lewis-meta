import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ogmetadata',
  title: 'OpenGraph MetaData',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Give a Title for this page. Good for SEO Perfomance',
      description: 'Give a Title for this page. Good for SEO Perfomance',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Give A Description for this page metadata. Helps with SEO',
      description: 'Give A Description for this page metadata. Helps with SEO',
      type: 'string'
    }),
    defineField({
      name: 'authors',
      title: 'Create the Authors for this page. Good for SEO',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'authorinfo' } }],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'ogImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
