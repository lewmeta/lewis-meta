import {defineField, defineType} from "sanity"

export default defineType({
    name: "mission",
    title: "Mission & Vision",
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
            name: "subtitle",
            title:"Subtitle",
            description: "give a subtitle here: e.g-mission & vision ",
            type: "string",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "title",
            title:"Title",
            description: "give the mission and vision here! ",
            type: "string",
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a description of the mission & vision here",
            type: "string"
        }),
        defineField({
            name: "helped",
            title: "Chilren Inspired",
            description: "Give a number count of the children B.G has helped",
            type: "number"
        }),
        
    ],
    preview: {
        select: {
            title: 'subtitle',
        }
    }
}) 