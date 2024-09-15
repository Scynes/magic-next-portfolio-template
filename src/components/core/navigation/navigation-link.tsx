import Link from 'next/link'

export const NavigationLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={ href } className={ 'transition-all p-3 hover:bg-[--gray-3] rounded-full' }>
            { children }
        </Link>
    )
}