import { memo, VFC } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"

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
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                    yuomatsu
                </Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
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
                <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />}
                size="lg" variant="unstyled" display={{ base: "block", md: "none"}}
                onClick={onOpen}
                />
        </Flex>
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%">HOME</Button>
                        <Button w="100%">PROFILE</Button>
                        <Button w="100%">SKILL</Button>
                        <Button w="100%">CAREER</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>

        </Drawer>
        </>
    )
}) 