import IconCloud from '@/components/magicui/icon-cloud';
import { Box } from '@radix-ui/themes';

export const Technology = () => {

    const ICONS = [
        'react',
        'nextdotjs',
        'typescript',
        'tailwindcss',
        'supabase',
        'html5',
        'css3',
        'javascript',
        'postgresql',
        'mongodb',
        'vercel',
        'git',
        'github',
        'svelte',
        'python'
    ];

    return (
        <Box>
            <IconCloud iconSlugs={ ICONS } />
        </Box>
    );
}