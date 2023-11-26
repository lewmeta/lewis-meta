import {defineField, defineType} from 'sanity'

export default defineType({
    name: "support",
    title: "How to Help",
    type: "document",
    fields: [
        defineField({
           name: "howtos",
           title: "How to help",
           description: "Give an array here",
           type: "array",
           of: [{type: "reference", to: {type: "howto"}}] 
        }),
        defineField({
            name: "pageSubtitle",
            title: "Subtitle",
            description: "testimonials",
            validation: (Rule) => Rule.max(200),
            type: "string",
        }),
        defineField({
            name: "pageTitle",
            title:"Page title ",
            description: "give brief title here:what people say about us ",
            type: "string",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "pageDescription",
            title: "Page Description",
            description: "Give a description here",
            type: "string"
        }),
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
            type: "string",
        }),
        defineField({
            name: "quote",
            title: "Quote",
            description: "Give the testimony here!",
            type: "string",
        }),
    ],
    preview: {
        select: {
            title: 'pageSubtitle',
            // media: 'image',
        }
    }
})