import { defineField, defineType } from 'sanity'

export default defineType({
    name: "home",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Your Name",
            description: "give your name here!",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Give Job Title ",
            description: "Give a job Title here!",
            type: "string",
        }),
        defineField({
            name: "bio",
            title: "Short Bio",
            description: "Give a short Bio Here",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "pdf",
            title: "Upload Resume",
            type: "file",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            description: 'Displayed on social cards and search engine results.',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        }
    }
})