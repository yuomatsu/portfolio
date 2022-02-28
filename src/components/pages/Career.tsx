import { memo, VFC } from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

// import { CareerList } from "../data/career/CareerList"
import { CareerCard } from "../organisms/skill/CareerCard";
import { H1Text } from "../atoms/text/H1Text";

export const Career: VFC = memo(() => {
    return (
        <>
        <Box pr={{ base: 2, md: 20}} pl={{ base: 2, md: 20}} mt={{ base: 5, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 5, md: "auto"}} ml={{ base: 5, md: "auto"}} /*textAlign="center"*/ backgroundColor="gray.300" maxW="1200px">
            <H1Text>CAREER</H1Text>
            <CareerCard></CareerCard>
        </Box>
        </>
    )
}) 