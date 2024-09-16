import BlurFade from '@/components/magicui/blur-fade';
import BoxReveal from '@/components/magicui/box-reveal';
import HyperText from '@/components/magicui/hyper-text';
import IconCloud from '@/components/magicui/icon-cloud';
import { TECHNOLOGIES } from '@/constants/technologies';
import { Badge, Flex, Heading } from '@radix-ui/themes';

export const Technology = () => {

    return (
        <Flex direction={ 'column' } gap={ '5' } className='w-full'>
            <BoxReveal boxColor={ 'black' }>
                <Heading weight={ 'bold' } size={{ initial: '4', sm: '6' }} className={ 'underline' }>
                    <HyperText text={ 'SKILLS' } />
                </Heading>
            </BoxReveal>
            <Flex gap={ '2' } wrap={ 'wrap' }>
                { TECHNOLOGIES.map((tech, index) => (
                    <BlurFade key={ index } delay={ 0.25 * index } inView>
                        <Badge variant={ 'solid' } highContrast>
                            { tech.title }
                        </Badge>
                    </BlurFade>
                )) }
            </Flex>
            <IconCloud iconSlugs={ TECHNOLOGIES.map( tech => tech.simpleIcon ) } />
        </Flex>
    );
}