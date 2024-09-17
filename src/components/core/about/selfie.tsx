import BlurFade from '@/components/magicui/blur-fade';
import Image from 'next/image';

export const Selfie = () => {
    return (
        <BlurFade className={ 'self-center' } inView>
            <Image priority className={ 'rounded-full sm:size-[300px]' } src={ '/images/selfie.jpg' } width={ 200 } height={ 200 } alt={ 'Profile picture avatar' } />
        </BlurFade>
    );
}