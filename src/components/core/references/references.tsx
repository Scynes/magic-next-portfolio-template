import Marquee from '@/components/magicui/marquee';
import { REFERENCES } from '@/constants/references';
import { Box } from '@radix-ui/themes';
import { ReferenceCard } from './reference-card';

export const References = () => {

    return (
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
    );
}