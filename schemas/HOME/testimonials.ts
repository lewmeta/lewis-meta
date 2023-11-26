import {defineField, defineType} from 'sanity'

export default defineType({
    name: "testimonials",
    title: "Some Testimonials",
    type: "document",
    fields: [
        defineField({
           name: "testimonay",
           title: "Testimonies",
           description: "Give an array of testimonies",
           type: "array",
           of: [{type: "reference", to: {type: "atest"}}] 
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
    ],
    preview: {
        select: {
            title: 'pageSubtitle',
            // media: 'image',
        }
    }
})