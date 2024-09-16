import { About } from '@/components/core/about/about';
import ExpandableContent from '@/components/core/expandable-content';
import { Hero } from '@/components/core/hero/hero';
import { References } from '@/components/core/references/references';
import { Work } from '@/components/core/work/work';
import { Flex, Text } from '@radix-ui/themes';

export default function Page() {
    return (
        <Flex direction={ 'column' } className={ 'relative' } gap={ '8' }>
            <Hero />
            <About />
            <Work />
            <References />
        </Flex>
    );
}