# Magic Next Portfolio Template

A modern, sleek developer portfolio template built with Next.js, Magic UI, Tailwind CSS, and Radix UI.

![Landing](/public/images/portfolio-1.png)
![Landing](/public/images/portfolio-2.png)

## Overview

Magic Next Portfolio Template is a highly customizable, developer-friendly portfolio solution. It takes inspiration from the Magic UI portfolio template but reimagines it with a unique flavor. The template features smooth animations and transitions, courtesy of Magic UI, creating an engaging and professional showcase for your work.

## Key Features

- **Modern Tech Stack**: Built with Next.js, Magic UI, Tailwind CSS, and Radix UI
- **Sleek Design**: Features a contemporary layout with smooth animations and transitions
- **Highly Customizable**: Easy configuration through constants for personal information, projects, and work experience
- **Responsive**: Looks great on all devices, from mobile to desktop
- **Developer-Friendly**: Streamlined setup process for quick deployment

## Quick Start

1. Clone the repository
2. Install dependencies with `npm install`
3. Customize your information in the constants files (see Configuration section)
4. Run the development server with `npm run dev`
5. Build and deploy your site!

## Configuration

### Adding Projects

To add your projects, edit the `src/constants/projects.ts` file. Here's an example:

```typescript
{
    title: 'Textlight',
    imgSrc: 'images/textlight.png',
    technologies: [ 'React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL' ],
    shortDescription: 'A web application with image exporting.',
    longDescription: `Textlight is a web application that lets you create and share syntax-highlighted snippets, with the added ability to export them as polished images. \n\nIt's perfect for developers and content creators who want to showcase their code beautifully and easily.`,
    githubLink: 'https://github.com/Scynes/textlight',
    liveLink: 'https://textlight.vercel.app'
},
```

### Adding Work Experience

To add your work experience, edit the appropriate constants file (e.g., `src/constants/experience.ts`):

```typescript
{
    company: 'Redit',
    role: 'Software Engineer',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    description: 'Developed various web applications.',
    logoUrl: 'https://example.com/logo-a.png',
},
```

## Customization

The base design provides a solid foundation for your portfolio. Feel free to build upon it or deploy it as is. The modular structure allows for easy customization and extension.

## Upcoming Features

- Blog functionality (in development)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/magic-next-portfolio-template/issues).

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Inspired by the Magic UI portfolio template
- Built with [Next.js](https://nextjs.org/), [Magic UI](https://magic-ui.com/), [Tailwind CSS](https://tailwindcss.com/), and [Radix UI](https://www.radix-ui.com/)

```

Don't forget to replace "yourusername" in the issues page link with your actual GitHub username. You may also want to add or modify sections based on your specific needs or additional features of your template.