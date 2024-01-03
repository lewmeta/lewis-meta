import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutIntro',
    title: 'About Me Intro',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Page Subtitle',
            description: 'Give a page subtitle here!',
            type: 'string',
        }),
        defineField({
            name: 'name',
            title: 'Your Name',
            description: 'Give your name here!',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Your Bio',
            description: 'Give a brief Bio here',
            type: 'string',
        }),
        defineField({
            name: 'ogmetadatas',
            title: 'Create Meta Data for this page. helps with seo perfomance',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'ogmetadata' } }],
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            description: 'Give your image here!',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'subtitle',
            media: 'image',
        },
    },
})
