import { Flex, Link } from '@radix-ui/themes';
import { AboutHeading } from './about-heading';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import BoxReveal from '@/components/magicui/box-reveal';
import { SectionHeading } from '../section-heading';

export const About = () => {
    return (
        <Flex className={ '' } direction={ 'column' } gap={ '8' }>
            <AboutHeading />
            <Flex direction={ 'column' } gap={ '3' }>
                <SectionHeading title={ 'About Me' } />
                <BoxReveal boxColor={ 'black' }>
                    <AnimatedShinyText className={ 'text-gray-400 text-sm sm:text-lg' } shimmerWidth={ 200 }>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod delectus eveniet cumque nesciunt, odit non, <Link href={ '/' }>quasi quam laboriosam sint voluptatum beatae</Link> dicta labore eos voluptates. Dignissimos quam nesciunt ad culpa <Link href={ '/' }>repellat praesentium explicabo nihil</Link>. Libero aut provident quos voluptates incidunt.
                    </AnimatedShinyText>
                </BoxReveal>
            </Flex>
            { /* <Technology /> */ }
        </Flex>
    );
}