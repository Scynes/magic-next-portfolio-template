import { Flex, Heading, Link } from '@radix-ui/themes';
import { AboutHeading } from './about-heading';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { Technology } from './technology';
import BoxReveal from '@/components/magicui/box-reveal';

export const About = () => {
    return (
        <Flex className={ 'min-h-dvh' } direction={ 'column' } gap={ '8' }>
            <AboutHeading />
            <Flex direction={ 'column' } gap={ '3' }>
                <BoxReveal boxColor={ 'black' }>
                    <Heading weight={ 'bold' } size={{ initial: '4', sm: '6' }} className={ 'underline' }>ABOUT</Heading>
                </BoxReveal>
                <BoxReveal boxColor={ 'black' }>
                    <AnimatedShinyText className={ 'text-gray-400 text-sm sm:text-lg' } shimmerWidth={ 200 }>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod delectus eveniet cumque nesciunt, odit non, <Link href={ '/' }>quasi quam laboriosam sint voluptatum beatae</Link> dicta labore eos voluptates. Dignissimos quam nesciunt ad culpa <Link href={ '/' }>repellat praesentium explicabo nihil</Link>. Libero aut provident quos voluptates incidunt.
                    </AnimatedShinyText>
                </BoxReveal>
            </Flex>
            <Technology />
        </Flex>
    );
}