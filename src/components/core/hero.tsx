import { Box, Flex } from '@radix-ui/themes';
import TextRevealByWord from '../magicui/text-reveal';

export const Hero = () => {
    return (
        <Flex direction={ 'column' } position={ 'relative' }>
            <TextRevealByWord text={ "Welcome to my portfolio." } />
        </Flex>
    );
}