import { TECHNOLOGY_ICONS } from '@/constants/technology-icons';
import { Project } from '@/types/project';
import { Box, Button, Card, Container, Dialog, Flex, Heading, Inset, Link, ScrollArea, Text, Tooltip, VisuallyHidden } from '@radix-ui/themes';
import { FaEye } from "react-icons/fa6";

import Image from 'next/image';
import BlurFade from '@/components/magicui/blur-fade';

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    
    return (
        <Flex className={ 'min-w-[300px] max-w-fit sm:max-w-[300px]' } direction={ 'column' } gap={ '2' }>
            <Flex gap={{ initial: '1', sm: '2' }} direction={{ initial: 'column', sm: 'row' }}>
                <Heading size={ '3' } weight={ 'bold' }>
                    { project.title }
                </Heading>
            </Flex>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Card size={ '5' } className='relative w-full h-fit'>
                        <Inset clip={ 'padding-box' }>
                            <Flex className={ 'group cursor-pointer z-50 transition-all hover:bg-opacity-15 hover:backdrop-blur-sm h-full w-full absolute' } align={ 'center' } justify={ 'center' }>
                                <FaEye size={ '3rem' } className={ 'transition-all text-[--gray-12] opacity-0 group-active:scale-90 group-hover:opacity-100' } />
                            </Flex>
                            <BlurFade yOffset={ 0 } delay={ 0.5 * index } inView>
                                <Image priority src={ `/${ project.imgSrc }` } alt={ 'placeholder' } width={ 500 } height={ 275 } className={ '-z-20 h-fit rounded-xl' } />
                            </BlurFade>
                        </Inset>
                    </Card>
                </Dialog.Trigger>
                <Dialog.Content size={ '1' } className={ '!outline-none' }>
                    <VisuallyHidden>
                        <Dialog.Title>
                            { project.title }
                        </Dialog.Title>
                    </VisuallyHidden>
                    <Inset clip={ 'padding-box' } side={ 'top' } pb={ 'current' }>
                        <Image priority src={ `/${ project.imgSrc }` } alt={ 'placeholder' } width={ 700 } height={ 400 } className={ 'w-fit rounded-t-xl border-b-[3px] border-[--gray-12]' } />
                    </Inset>
                    <Flex justify={ 'between' }>
                        <Heading size={ '5' } weight={ 'bold' }>
                            { project.title }
                        </Heading>
                        <Flex gap={ '2' }>
                            { project.technologies.map((technology, index) => {
                                
                                const IconComponent = TECHNOLOGY_ICONS[technology];

                                return (
                                    <Tooltip key={ index } content={ technology } className={ 'bg-[--gray-12]' }>
                                        <Box>
                                            <IconComponent size={ '1.5rem' } className={ 'text-[--gray-12]' } />
                                        </Box>
                                    </Tooltip>
                                );
                            }) }
                        </Flex>
                    </Flex>
                    <Text size={ '1' } className={ 'text-[#607B96]' }>
                        { `// ${ project.shortDescription }` }
                    </Text>
                    <Container size={ '1' }>
                        <ScrollArea className={ 'max-h-48' }>
                            <Dialog.Description size={ '2' } className={ 'whitespace-pre-wrap pt-4' }>
                                <Text weight={ 'medium' } className={ 'text-[--gray-9]' }>
                                    { project.longDescription }
                                </Text>
                            </Dialog.Description>
                        </ScrollArea>
                    </Container>
                    <Flex direction={{ initial: 'column', sm: 'row' }} gap={ '3' } mt={ '5' }>
                        <Button asChild variant={ 'outline' } className={ 'transition-all sm:flex-1 cursor-pointer' } size={{ initial: '3', sm: '4' }}>
                            <Link href={ project.liveLink }>
                                Live Deployment
                            </Link>
                        </Button>
                        <Button asChild variant={ 'soft' } className={ 'transition-all sm:flex-1 cursor-pointer text-[--gray-1] bg-[--gray-12]' } size={{ initial: '3', sm: '4' }}>
                            <Link href={ project.githubLink }>
                                GitHub
                            </Link>
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
            <Flex gap={ '2' }>
                { project.technologies.map((technology, index) => {
                    
                    const IconComponent = TECHNOLOGY_ICONS[technology];

                    return (
                        <Tooltip key={ index } content={ technology }>
                            <Box>
                                <IconComponent size={ '1.5rem' } />
                            </Box>
                        </Tooltip>
                    );
                }) }
            </Flex>
        </Flex>
    );
}