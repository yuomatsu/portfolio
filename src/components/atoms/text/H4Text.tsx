import { memo, ReactNode, VFC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const H4Text: VFC<Props> = memo((props) => {
    const { children } = props;
    return <Text as="h4" fontSize={{ base: '1.0rem', md: "1.25rem"}} mt={{ base: 2, md: 3}} fontWeight="bold">{ children }</Text>
}) 