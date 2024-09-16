import { About } from '@/components/core/about/about';
import ExpandableContent from '@/components/core/expandable-content';
import { Hero } from '@/components/core/hero/hero';
import { References } from '@/components/core/references/references';
import { Box, Text } from '@radix-ui/themes';

export default function Page() {
    return (
        <Box className={ 'relative' }>
            <Hero />
            <About />
            <ExpandableContent title="References">
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti blanditiis facere beatae rem veniam suscipit quas sunt tempore! Asperiores animi eum, praesentium inventore sit quo impedit sunt est quisquam rem!</Text>
            </ExpandableContent>
            <References />
        </Box>
    );
}