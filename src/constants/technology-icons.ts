import { Technology } from '@/types/technology';
import { IconType } from 'react-icons';
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiReactjsLine, RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

export const TECHNOLOGY_ICONS: Record<Technology, IconType> = {
    'React': RiReactjsLine,
    'Next.js': RiNextjsFill,
    'Tailwind': RiTailwindCssFill,
    'HTML': RiHtml5Fill,
    'CSS': RiCss3Fill,
    'TypeScript': BiLogoTypescript,
    'JavaScript': RiJavascriptFill,
    'MongoDB': BiLogoMongodb,
    'PostgreSQL': BiLogoPostgresql
}