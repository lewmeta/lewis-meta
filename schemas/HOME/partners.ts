import {defineField, defineType} from "sanity"

export default defineType({
    name: "partners",
    title: "Fund Raiser",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Create an array",
            description: "Provide images here",
            type: "array",
            of:[{type: "reference", to: {type: "imageArray"}}]
        }),
        defineField({
            name: 'mainImage',
            title: 'Background Image',
            description: 'Give a thumbnail for the Image here',
            type: 'image',
          }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            description: "our partners",
            validation: (Rule) => Rule.max(200),
            type: "string",

        }),
        defineField({
            name: "videoId",
            title: "VideoId",
            description: "Give a video ID from a youtube channel ...",
            type: "string",
        }),
        defineField({
            name: "title",
            title:"Title",
            description: "give brief title here ",
            type: "string",
            validation: (Rule) => Rule.max(45),
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a description here",
            type: "string"
        }),
        defineField({
            name: "amountRaised",
            title: "Amount Raised",
            description: "Give an amount here",
            type: "number"
        }),
        defineField({
            name: "targetAmount",
            title: "Target Amount",
            description: "Give an amount here",
            type: "number"
        }),
        
    ],
    preview: {
        select: {
            title: 'subtitle',
            media: 'mainImage',
        }
    }
}) 