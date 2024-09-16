import { About } from '@/components/core/about/about';
import { Technology } from '@/components/core/about/technology';
import { Education } from '@/components/core/education/education';
import { Hero } from '@/components/core/hero/hero';
import { Projects } from '@/components/core/projects/projects';
import { References } from '@/components/core/references/references';
import { Work } from '@/components/core/work/work';
import { Flex } from '@radix-ui/themes';

export default function Page() {
    return (
        <Flex direction={ 'column' } className={ 'relative' } gap={ '8' }>
            <Hero />
            <About />
            <Work />
            <Education />
            <Technology />
            <Projects />
            <References />
        </Flex>
    );
}