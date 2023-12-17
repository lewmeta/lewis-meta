import {defineField, defineType} from "sanity"

export default defineType({
    name: "bioArray",
    title: "Create Points",
    type: "document",
    fields: [
        defineField({
            name: "description",
            title: "Give a Short Paragraph",
            type: "string",
        }),
        defineField({
            name: "id",
            title: "ID",
            type: "number",
        }),
    ],
    preview : {
        select: {
            title: "title",
        },
    },
})