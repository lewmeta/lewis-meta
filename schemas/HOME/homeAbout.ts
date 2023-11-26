import {defineField, defineType} from "sanity"

export default defineType({
    name: "homeAbout",
    title: "Home About Content",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image Array",
            description: "Provide images here",
            type: "array",
            of:[{type: "reference", to: {type: "imageArray"}}]
        }),
        defineField({
            name: "logoName",
            title: "Logo Name",
            description: "Blessed Generation",
            validation: (Rule) => Rule.max(200),
            type: "string",

        }),
        defineField({
            name: "logo",
            title: "Logo",
            description: 'Give an Image here!',
            type: "image",
            options: {
             hotspot: true,
            },
         }),
         defineField({
            name: "works",
            title: "Work Array",
            description: "Provide what we do here: Title & desc .PLEASE GIVE JUST TWO for to work with the style i have.",
            type: "array",
            of:[{type: "reference", to: {type: "work"}}]
        }),
        defineField({
            name: "title",
            title:"Title",
            description: "give brief title here ",
            type: "string",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a description here",
            type: "string"
        }),
        defineField({
            name: "helped",
            title: "Years Since",
            description: "Give a number count of the years here ...",
            type: "number"
        }),
        defineField({
            name: "videoId",
            title: "Youtube Video ID",
            description: "Give a youtube video ID here",
            type: "string"
        }),
        
    ],
    preview: {
        select: {
            title: 'logoName',
            media: 'logo',
        }
    }
}) 