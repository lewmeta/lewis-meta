import { defineField, defineType } from "sanity";

export default defineType( {
    name: "video",
    title: "Video",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "url",
            title: "Video Url",
            type: "url",
        }),

    ]
})