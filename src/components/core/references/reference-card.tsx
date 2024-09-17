'use client';

import { MagicCard } from '@/components/magicui/magic-card';
import { Reference } from '@/types/reference';
import { Avatar, Flex, Heading, Text } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export const ReferenceCard = ({ reference }: { reference: Reference }) => {

    const { theme } = useTheme();

    return (
        <MagicCard gradientColor={ theme === 'dark' ? 'black' : 'lightgray' } className={ 'w-72 h-32 p-3' }>
            <Flex direction={ 'column' } className={ 'h-full' } gap={ '2' }>
                <Flex align={ 'center' } gap={ '3' }>
                    <Avatar radius={ 'full' } fallback={ reference.name.substring(0, 1) } src={ 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop' } />
                    <Flex direction={ 'column' }>
                        <Heading size={ '3' } weight={ 'medium' }>
                            { reference.name }
                        </Heading>
                        <Text size={ '2' }>
                            @some_tag
                        </Text>
                    </Flex>
                </Flex>
                <Flex className={ 'mt-auto' }>
                    <Text size={ '2' } className={ 'text-gray-500' }>
                        { reference.description }
                    </Text>
                </Flex>
            </Flex>
        </MagicCard>
    )
}