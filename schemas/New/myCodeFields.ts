import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'myCodeFields',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            type: 'code',
            name: 'myCodeField',
            title: 'Code with all options',
            options: {
                language: 'javascript',
                languageAlternatives: [
                    { title: 'Javascript', value: 'javascript' },
                    { title: 'Typescript', value: 'typescript' },
                    { title: 'Python', value: 'python' },
                    { title: 'HTML', value: 'html' },
                    { title: 'CSS', value: 'css' },
                ],
                withFilename: true,
            },
        }),
    ],
    preview: {
        select: {
            title: "body"
        },
    },
})
