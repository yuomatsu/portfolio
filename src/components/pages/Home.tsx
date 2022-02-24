import { memo, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { Image, Text } from '@chakra-ui/react';

// import { imgKobe1 } from "../../img/kobe1_mono.jpg";

export const Home: VFC = memo(() => {
    return (
        <Box mt={{ base: 5, md: 20}} mb={{ base: 5, md: 20}} mr={{ base: 5, md: "auto"}} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="gray.300" maxW="1200px">
            <Text fontSize='5xl'>Welcome to my portfolio!</Text>
            <Text fontSize='5xl'>Thank you!</Text>
            <Box m={{ base:5, md: 20}}　w="100%" position={{ base: "absolute", md: "relative"}}>
                {/* <Image src={imgKobe1} alt="神戸"/> */}
                <Image w={{ base: "100%", md: "700px"}} position={{ base: "static", md: "absolute"}} top={{ base: "auto", md: 0}} right={{ base: "auto", md: 0}} src={`${process.env.PUBLIC_URL}/img/kobe1_mono.jpg`} alt="神戸のスタバ"/>
                <Image w={{ base: "100%", md: "700px"}} position={{ base: "static", md: "absolute"}} top={{ base: "auto", md: "400px"}} left={{ base: "auto", md: 0}} src={`${process.env.PUBLIC_URL}/img/kobe2_mono.jpg`} alt="神戸の夜景"/>
            </Box>
        </Box>
    )
}) 