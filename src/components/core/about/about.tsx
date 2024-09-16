import { Flex } from '@radix-ui/themes';
import { AboutHeading } from './about-heading';

export const About = () => {
    return (
        <Flex className={ 'min-h-dvh' }>
            <AboutHeading />
        </Flex>
    );
}