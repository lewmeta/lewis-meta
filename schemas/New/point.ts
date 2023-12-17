import {defineField, defineType} from "sanity"

export default defineType({
    name: "point",
    title: "Create Points",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
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