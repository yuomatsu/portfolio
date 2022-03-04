import { memo, VFC } from "react";
import { Box, ListItem, UnorderedList } from "@chakra-ui/layout";
import { Image, Text } from '@chakra-ui/react';

import { H1Text } from "../atoms/text/H1Text";
import { H2Text } from "../atoms/text/H2Text"
import { H3Text } from "../atoms/text/H3Text"
import { ProfileCard } from "../organisms/profile/ProfileCard";

export const Profile: VFC = memo(() => {
    return (
        <Box pr={{ base: 10, md: 20}} pl={{ base: 10, md: 20}} mt={{ base: 5, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 5, md: "auto"}} ml={{ base: 5, md: "auto"}} textAlign="center" backgroundColor="gray.300" maxW="1200px">
            <H1Text>PROFILE</H1Text>
            <Box mt={{ base: 100, md: 120}} mb={{ base: 5, md: 20}} mr={{ base: 0, md: "auto"}} ml={{ base: 0, md: "auto"}} w="100%">
                <Image borderRadius="50%" mb={{ base: 20, md: 0 }} mr="auto" ml="auto" w={{ base: "35%", md: "35%"}} minWidth="150px" maxWidth="300px" src={`${process.env.PUBLIC_URL}/img/me_mono.jpg`} alt="yuomatsuの後ろ姿"/>
            </Box>
            <Text fontSize={{ base: '2.0rem', md: "2.5rem"}}>Web Engineer</Text>
            <Box textAlign="center" mt={{ base: 5, md: 10}}>
                <Text display="inline-block" textAlign="left">
                    はじめましてyuomatsuです。<br />
                    都内のITコンサルでWebエンジニアとして働いています。<br />
                    フロントエンドとバックエンドどちらの開発も担当しています。<br />
                    より良いサービスを開発・運用できるように日々奮闘しています。<br />
                </Text>
            </Box>
            <ProfileCard></ProfileCard>
        </Box>
    )
}) 