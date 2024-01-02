
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
interface CodeInput {
    _type: 'code';
    language: string;
    code: string;
    filename?: string;
}

interface CodeBlock {
    body: Block[];
    myCodeField : CodeInput;
}

interface MyCodeField {
    _type: 'code';
    language: string;
    code: string;
    filename?: string;
}

interface Post extends Base {
    authors: Author[];
    body: Block[];
    categories: Category[];
    mainImage: Image;
    ogImage: Image;
    slug: slug;
    title: string;
    description: string;
    tags: Tag[];
    myCodeField: MyCodeField;
    codeInput: CodeBlock[];
}

interface ImageArray {
    id: number,
    image: string;
}
// NAVBAR
interface Navbar {
    logo: string;
    socials: Socials[];
    githubLink: string;
}
interface Projects extends Base {
    authors: Author[];
    body: Block[];
    categories: Category[];
    imageArrays: ImageArray[];
    bioArrays: BioArray[];
    mainImage: Image;
    slug: slug;
    githubLink: string;
    liveSite: string;
    title: string;
    description: slug;
    myCodeField: MyCodeField;
    tags: Tag[];
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
    platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'twitch' | 'github';
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
    ogImage: string;
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
    date: string;
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
    title?: string;
    description: string;
}

interface Experience {
    jobTitle: string;
    companyLink: string;
    companyName: string;
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
interface ServiceHeader {
    title: string;
    image: string;
    description: string;
}

// Contact

interface ContactInfo {
    subtitle: string;
    description: string;
    title: string;
}
interface InfoTimesQuery {
    title: string;
    description: string;
    socials : Socials[];
}


interface Comments {
    title: string;
    email: string;
    comment: string;
}

interface CommentProps {
    title: string;
    body: string;
}