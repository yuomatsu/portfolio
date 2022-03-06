import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const history = useHistory();

    const onClickHome = useCallback(() => history.push("/"), [history]);
    const onClickProfile = useCallback(() => history.push("/profile"), [history]);
    const onClickSkill = useCallback(() => history.push("/skill"), [history]);
    const onClickCareer = useCallback(() => history.push("/career"), [history]);

    return (
        <>
        <Flex
            as="nav"
            bg="#d1d1d1"
            color="gray.700"
            align="center"
            justify="space-between"
            padding={{base: 3, md: 5 }}
        >
            <Flex as="a" _hover={{cursor: "pointer"}}>
                <Heading as="h1" fontSize={{ base: "lg", md: 25 }} onClick={onClickHome}>YU OMATSU</Heading>
            </Flex>
            <Flex align="center" fontSize="sm" display={{ base: "none", md: "flex" }} fontWeight="bold">
                <Box pr={4}>
                    <Link onClick={onClickHome}>HOME</Link>
                </Box>
                <Box pr={4}>
                    <Link onClick={onClickProfile}>PROFILE</Link>
                </Box>
                <Box pr={4}>
                    <Link onClick={onClickSkill}>SKILL</Link>
                </Box>
                <Box pr={4}>
                    <Link onClick={onClickCareer}>CAREER</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer
            onClose={onClose}
            isOpen={isOpen}
            onClickHome={onClickHome}
            onClickProfile={onClickProfile}
            onClickSkill={onClickSkill}
            onClickCareer={onClickCareer}
        />
        </>
        
    )
}) 