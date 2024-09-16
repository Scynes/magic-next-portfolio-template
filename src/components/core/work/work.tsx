import { WORK_EXPERIENCES } from '@/constants/work-experiences';
import { Flex, Heading } from '@radix-ui/themes';
import ExpandableContent from '../expandable-content';
import BoxReveal from '@/components/magicui/box-reveal';

export const Work = () => {

    return (
        <Flex direction={ 'column' } gap={ '5' }>
            <BoxReveal boxColor={ 'black' }>
                <Heading weight={ 'bold' } size={{ initial: '4', sm: '6' }} className={ 'underline' }>WORK EXPERIENCE</Heading>
            </BoxReveal>
            <Flex direction={ 'column' } className={ 'w-full' } gap={ '4' }>
                { WORK_EXPERIENCES.map((work, index) => (
                    <ExpandableContent key={ index } experience={ work } />
                )) }
            </Flex>
        </Flex>
    );
}