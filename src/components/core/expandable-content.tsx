"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronRight } from "react-icons/fa6"
import { Avatar, Box, Flex, Text } from '@radix-ui/themes';

export default function ExpandableContent({ title, children }: { title: string; children: React.ReactNode }) {

    const [ isExpanded, setIsExpanded ] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <Flex className={ 'w-full cursor-pointer' } onClick={ toggleExpand } gap={ '3' }>
            <Avatar radius={ 'full' } fallback={ 'A' } size={ '4' }/>
            <Flex direction={ 'column' }>
                <Flex justify={ 'between' }>
                    <Flex direction={ 'column' }>
                        <Flex align={ 'center' } gap={ '2' }>
                            <Text className={ 'font-semibold' }>
                                { title }
                            </Text>
                            <FaChevronRight size={ '1rem' } className={`transform transition-transform duration-300 ${ isExpanded ? "rotate-90" : "" }`} />
                        </Flex>
                        <Text size={ '1' }>Hello</Text>
                    </Flex>
                    <Text size={ '2' } className={ 'text-gray-500' }>May 2022 - Oct 2023</Text>
                </Flex>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={ 'overflow-hidden' }>
                    <Box className={ 'pt-4' }>
                        { children }
                    </Box>
                </motion.div>
            </Flex>
        </Flex>
    )
}
