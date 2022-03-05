import { memo, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { Image, Text } from '@chakra-ui/react';
import { PageInner } from "../organisms/layout/PageInner";

// import { imgKobe1 } from "../../img/kobe1_mono.jpg";

export const Home: VFC = memo(() => {
    return (
        <PageInner>
            <Box mt={{ base: 20, md: 120}} fontSize={{ base: '1.5rem', md: "3rem"}}>
                <Text>Welcome to my portfolio</Text>
                <Text>Thank you!</Text>
            </Box>
            <Box mt={{ base: 20, md: 120}} mb={{ base: 20, md: 0 }} w="100%" h={{ base: "auto", md: "900px"}} position={{ base: "static", md: "relative"}}>
                {/* <Box position={{ base: "static", md: "relative"}} w="100%" h="700px"> */}
                <Image mb={{ base: 20, md: 0 }} w={{ base: "100%", md: "650px"}} position={{ base: "static", md: "absolute"}} top={{ base: "auto", md: 0}} right={{ base: "auto", md: 10}} src={`${process.env.PUBLIC_URL}/img/kobe1_mono.jpg`} alt="神戸のスタバ"/>
                <Image w={{ base: "100%", md: "650px"}} position={{ base: "static", md: "absolute"}} bottom={{ base: "auto", md: 10}} left={{ base: "auto", md: 10}} src={`${process.env.PUBLIC_URL}/img/kobe2_mono.jpg`} alt="神戸の夜景"/>
                {/* </Box> */}
            </Box>
        </PageInner>
    )
}) 