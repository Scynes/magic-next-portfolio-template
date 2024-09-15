import { Flex } from '@radix-ui/themes';
import { FaChevronDown } from "react-icons/fa6";

export const ScrollIndicator = () => {
    return (
        <Flex position={ 'absolute' } direction={ 'column' } className={ 'scroll-indicator w-full mt-8' } align={ 'center' } justify={ 'center' }>
            <FaChevronDown size={ '2rem' } />
            <FaChevronDown size={ '2rem' } />
            <FaChevronDown size={ '2rem' } />
        </Flex>
    );
}