import { memo, ReactNode, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import {SkillList} from "../../data/skill/SkillList"
import { H3Text } from "../../atoms/text/H3Text";

type Props = {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
};

export const SkillCard: VFC<Props> = memo((props) => {
    const { id, name, imageUrl, description } = props;
    return (
    <Box w="250px" h={{ base: "300px", md: "400px"}} bg="white" borderRadius="10px" shadow="md" p={4}>
        <Stack textAlign="center" >
            <Image h="150px" objectFit="cover" src={imageUrl}/>
            <H3Text>{name}</H3Text>
            <Text mt={{ base: 20, md: 100}}>{description}</Text>
        </Stack>
    </Box>
    );
}) 