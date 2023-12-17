import {defineField, defineType} from "sanity"

export default defineType({
    name: "mystory",
    title: "Create a short story",
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
            description: "Give a bries description here ",
            type: "string",
        }),
        defineField({
            name: "stories",
            title: "Short Story",
            description: "Create an array here ...",
            type: "array",
            of: [{type: "reference", to: {type: "story"}}] 
         }),
    ],
    preview : {
        select: {
            title: "title"
        },
    },
})