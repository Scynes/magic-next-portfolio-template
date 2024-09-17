import { Flex } from '@radix-ui/themes';
import { SectionHeading } from '../section-heading';
import { PROJECTS } from '@/constants/projects';
import { ProjectCard } from './project-card';

export const Projects = () => {
    return (
        <Flex direction={ 'column' } gap={ '5' }>
            <SectionHeading title={ 'Projects' } />
            <Flex className={ 'w-full' } gap={ '4' } wrap={ 'wrap' } justify={ 'between' }>
                { PROJECTS.map((project, index) => (
                    <ProjectCard project={ project } key={ index } index={ index } />
                ))}
            </Flex>
        </Flex>
    );
}