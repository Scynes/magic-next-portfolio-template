import { Flex } from '@radix-ui/themes';
import ExpandableContent from '../expandable-content';
import BlurFade from '@/components/magicui/blur-fade';
import { EDUCATION } from '@/constants/education';
import { SectionHeading } from '../section-heading';

export const Education = () => {

    return (
        <Flex direction={ 'column' } gap={ '5' }>
            <SectionHeading title={ 'Education' } />
            <Flex direction={ 'column' } className={ 'w-full' } gap={ '4' }>
                { EDUCATION.map((work, index) => (
                    <BlurFade key={ index } delay={ 0.25 * index } inView>
                        <ExpandableContent experience={ work } />
                    </BlurFade>
                )) }
            </Flex>
        </Flex>
    );
}