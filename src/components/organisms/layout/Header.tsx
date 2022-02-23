import { memo, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

import {MenuIconButton} from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
        <Flex
            as="nav"
            bg="gray.400"
            color="gray.700"
            align="center"
            justify="space-between"
            padding={{base: 3, md: 5 }}
        >
            <Flex as="a" _hover={{cursor: "pointer"}}>
                <Heading as="h1" fontSize={{ base: "md", md: 25 }}>
                    yuomatsu
                </Heading>
            </Flex>
            <Flex align="center" fontSize="sm" display={{ base: "none", md: "flex" }}>
                <Box pr={4}>
                    <Link>HOME</Link>
                </Box>
                <Box pr={4}>
                    <Link>PLOFILE</Link>
                </Box>
                <Box pr={4}>
                    <Link>SKILL</Link>
                </Box>
                <Box pr={4}>
                    <Link>CAREER</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen}/>
        </>
        
    )
}) 