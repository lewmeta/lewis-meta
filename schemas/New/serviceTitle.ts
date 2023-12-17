import {defineField, defineType} from "sanity"

export default defineType({
    name: "serviceTitle",
    title: "Service Title",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Service Title",
            type: "string",
        }),
        defineField({
            name: "id",
            title: "Service ID",
            type: "number",
        }),
    ],
    preview : {
        select: {
            title: "title",
        },
    },
})