import {defineField, defineType} from 'sanity'

export default defineType({
    name: "achievements",
    title: "Our Achievements",
    type: "document",
    fields: [
        defineField({
           name: "countup",
           title: "Achievemet array",
           description: "Give an array here of the achievements",
           type: "array",
           of: [{type: "reference", to: {type: "countUp"}}] 
        }),
        defineField({
            name: "pageSubtitle",
            title: "Subtitle",
            description: "our achievement",
            validation: (Rule) => Rule.max(200),
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Background Image",
            description: 'Give an Image here!',
            type: "image",
            options: {
             hotspot: true,
            },
         }),
         defineField({
            name: "achievement",
            title: "Work Array",
            description: "Provide a desctription of what BG does.",
            type: "array",
            of:[{type: "reference", to: {type: "work"}}]
        }),
        defineField({
            name: "pageTitle",
            title:"our achievements ",
            description: "give brief title here: our achievements thus far ",
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
            media: 'image',
        }
    }
})