import { defineField, defineType } from "sanity"

export default defineType({
    name: "comment",
    title: "Create Comment",
    type: "document",
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the commenter',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'Email of the commenter',
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text',
            description: 'The comment left by the user',
        }),
    ],
    preview: {
        select: {
            title: "name",
            // media: "image",
        },
    },
})