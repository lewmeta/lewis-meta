import { groq } from "next-sanity";



// Get all posts
export const postQuery = groq`*[_type == 'post']{
    ...,
    "tags": tags[]-> {
      title,
      slug,
    },
    "authors": authors[]->{
      name, 
      image,
      "socials": socials[]->{
          platform,
          url
      }
    },
    "postTags": postTags[]->{title,slug },
    "categories": categories[]->{
        _id,
        title,
        number,
      }
  
} | order(_createdAt desc)`;

export const projectQuery = groq`*[_type == 'project']{
  ...,
  "authors": authors[]->{
      name, 
      image,
      socials[]->{
        platform,
        url
      }
  },
  "tags": tags[]-> {
      title,
      slug,
  },
  "categories": categories[]->{
    title,
    number
  },

}`;

// Home Page

export const homeQuery = groq`*[_type == "home"]{
 ..., 
}`
export const aboutIntroQuery = groq`*[_type == "aboutIntro"]{
 ..., 
}`
export const achievementsQuery = groq`*[_type == "achievements"]{
 ..., 
}`

export const experienceQuery = groq`*[_type == 'mystory']{
  ...,
  "stories": stories[]->{
    title, 
    description,
    subtitle,
    "points": points[]->{
        title,
        id,
    }
  },

} | order(_createdAt desc)`;

