'use client';

import { Dock, DockIcon } from '@/components/magicui/dock';
import { Flex, IconButton, Separator, Tooltip } from '@radix-ui/themes';
import { FaHouse, FaFolderOpen, FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";
import { NavigationLink } from './navigation-link';
import { useTheme } from 'next-themes';

export const NavigationBar = () => {

    const { theme, setTheme } = useTheme();

    return (
        <Flex className={ 'z-50 bottom-0 fixed w-full pointer-events-none' }>
            <Dock direction={ 'middle' } className={ 'rounded-full bg-[--color-panel] !gap-0 mb-8 pointer-events-auto' }>
                <DockIcon>
                    <NavigationLink href={ '/' } label={ 'Home' }>
                        <FaHouse size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ '/' } label={ 'Projects' }>
                        <FaFolderOpen size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ '/' } label={ 'Blog' }>
                        <FaNewspaper size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <Separator orientation={ 'vertical' } size={ '4' } />
                <DockIcon>
                    <NavigationLink href={ 'https://github.com/elliesolhjou' } label={ 'GitHub' }>
                        <FaGithub size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ 'https://www.linkedin.com/in/elliesolhjou/' } label={ 'LinkedIn' }>
                        <FaLinkedin size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <Separator orientation={ 'vertical' } size={ '4' } />
                <DockIcon>
                    <Tooltip content={ 'Appearance' }>
                        <IconButton color={ 'gray' } onClick={ () => setTheme(theme === 'light' ? 'dark' : 'light') } radius={ 'full' }>
                            { theme === 'light' ? <IoSunny size={ '1.10rem' } /> : <IoMoon size={ '1.10rem' } /> }
                        </IconButton>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </Flex>
    );
}