import { Dock, DockIcon } from '@/components/magicui/dock';
import { Flex, Separator } from '@radix-ui/themes';
import { FaHouse, FaFolderOpen, FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { NavigationLink } from './navigation-link';

export const NavigationBar = () => {
    return (
        <Flex className={ 'relative' } align={ 'center' } justify={ 'center' }>
            <Dock direction={ 'middle' } className={ 'rounded-full bg-[--color-panel] !gap-0' }>
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
                    <NavigationLink href={ '/' } label={ 'GitHub' }>
                        <FaGithub size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ '/' } label={ 'LinkedIn' }>
                        <FaLinkedin size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <Separator orientation={ 'vertical' } size={ '4' } />
                <DockIcon>
                    <NavigationLink href={ '/' } label={ 'Dark Mode' }>
                        <IoSunny size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
            </Dock>
        </Flex>
    );
}