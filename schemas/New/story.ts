import { defineField, defineType } from "sanity"

export default defineType({
    name: "story",
    title: "Create Your Story",
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
            name: "date",
            title: "Create Start and End date",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
            name: "points",
            title: "Create Points",
            type: "array",
            of: [{ type: "reference", to: { type: "point" } }]
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: 'image'
        },
    },
})