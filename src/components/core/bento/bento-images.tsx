import BlurFade from '@/components/magicui/blur-fade'
import { Flex, Grid } from '@radix-ui/themes'
import Image from 'next/image'

export const BentoImages = () => {

    const images = [
        { src: '/images/skate.jpeg', width: 400, height: 300, alt: 'Placeholder 1', span: { col: 'sm:col-span-2' } },
        { src: '/images/cruise.jpeg', width: 300, height: 400, alt: 'Placeholder 2', span: { col: 'sm:col-span-3' } },
        { src: '/images/pumpkin.jpeg', width: 400, height: 300, alt: 'Placeholder 1', span: { col: 'sm:col-span-3' } },
        { src: '/images/computer.jpeg', width: 400, height: 300, alt: 'Placeholder 1', span: { col: 'sm:col-span-2' } },
    ]

    return (
        <Grid className={ 'grid-cols-2 sm:grid-cols-5 gap-4' }>
            { images.map((image, index) => (
                <div key={ index } className={`relative overflow-hidden max-h-[300px] rounded-lg ${ image.span.col }` }>
                    <BlurFade className={ 'h-full w-full' } yOffset={ 0 } delay={ 0.15 * index } inView>
                        <Image src={ image.src } width={ image.width } height={ image.height } alt={ image.alt } className={ 'object-cover w-full h-full' } />
                    </BlurFade>
                </div>
            )) }
        </Grid>
    )
}