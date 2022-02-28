import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const H3Text: VFC<Props> = memo((props) => {
    const { children } = props;
    return <Text as="h3" fontSize={{ base: '1.25rem', md: "1.5rem"}} mt={{ base: 15, md: 30}}>{ children }</Text>
}) 