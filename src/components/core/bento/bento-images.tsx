import BlurFade from '@/components/magicui/blur-fade'
import { Flex, Grid } from '@radix-ui/themes'
import Image from 'next/image'

export const BentoImages = () => {

    const images = [
        { src: '/images/skate.jpeg', width: 400, height: 300, alt: 'Placeholder 1', span: { col: 2, row: 1 } },
        { src: '/images/cruise.jpeg', width: 300, height: 400, alt: 'Placeholder 2', span: { col: 3, row: 2 } },
        { src: '/images/pumpkin.jpeg', width: 400, height: 300, alt: 'Placeholder 1', span: { col: 3, row: 2 } },
        { src: '/images/computer.jpeg', width: 400, height: 300, alt: 'Placeholder 1', span: { col: 2, row: 1 } },
    ]

    return (
        <Grid className={ 'grid grid-cols-1 sm:grid-cols-5 gap-4' }>
            { images.map((image, index) => (
                <Flex key={ index } className={`relative overflow-hidden max-h-[300px] rounded-lg ${ image.span.col > 1 ? `sm:col-span-${ image.span.col }` : ''} ${ image.span.row > 1 ? `sm:row-span-${ image.span.row }` : '' }`}>
                    <BlurFade className={ 'h-full w-full' } yOffset={ 0 } delay={ 0.15 * index } inView>
                        <Image src={ image.src } width={ image.width } height={ image.height } alt={ image.alt } className={ 'object-cover w-full h-full' } />
                    </BlurFade>
                </Flex>
            )) }
        </Grid>
    )
}