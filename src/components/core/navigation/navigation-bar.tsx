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
                    <NavigationLink href={ '/' }>
                        <FaHouse size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ '/' }>
                        <FaFolderOpen size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ '/' }>
                        <FaNewspaper size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <Separator orientation={ 'vertical' } size={ '4' } />
                <DockIcon>
                    <NavigationLink href={ '/' }>
                        <FaGithub size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <DockIcon>
                    <NavigationLink href={ '/' }>
                        <FaLinkedin size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
                <Separator orientation={ 'vertical' } size={ '4' } />
                <DockIcon>
                    <NavigationLink href={ '/' }>
                        <IoSunny size={ '1.10rem' } />
                    </NavigationLink>
                </DockIcon>
            </Dock>
        </Flex>
    );
}