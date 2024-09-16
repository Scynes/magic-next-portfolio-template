import HyperText from '@/components/magicui/hyper-text';
import { Flex, Heading } from '@radix-ui/themes';

export const AboutHeading = () => {
    return (
        <Flex gap={ '2' } justify={ 'between' } className={ 'flex-1' }>
            <Flex direction={ 'column' }>
                <Heading size={{ initial: '6', sm: '9' }}>
                    <HyperText text={ "Hi! I'm Dustin." } />
                </Heading>
            </Flex>
        </Flex>
    );
}