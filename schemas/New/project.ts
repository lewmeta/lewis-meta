import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
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
      title: 'Description',
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
      name: 'githubLink',
      title: 'Github Project link',
      type: 'string',
    }),
    defineField({
      name: 'liveSite',
      title: 'Live Site link for this project',
      description: 'Give a live site for this project',
      type: 'string',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'authorinfo' } }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'bioArrays',
      title: 'Create arrays here for the project',
      description: 'Create arrays here for the project to give more information',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'bioArray' } }],
    }),
    defineField({
      name: 'imageArrays',
      title: 'Create arrays for the Image',
      description: 'Create arrays here for the project images to give more information',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'imageArray' } }],
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
      name: 'ogmetadatas',
      title: 'Create Meta Data for this page. helps with seo perfomance',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'ogmetadata' } }],
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
          { title: 'Typescript', value: 'typescript' },
          { title: 'Python', value: 'python' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
        ],
        withFilename: true,
      },
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
