import { defineField, defineType } from "sanity"

export default defineType({
    name: "achievements",
    title: "My Achievements",
    type: "document",
    fields: [
        defineField({
            name: "value",
            title: "Value",
            description: "Give the value for the number here. eg.  10012",
            type: "number"
        }),
        defineField({
            name: "title",
            title: "Title",
            description: "give a title here",
            type: "string"
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
})