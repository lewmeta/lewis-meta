import { defineField, defineType } from "sanity"

export default defineType({
    name: "experience",
    title: "Your Experience",
    type: "document",
    fields: [
        defineField({
            name: "jobTitle",
            title: "Job Title",
            description: "Give a job title",
            type: "string"
        }),
        defineField({
            name: "companyLink",
            title: "Company Link URL",
            description: "Give a link here if any!",
            type: "string"
        }),
        defineField({
            name: "date",
            title: "Start & end-date | present",
            description: "Give start and end date or present",
            type: "string"
        }),
        defineField({
            name: "location",
            title: "Job Location",
            description: "Give location of the Job",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Job Description",
            description: "Give a description of the job here!",
            type: "string"
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
})