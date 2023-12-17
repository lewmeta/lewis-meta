import { defineField, defineType } from "sanity"

export default defineType({
    name: "credentials",
    title: "More about me",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
            name: 'socials',
            title: 'Social Media',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'socialmedia' } }],
        }),
        defineField({
            name: "bioArrays",
            title: "Create Points",
            type: "array",
            of: [{ type: "reference", to: { type: "bioArray" } }]
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: 'image'
        },
    },
})