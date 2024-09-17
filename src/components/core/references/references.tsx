import Marquee from '@/components/magicui/marquee';
import { REFERENCES } from '@/constants/references';
import { Box, Flex } from '@radix-ui/themes';
import { ReferenceCard } from './reference-card';
import SparklesText from '@/components/magicui/sparkles-text';
import HyperText from '@/components/magicui/hyper-text';
import BlurFade from '@/components/magicui/blur-fade';

export const References = () => {

    return (
        <Flex direction={ 'column' } gap={ '5' } className={ 'min-h-dvh' } align={ 'center' } justify={ 'center' }>
            <Flex direction={ 'column' } align={ 'center' } justify={ 'center' }>
                <BlurFade delay={ 0.2 * 1 } inView>
                    <HyperText text={ "Don't just take my word for it." } className={ 'underline font-bold' } />
                </BlurFade>
                <BlurFade delay={ 0.2 * 2 } inView>
                    <SparklesText text={ 'See What People Say.' } />
                </BlurFade>
            </Flex>
            <Flex className={ 'w-full' } gap={ '4' } wrap={ 'wrap' } justify={ 'between' }>
                <BlurFade delay={ 0.2 * 3 } className={ 'w-full' } inView>
                    <Box className={ 'relative flex w-full flex-col items-center justify-center overflow-hidden' }>
                        <Marquee pauseOnHover className='[--duration:120s]'>
                            {REFERENCES.map((reference, index) => (
                                <ReferenceCard key={index} reference={reference} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className='[--duration:120s]'>
                            {REFERENCES.map((reference, index) => (
                                <ReferenceCard key={index} reference={reference} />
                            ))}
                        </Marquee>
                        <Box className={ 'pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-black' } />
                        <Box className={ 'pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-black' } />
                    </Box>
                </BlurFade>
            </Flex>
        </Flex>
    );
}