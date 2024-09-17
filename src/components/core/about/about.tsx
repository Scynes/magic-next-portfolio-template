import { Flex, Link, Box } from '@radix-ui/themes';
import { AboutHeading } from './about-heading';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import BoxReveal from '@/components/magicui/box-reveal';
import { SectionHeading } from '../section-heading';
import { Selfie } from './selfie';

export const About = () => {
    return (
        <Flex direction={ 'column' } gap={ '8' }>
            <Selfie />
            <AboutHeading />
            <Flex direction={ 'column' } gap={ '3' }>
                <SectionHeading title={ 'About Me' } />
                <BoxReveal boxColor={ 'black' }>
                    <Box>
                        <AnimatedShinyText className={ 'text-gray-500 text-sm sm:text-lg' } shimmerWidth={ 200 }>
                            In 2023, I finished the <Link color={ 'tomato' } className={ 'underline' } href={ 'https://generalassemb.ly' }>General Assembly Software Engineering</Link> bootcamp and jumped straight into building projects that tackle real-world problems. I love creating clean, practical solutions and enjoy the process of <Link color={ 'tomato' } className={ 'underline' } href={ '/#projects' }>turning ideas into something real</Link>.
                        </AnimatedShinyText>
                        <AnimatedShinyText className={ 'text-gray-500 text-sm sm:text-lg mt-4' } shimmerWidth={ 200 }>
                        Outside of coding, I’m into gaming, skateboarding, and playing piano, always finding ways to balance my creative and tech sides. I’m always looking to learn, improve, and work on cool projects that push me further.
                        </AnimatedShinyText>
                    </Box>
                </BoxReveal>
            </Flex>
            { /* <Technology /> */ }
        </Flex>
    );
}