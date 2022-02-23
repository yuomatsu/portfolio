import { memo, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { Image, Text } from '@chakra-ui/react';

// import { imgKobe1 } from "../../img/kobe1_mono.jpg";

export const Home: VFC = memo(() => {
    return (
        <Box margin={{ base: 5, md: 20}} textAlign="center" backgroundColor="gray.300">
            <Text fontSize='5xl'>Welcome to my portfolio!</Text>
            <Box>
                {/* <Image src={imgKobe1} alt="神戸"/> */}
            </Box>
        </Box>
    )
}) 