import { memo, VFC } from "react";
import { Box } from "@chakra-ui/layout";
import { Image, Text } from '@chakra-ui/react';

export const Profile: VFC = memo(() => {
    return (
        <Box mt={{ base: 5, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 5, md: "auto"}} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="gray.300" maxW="1200px">
            <Box mt={{ base: 20, md: 120}} fontSize={{ base: '1.5rem', md: "3rem"}}>
                <Text>PLOFILE</Text>
            </Box>
            <Box mt={{ base: 5, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 0, md: "auto"}} ml={{ base: 0, md: "auto"}} w="100%">
                <Image mb={{ base: 20, md: 0 }} mr={{ base: 0, md: "auto"}} ml={{ base: 0, md: "auto"}} w={{ base: "50vw", md: "300px"}} src={`${process.env.PUBLIC_URL}/img/me_mono.jpg`} alt="yuomatsuの後ろ姿"/>
            </Box>
            <Text>Web Engineer</Text>
            <Box>
                <Text textAlign="left">
                    はじめましてyuomatsuと申します。<br />
                    都内のITコンサルでWebエンジニアとして働いています。<br />
                    フロントエンドとバックエンドどちらの開発も担当しています。<br />
                    より良いサービスを開発・運用できるように日々奮闘しています。<br />
                </Text>
            </Box>
            <Box>
                <Text as="h2">Age</Text>
                <Text>28歳</Text>
                <Text as="h2">Hobby</Text>
                <Text>28歳</Text>
                <Text as="h2">Favorite Food</Text>
                <Text>28歳</Text>
            </Box>
        </Box>
    )
}) 