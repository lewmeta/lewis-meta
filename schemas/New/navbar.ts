import {defineField, defineType} from "sanity"

export default defineType({
    name: "navbar",
    title: "Navbar",
    type: "document",
    fields: [
        defineField({
           name: "logo",
           title: "Logo",
           type : "image",
           options: {
            hotspot: true,
           },
        }),
        defineField({
            name: 'socials',
            title: 'Social Media',
            type: 'array',
            of: [{type: 'reference', to: {type: 'socialmedia'}}],
        }),
        defineField({
            name: "githubLink",
            title: "Github Link",
            description: "Give the link here!",
            type: "string"
        }),
    ],
    preview : {
        select: {
            title: "githubLink",
            meida: "logo"
        },
    },
})