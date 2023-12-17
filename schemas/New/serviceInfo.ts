import { defineField, defineType } from "sanity"

export default defineType({
    name: "serviceInfo",
    title: "Create Service Info",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "My Services",
            description: "This just gives the title for this scema!!",
            type: "string",
        }),
        defineField({
            name: "price",
            title: "Your Price",
            description: "Price for the service",
            type: "string",
        }),
        defineField({
            name: "bioArrays",
            title: "Create Short Paragraphs",
            description: "Create short Paragraphs describing the bio...",
            type: "array",
            of: [{ type: "reference", to: { type: "bioArray" } }]
        }),
        defineField({
            name: "points",
            title: "Create Points",
            type: "array",
            of: [{ type: "reference", to: { type: "point" } }]
        }),
        defineField({
            name: "image",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
})