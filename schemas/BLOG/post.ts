import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      description: 'Enter a short snippet for the blog...',
      title: 'Desrption',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'authorinfo' } }],
    }),
    defineField({
      name: "postTags",
      title: "Post Tags",
      description: "This contains the tags in each blog post",
      type: 'array',
      of: [{ type: 'reference', to: { type: 'postTag' } }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      // readOnly: true,

    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      // readOnly: true,   
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      type: 'code',
      name: 'myCodeField',
      title: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'Javascript', value: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
        ],
        withFilename: true,
      },
    }),
    defineField({
      name: 'codeInput',
      title: 'Create code inputs and block contents',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'myCodeFields' } }],
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
