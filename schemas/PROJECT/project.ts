import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'project',
  title: 'Our Projects',
  type: 'document',

  fields: [
    defineField( {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Please give a short title of the Cause Item',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'authorinfo'}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Please give a short brief description of the Cause item',
      validation: (Rule) => Rule.max(200),
      type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'slug',
        type: 'slug',
        description: 'DONT FORGET TO GIVE THE SLUG AS IT IS THE URL FOR THIS POST. YOU CAN GENERATE AUTOMATICALLY FROM THE TITLE',
        options: {
            source: 'title',
            maxLength: 100,
        }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'category',
        type: 'array',
        title: 'Category',
        description: 'PLEASE CHOOSE A CATEGORY FROM WHICH THE ITEM WILL BE GROUPED INTO. YOU HAVE TO CHOOSE!',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'All', value: 'All' },
            { title: 'Bg Ruiru', value: 'Bg Ruiru' },
            { title: 'Bg Malindi', value: 'Bg Malindi' },
            { title: 'Bg Nyamira', value: 'Bg Nyamira' },
            { title: 'Outreach', value: 'Outreach' },
            { title: 'LightHouse Project', value: 'LightHouse Project' },
          ],
        },
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
      defineField({
        name: "tags",
        title: "Tags",
        type: 'array',
        of: [{type: 'reference', to: {type: 'tag'}}],
        // readOnly: true,
  
      }),
      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
        // readOnly: true,   
      }),
    ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})