import {defineField, defineType} from "sanity"

export default defineType({
    name: "mystory",
    title: "My Story",
    type: "document",
    fields: [
        defineField({
            name: "subtitle",
            title: "Subtitle",
            description: "our partners",
            validation: (Rule) => Rule.max(200),
            type: "string",

        }),
        defineField ( {
            name: "image",
            title: "Image",
            description: "Give an Image that corresponds to the video thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
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
            name: "videoId",
            title: "Youtube Video ID",
            description: "Give a youtube video ID here",
            type: "string"
        }),
        defineField({
            name: 'slug',
            title: 'slug',
            type: 'slug',
            description: 'DONT FORGET TO GIVE THE SLUG AS IT IS THE URL FOR THIS POST. YOU CAN GENERATE AUTOMATICALLY FROM THE TITLE or type one.!',
            options: {
                source: 'title',
                maxLength: 100,
            }
        }),
        
    ],
    preview: {
        select: {
            title: 'subtitle',
            media: 'image',
        }
    }
}) 