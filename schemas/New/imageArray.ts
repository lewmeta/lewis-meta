import {defineField, defineType} from "sanity"

export default defineType({
    name: "imageArray",
    title: "Images Array",
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
            name: "id",
            title: "Id",
            description: "Provide an ID for the image",
            type: "number",
        })
    ],
    preview : {
        select: {
            title: "id",
            media: "image",
        },
    },
})