import { About } from '@/components/core/about/about';
import { Hero } from '@/components/core/hero/hero';
import { References } from '@/components/core/references/references';
import { Box } from '@radix-ui/themes';

export default function Page() {
    return (
        <Box className={ 'relative' }>
            <Hero />
            <About />
            <References />
        </Box>
    );
}