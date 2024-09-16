import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
    {
        title: 'Textlight',
        imgSrc: 'images/textlight.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL' ],
        shortDescription: '_a web application with image exporting.',
        longDescription: `Textlight is a web application that lets you create and share syntax-highlighted snippets, with the added ability to export them as polished images. \n\nIt’s perfect for developers and content creators who want to showcase their code beautifully and easily.`,
        githubLink: 'https://github.com/Scynes/textlight',
        liveLink: 'https://textlight.vercel.app'
    },
    {
        title: 'ChatGPT Clone',
        imgSrc: 'images/chatgpt-clone.png',
        technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'MongoDB' ],
        shortDescription: '_a ChatGPT clone web application.',
        longDescription: `The ChatGPT Clone is a streamlined AI chat app that replicates the experience of interacting with OpenAI's ChatGPT. It allows users to engage in conversations with an AI model, providing insightful and responsive answers. \n\nPerfect for exploring AI-driven interactions, this clone offers a straightforward way to experience and test AI capabilities in real time.`,
        githubLink: 'https://github.com/Scynes/nextjs-chatgpt-clone',
        liveLink: 'https://nextjs-chatgpt-clone-five.vercel.app'
    },
    {
        title: 'News Blog',
        imgSrc: 'images/news-blog.png',
        technologies: [ 'JavaScript', 'HTML', 'CSS' ],
        shortDescription: '_a demo landing page for a news website.',
        longDescription: `This is a creative demo representation of a news website’s landing page, showcasing a blend of modern design elements. \n\nIt offers excellent practice in layout design using both flex and grid, highlighting innovative approaches to organizing content and enhancing user experience.`,
        githubLink: 'https://github.com/Scynes/100-days-of-frontend-code?tab=readme-ov-file',
        liveLink: 'https://scynes.github.io/100-days-of-frontend-code/days/6/news-landing-page/'
    }
]