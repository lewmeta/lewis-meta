import {defineField, defineType} from "sanity"

export default defineType({
    name: "atest",
    title: "Testimony ",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "position",
            title: "Position",
            description: "Here you can give sth like occupation, former student, sponsor and so on",
            type: "string",
        }),
        defineField({
            name: "quote",
            title: "Quote",
            description: "Give the testimony here!",
            type: "string",
        }),
    ],
    preview : {
        select: {
            title: "name",
            media: "image"
        },
    },
})