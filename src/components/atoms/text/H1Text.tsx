import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const H1Text: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
    <Text
        as="h1"
        position="relative"
        textAlign="center"
        fontSize={{ base: '2.75rem', md: "3.25rem"}}
        mt={{ base: 20, md: 50}}
        display="inline" bg={"linear-gradient(transparent 60%, #a4c1d7 60% 90%, transparent 90%)"}
        fontWeight="bold"
    >
    { children }
    </Text>
    )
}) 