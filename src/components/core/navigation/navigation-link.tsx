import { Tooltip } from '@radix-ui/themes'
import Link from 'next/link'

export const NavigationLink = ({ href, label, children }: { href: string, label: string, children: React.ReactNode }) => {
    return (
        <Tooltip content={ label }>
            <Link href={ href } className={ 'transition-all p-3 hover:bg-[--gray-3] rounded-full' }>
                { children }
            </Link>
        </Tooltip>
    )
}