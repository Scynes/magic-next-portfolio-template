import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { Box } from '@radix-ui/themes';

export const GridBackground = () => {
    return (
        <Box className={ 'fixed -z-20 flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-20' }>
            <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={3} repeatDelay={1} className={cn("[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]", "inset-x-0 ",)} />
        </Box>
    );
}