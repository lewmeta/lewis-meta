import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutusVideo',
  title: 'AboutUs Video',
  type: 'document',
  fields: [
    defineField({
      name: "description",
      title:"Description",
      description: "give a brief description here for the video ",
      type: "string",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      description: 'Give a backgroud Image here',
      type: 'image',
    }),
    defineField({
      name: 'channel',
      title: 'Channel',
      description: "for now, use YOUTUBE for video!!! copy and paste the video id.",
      type: 'string',
      options: {
        list: [
          {title: "Vimeo", value: "vimeo"},
          {title: "Youtube", value: "youtube"},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'channel',
      media: 'bgImage',
    },
  },
})
