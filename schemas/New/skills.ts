import { defineField, defineType } from "sanity"

export default defineType({
    name: "skills",
    title: "My Skills",
    type: "document",
    fields: [
        defineField({
            name: "skillPercentage",
            title: "Skill Percentage",
            description: "Give Skill Percentage Number",
            type: "number"
        }),
        defineField({
            name: "title",
            title: "Skill Name",
            description: "give a skill title here!",
            type: "string"
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
})