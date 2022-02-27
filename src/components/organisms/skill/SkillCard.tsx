import { memo, ReactNode, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import {SkillList} from "../../data/skill/SkillList"

type Props = {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
};

export const SkillCard: VFC<Props> = memo((props) => {
    const { id, name, imageUrl, description } = props;
    return (
    <Box w="300px" h="400px" bg="white" borderRadius="10px" shadow="md" p={4}>
        <Stack textAlign="center">
            <Image h="150px" objectFit="cover" src={imageUrl}/>
            <Text as="h3" mt={{ base: 20, md: 100}}>{name}</Text>
            <Text mt={{ base: 20, md: 100}}>{description}</Text>
        </Stack>
    </Box>
    );
}) 