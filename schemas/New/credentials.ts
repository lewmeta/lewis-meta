import { defineField, defineType } from "sanity"

export default defineType({
    name: "credentials",
    title: "More about me",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Your name",
            description: "Enter your name here!",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "link",
            title: "Social Link",
            description: "Give a social link",
            type: "string",
        }),
        defineField({
            name: "handle",
            title: "Social Handle",
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
            title: "name",
            media: 'image'
        },
    },
})