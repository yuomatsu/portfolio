import { memo, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { Image, Text } from '@chakra-ui/react';

// import { imgKobe1 } from "../../img/kobe1_mono.jpg";

export const Home: VFC = memo(() => {
    return (
        <Box mt={{ base: 5, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 5, md: "auto"}} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="gray.300" maxW="1200px">
            <Text fontSize='5xl'>Welcome to my portfolio!</Text>
            <Text fontSize='5xl'>Thank you!</Text>
            <Box mt={{ base:5, md: 120}} w="100%" h="900px" position={{ base: "static", md: "relative"}}>
                {/* <Box position={{ base: "static", md: "relative"}} w="100%" h="700px"> */}
                <Image w={{ base: "100%", md: "650px"}} position={{ base: "static", md: "absolute"}} top={{ base: "auto", md: 0}} right={{ base: "auto", md: 10}} src={`${process.env.PUBLIC_URL}/img/kobe1_mono.jpg`} alt="神戸のスタバ"/>
                <Image w={{ base: "100%", md: "650px"}} position={{ base: "static", md: "absolute"}} bottom={{ base: "auto", md: 10}} left={{ base: "auto", md: 10}} src={`${process.env.PUBLIC_URL}/img/kobe2_mono.jpg`} alt="神戸の夜景"/>
                {/* </Box> */}
            </Box>
        </Box>
    )
}) 