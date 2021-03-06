import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { H3Text } from "../../atoms/text/H3Text";

type Props = {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
};

export const SkillCard: VFC<Props> = memo((props) => {
    const { name, imageUrl, description } = props;
    return (
    <Box w={{ base: "290px", sm: "270px", md: "270px", lg: "280px"}} h={{ base: "350px", md: "400px"}} bg="white" borderRadius="10px" boxShadow="2px 2px 2px #ccc" p={4}>
        <Stack textAlign="center" >
            <Image h="150px" objectFit="cover" src={imageUrl}/>
            <H3Text>{name}</H3Text>
            <Text textAlign="left" mt={{ base: 20, md: 100}}>{description}</Text>
        </Stack>
    </Box>
    );
}) 