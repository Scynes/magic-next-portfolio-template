import { Flex } from '@radix-ui/themes';
import TextRevealByWord from '../../magicui/text-reveal';
import { ScrollIndicator } from './scroll-indicator';

export const Hero = () => {
    return (
        <Flex direction={ 'column' }>
            <ScrollIndicator />
            <TextRevealByWord text={ "Welcome to my portfolio." } />
        </Flex>
    );
}