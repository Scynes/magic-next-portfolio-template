"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronRight } from "react-icons/fa6"
import { Avatar, Box, Flex, Text } from '@radix-ui/themes';
import { Experience } from '@/types/experience';

export default function ExpandableContent({ experience }: { experience: Experience }) {

    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <Flex className={ `transition-all w-full cursor-pointer rounded-xl p-2 ${ isExpanded && 'bg-[--color-background] shadow-md shadow-[--gray-3]' }` } onClick={ toggleExpand } gap={ '3' }>
            <Avatar src={ experience.logoUrl } radius={ 'full' } fallback={ experience.company.substring(0, 1) } size={ '4' }/>
            <Flex direction={ 'column' } className={ 'w-full' }>
                <Flex justify={ 'between' }>
                    <Flex direction={ 'column' }>
                        <Flex align={ 'center' } gap={ '2' }>
                            <Text className={ 'font-semibold' }>
                                { experience.company }
                            </Text>
                            <FaChevronRight size={ '1rem' } className={`transform transition-transform duration-300 ${ isExpanded ? "rotate-90" : "" }`} />
                        </Flex>
                        <Text size={ '1' }>Master of Science</Text>
                    </Flex>
                    <Text size={ '2' } className={ 'text-gray-500' }>May 2022 - Oct 2023</Text>
                </Flex>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={ 'overflow-hidden' }>
                    <Box className={ 'pt-4' }>
                        <Text>
                            { experience.description }
                        </Text>
                    </Box>
                </motion.div>
            </Flex>
        </Flex>
    )
}
