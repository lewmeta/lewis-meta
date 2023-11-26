import {defineField, defineType} from "sanity"

export default defineType({
    name: "ourwork",
    title: "What we do",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            validation: (Rule) => Rule.max(100),
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a bries description here ",
            validation: (Rule) => Rule.max(230),
            type: "string",
        }),
        defineField({
            name: "image_one",
            title: "Image One",
            description: 'Give an Image here!',
            type: "image",
            options: {
             hotspot: true,
            },
         }),
        defineField({
            name: "image_two",
            title: "Image Two",
            description: 'Give an Image here!',
            type: "image",
            options: {
             hotspot: true,
            },
         }),
        defineField({
            name: "image_three",
            title: "Image Three",
            description: 'Give an Image here!',
            type: "image",
            options: {
             hotspot: true,
            },
         }),
        defineField({
            name: "works",
            title: "Works",
            description: "Give an array here ...",
            type: "array",
            of: [{type: "reference", to: {type: "work"}}] 
         }),
    ],
    preview : {
        select: {
            title: "title"
        },
    },
})