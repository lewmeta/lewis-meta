import { defineField, defineType } from "sanity"

export default defineType({
    name: "myservices",
    title: "My Services",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "My Services",
            description: "This just gives the title for this scema!!",
            type: "string",
        }),
        defineField({
            name: "servicesInfo",
            title: "Service Info",
            description: "Create an array of the serive info object...",
            type: "array",
            of: [{ type: "reference", to: { type: "serviceInfo" } }]
        }),
        defineField({
            name: "serviceTitle",
            title: "Service Titles",
            description: "Create an array of the serive titles...",
            type: "array",
            of: [{ type: "reference", to: { type: "serviceTitle" } }]
        }),
        defineField({
            name: 'ogmetadatas',
            title: 'Create Meta Data for this page. helps with seo perfomance',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'ogmetadata' } }],
        }),
    ],
    preview: {
        select: {
            title: "title"
        },
    },
})