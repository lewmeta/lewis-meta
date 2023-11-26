import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bg',
  title: 'BG Kenya',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'Give an image we can use',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'body',
        title: 'Body',
        description: 'Here you can be creative and add every information you want',
        type: 'blockContent',
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
        name: 'authors',
        title: 'Authors',
        description: 'You can give your information as the Author of the Post',
        type: 'array',
        of: [{type: 'reference', to: {type: 'authorinfo'}}],
      }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
})
