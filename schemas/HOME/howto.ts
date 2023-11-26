import {defineField, defineType} from "sanity"

export default defineType({
    name: "howto",
    title: "HowTos ",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Here you can a description based on the title ...",
            type: "string",
        }),
    ],
    preview : {
        select: {
            title: "title",
            media: ""
        },
    },
})