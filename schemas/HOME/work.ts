import {defineField, defineType} from "sanity"

export default defineType({
    name: "work",
    title: "Works",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            validation: (Rule) => Rule.max(100),
            type: "string",
        }),
        defineField({
            name: "id",
            title: "ID",
            type: "number",
        }),
        defineField({
            name: "image",
            title: "Image",
            description: 'Give an Image here!',
            type: "image",
            options: {
             hotspot: true,
            },
         }),
    ],
    preview : {
        select: {
            title: "title",
            media: 'image'
        },
    },
})