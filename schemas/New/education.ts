import { defineField, defineType } from "sanity"

export default defineType({
    name: "education",
    title: "Your Education",
    type: "document",
    fields: [
        defineField({
            name: "course",
            title: "Course Name",
            description: "Give the course here",
            type: "string"
        }),
        defineField({
            name: "date",
            title: "Start & end-date | present",
            description: "Give start and end date or present",
            type: "string"
        }),
        defineField({
            name: "institution",
            title: "Institution Name",
            description: "Give the institution name here!",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Course Description",
            description: "Give a description of the job here!",
            type: "string"
        }),
    ],
    preview: {
        select: {
            title: 'course',
        }
    }
})