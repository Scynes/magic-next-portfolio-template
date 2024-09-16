import { Heading } from '@radix-ui/themes'
import BoxReveal from '../magicui/box-reveal'
import HyperText from '../magicui/hyper-text'

export const SectionHeading = ({ title }: { title: string }) => {
    return (
        <BoxReveal boxColor={ 'black' }>
            <Heading weight={ 'bold' } size={{ initial: '4', sm: '6' }} className={ 'underline' }>
                <HyperText text={ title } />
            </Heading>
        </BoxReveal>
    );
}