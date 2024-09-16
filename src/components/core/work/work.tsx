import { WORK_EXPERIENCES } from '@/constants/work-experiences';
import { Flex } from '@radix-ui/themes';
import ExpandableContent from '../expandable-content';
import BlurFade from '@/components/magicui/blur-fade';
import { SectionHeading } from '../section-heading';

export const Work = () => {

    return (
        <Flex direction={ 'column' } gap={ '5' }>
            <SectionHeading title={ 'Work Experience' } />
            <Flex direction={ 'column' } className={ 'w-full' } gap={ '4' }>
                { WORK_EXPERIENCES.map((work, index) => (
                    <BlurFade key={ index } delay={ 0.25 * index } inView>
                        <ExpandableContent experience={ work } />
                    </BlurFade>
                )) }
            </Flex>
        </Flex>
    );
}