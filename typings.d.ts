
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _publishedAt: string;
};

interface Author extends Base {
    image: Image;
    name: string;
    description: String;
    slug: Slug;
    socials: Socials[];
}

interface Post extends Base {
    authors: Author[];
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: slug;
    title: string;
    description: string;
    tags: Tag[];
    views: number; // new field added here
    singlePostInformations: [SinglePostInformation];
}
interface Projects extends Base {
    authors: Author[];
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: slug;
    githubLink: string;
    title: string;
    description: slug;
    tags: Tag[];
    views: number; // new field added here
    singlePostInformations: [SinglePostInformation];
}

interface Tag {
    title: string;
}

interface Category extends Base {
    title: string;
    number: number;
}

interface Socials {
    // add more social media platforms as needed
    platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'twitch';
    url: string;
}

interface AboutVideo {
    channel: 'youtube' | 'vimeo';
    videoId: string;
    bgImage: string;
    description?: string;
}

interface LayoutProps {
    className?: string;
    children: ReactNode;
}


interface HomeProps {
    image: string;
    name: string;
    title: string;
    bio: string;
    pdf: string;
}

interface AboutIntro {
    subtitle: string;
    name: string;
    image: string;
    bio: string;
}

interface Achievements {
    value: number;
    title: string;
}

interface MyStory {
    title: string;
    description: string;
    stories: Story[];
}

interface Story {
    title: string;
    description: string;
    subtitle: string;
    points: Point[];
}
interface Point {
    title: string;
    id: number;
}

interface Credentials {
    image: string;
    name: string;
    link: string;
    handle: string;
    socials: Socials[];
    bioArrays: BioArray[];
}

interface BioArray {
    id: number;
    description: string;
}

interface Experience {
    jobTitle: string;
    companyLink: string;
    date: string;
    location: string;
    description: string;
}

interface Educations {
    course: string;
    date: string;
    institution: string;
    description: string;
}

interface Skills {
    title: string;
    // degree: number;
    skillPercentage: number;
}


// My Services;

interface MyServices {
    title: string;
    servicesInfo: ServiceInfo[];
    serviceTitle: ServiceTitle[]
}
interface ServiceInfo {
    image: string;
    title: string;
    price: string;
    points: Point[];
    bioArrays: BioArray[];
}

interface ServiceTitle {
    title: string;
    id: number;
}